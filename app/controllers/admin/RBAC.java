package controllers.admin;

import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import models.rbac_role;
import models.rbac_role_group;
import models.rbac_usergroup;
import models.rbac_users;
import play.db.jpa.JPA;
import play.mvc.Controller;
import backmodels.rbac_usergrouplist;
import backmodels.rbac_usergrouprolelist;
import backmodels.rbac_userlist;

import com.alibaba.fastjson.JSON;

public class RBAC extends Controller{
	//用户操作-------------------------
	//添加用户
	public static void addUser(String username,String name,String email,String password,String groupid,String state) throws UnsupportedEncodingException{
		
		
		DateFormat dt=DateFormat.getInstance();
		String logintime = dt.format(new Date()).toString(); 
		rbac_users users = new rbac_users(username, name, email, password, logintime, "", state);
		rbac_usergroup group = new rbac_usergroup();
		group.id = Integer.parseInt(groupid);
		users.group = group;
		users.save();		
		renderJSON("{\"state\":\"ok\"}");
	}
	public static void selectUser(int id){
		
	}
	public static void allUser(){
		String hql = "select new backmodels.rbac_userlist(users.id,users.username,users.name,users.email,users.status,g.id,g.groupname)  from rbac_usergroup g left join g.users users where users.group.id = g.id";
		Query query = JPA.em().createQuery(hql);		
		List<rbac_userlist> UserGroup =query.getResultList();
		List<rbac_usergroup> Group = rbac_usergroup.find("select id,groupname from rbac_usergroup ").fetch();
		String Str=JSON.toJSONString(UserGroup);
		String roleStr = JSON.toJSONString(Group);
		String jsonStr = "{\"data\":"+Str+",\"grouplist\":"+roleStr+"}";
		System.out.println(">>>>>"+jsonStr);
		renderJSON(jsonStr);
	}
	public static void updateUser(int id ,String username2,String name2,String email2,String udpassword,int group2,String state2){
		System.out.println("id->"+id);

		System.out.println("username->"+username2);
		System.out.println("name->"+name2);
		System.out.println("email->"+email2);
		System.out.println("password->"+udpassword);
		System.out.println("groupid->"+group2);
		System.out.println("state->"+state2);
		DateFormat dt=DateFormat.getInstance();
		String logintime = dt.format(new Date()).toString(); 
		rbac_users users = rbac_users.findById(id);
		users.username = username2;
		users.name = name2;
		users.email = email2;
		users.password = udpassword;
		users.status = state2;
		users.logintime = logintime;		
		rbac_usergroup group = new rbac_usergroup();
		group.id = group2;
		users.group = group;
		users.save();		
		renderJSON("{\"state\":\"ok\"}");
	}
	
	
	public static void delUser(int id){
		rbac_users users = rbac_users.findById(id);
		users.delete();
		renderJSON("{state:ok}");
	}
	//用户组管理
	//添加用户组
	public static void addUserGroup(String groupname,String state,String beizhu,String par,String role){
		System.out.println("-------------->"+role);
		rbac_usergroup group = new rbac_usergroup(groupname, state, beizhu,Integer.parseInt(par)).save();
//		int id = group.getId();
		if(role!=null){
			String[] strArray = role.split(",");
			for(int i = 0;i<strArray.length;i++){
				int roleID = Integer.parseInt(strArray[i].trim());
				rbac_role rolem = new rbac_role();
				rolem.id = roleID;
				new rbac_role_group(group,rolem).save();
			}
		}
		
		
		
		renderJSON("{\"status\":\"ok\"}");
	}
	
	public static void updateUserGroup(int id,String groupname2,String state2,String beizhu2,String par2,String role2){
		rbac_usergroup group = rbac_usergroup.findById(id);
		group.groupname = groupname2;
		group.status = state2;
		group.pid = Integer.parseInt(par2);
		group.remark = beizhu2;
		group.save();
//		int id = group.getId();
		
//		rbac_usergroup group2 = new rbac_usergroup(); 
//		rbac_role_group.find("delete from rbac_role_group rg where rg.groups.id="+Integer.toString(id)).fetch();
		
		String hql = "delete from rbac_role_group rg where rg.groups.id="+Integer.toString(id);
		Query sumquery = JPA.em().createQuery(hql);		
		int sumList =sumquery.executeUpdate();
		
		if(role2!=null){
			String[] strArray = role2.split(",");
			for(int i = 0;i<strArray.length;i++){
				int roleID = Integer.parseInt(strArray[i].trim());
				rbac_role rolem = new rbac_role();
				rolem.id = roleID;
				new rbac_role_group(group,rolem).save();
			}
		}
		renderJSON("{\"status\":\"ok\"}");
		
		
	}
	//获取全部用户组
	public static void allUserGroup(){
//		String hql = "select g.groupname,g.status,r.name,count(u.id) from rbac_usergroup g left join g.users u  left  join g.groups gr left join gr.roles r where g.id=u.group.id and  g.id = gr.groups.id and gr.roles.id = r.id ";
		//用户组基本信息
		String hql = "select new backmodels.rbac_usergrouplist(g.id,g.groupname,g.status,g.remark)  from rbac_usergroup g order by g.id desc";
		Query query = JPA.em().createQuery(hql);		
		List<rbac_usergrouplist> GroupList =query.getResultList();
		//用户组角色信息	
		String rolehql = "select new backmodels.rbac_usergrouprolelist(g.id,r.name) from rbac_usergroup g left join g.groups gr left join gr.roles r where g.id = gr.groups.id and gr.roles.id = r.id";
		Query rolequery = JPA.em().createQuery(rolehql);		
		List<rbac_usergrouprolelist> RoleList =rolequery.getResultList();
		//用户组父级名称
//		String pidhql = "select new backmodels.rbac_usergrouplist(g1.id ,g1.groupname) from rbac_usergroup g1 where g1.pid = (select g2.id from rbac_usergroup g2 where g2.id = g1.pid)";
		String pidhql = "select new backmodels.rbac_usergrouplist(g1.id ,g2.groupname) from rbac_usergroup g1,rbac_usergroup g2 where g1.pid = g2.id";
		Query pidquery = JPA.em().createQuery(pidhql);		
		List<rbac_usergrouplist> PidList =pidquery.getResultList();
		
		String sumhql = "select new backmodels.rbac_usergrouplist(g.id,count(u.id)) from rbac_usergroup g left join g.users u where g.id = u.group.id";
		Query sumquery = JPA.em().createQuery(sumhql);		
		List<rbac_usergrouplist> sumList =sumquery.getResultList();
		
		List<rbac_usergrouplist> grouplist = new ArrayList<rbac_usergrouplist>();
		for(int i = 0 ;i <GroupList.size();i++){
			System.out.println(GroupList.get(i).getId());
			rbac_usergrouplist groupItem = new rbac_usergrouplist();
			groupItem.setId(GroupList.get(i).getId());
			groupItem.setGroupname(GroupList.get(i).getGroupname());
			groupItem.setStatus(GroupList.get(i).getStatus());
			groupItem.setSumuser(GroupList.get(i).getSumuser());
			groupItem.setRemark(GroupList.get(i).getRemark());
			grouplist.add(groupItem);
		}
		//角色统计
		for(int i = 0;i<grouplist.size();i++){
			List<String> roleStr = new ArrayList<String>();
			for(int j = 0;j<RoleList.size();j++){
				if(grouplist.get(i).getId()==RoleList.get(j).getId()){
					roleStr.add(RoleList.get(j).getRole());
				}
			}
			grouplist.get(i).setRole(roleStr);
		}		
		//成员数统计  bug
//		for(int i = 0;i<grouplist.size();i++){
//			for(int m = 0;m<sumList.size();m++){
////				System.out.println(sumList.get(m).getId());
//				if(grouplist.get(i).getId()==sumList.get(m).getId()){
//					grouplist.get(i).setSumuser(sumList.get(m).getSumuser());
//				}else
//					if(grouplist.get(i).getId()==sumList.get(m).getId()){
//						grouplist.get(i).setSumuser(sumList.get(m).getSumuser());
//					}
//			}
//			
//		}
		//父组统计
		for(int i = 0;i<grouplist.size();i++){
			for(int m = 0;m<PidList.size();m++){
				if(grouplist.get(i).getId()==PidList.get(m).getId()){
					grouplist.get(i).setGroupparname(PidList.get(m).getGroupparname());
				}
			}
			
		}
		
		List<rbac_usergroup> Group = rbac_usergroup.find("select id,groupname from rbac_usergroup ").fetch();
		String groupStr = JSON.toJSONString(Group);
		List<rbac_role> Role = rbac_usergroup.find("select id,name from rbac_role ").fetch();
		String roleStr = JSON.toJSONString(Role);
		
		
		String str=JSON.toJSONString(grouplist);
		String jsonStr = "{\"data\":"+str+",\"grouplist\":"+groupStr+",\"rolelist\":"+roleStr+"}";
		renderJSON(jsonStr);
		
	}
	//删除用户组
	public static void delUserGroup(int id){
		rbac_usergroup usersgroup = rbac_usergroup.findById(id);
		usersgroup.delete();
		renderJSON("{\"state\":\"ok\"}");
	}
	//获取指定用户组
	public static void getUserGroup(){
		
	}
	
	
	//角色操作
	public static void addRole(String rolename,String roleid,String state,String node,String remark){
		System.out.println(rolename);
		System.out.println(roleid);
		System.out.println(state);
		new rbac_role(rolename,roleid,state,remark,node).save();
		renderJSON("{\"state\":\"ok\"}");
	}
	public static void selectRole(){
		
	}
	public static void allRole(){
		List<rbac_role> RoleGroup = rbac_role.find("order by id desc").fetch();		
		String roleStr = JSON.toJSONString(RoleGroup);
		String jsonStr = "{\"data\":"+roleStr+"}";
		renderJSON(jsonStr);
	}
	public static void updateRole(){
		
	}
	public static void delRole(int id){
		rbac_role userrole = rbac_role.findById(id);
		userrole.delete();
		renderJSON("{\"state\":\"ok\"}");
	}
	//权限操作
	
	
}
