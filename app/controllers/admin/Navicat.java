package controllers.admin;

import java.util.List;

import models.rbac_role;
import models.sys_navlist;
import play.mvc.Controller;
import backmodels.sys_navicattree;

import com.alibaba.fastjson.JSON;

public class Navicat extends Controller{
	
	public static void allNavicat(){
		List<sys_navicattree> treelist =  sys_navlist.find("select new backmodels.sys_navicattree(tid,pid,title) from sys_navlist order by id asc").fetch();
		String pStr=JSON.toJSONString(treelist);
		String jsonStr = "{\"treeList\":"+pStr+"}";
		System.out.println(pStr);
		renderJSON(jsonStr);
	}
	public static void checkNavicat( String id){
		System.out.println(id);
		List<sys_navicattree> treelist =  sys_navlist.find("select new backmodels.sys_navicattree(tid,pid,title) from sys_navlist order by id asc").fetch();
		List<String> roleNode = rbac_role.find("select node from rbac_role where id="+id).fetch();
		String rStr=JSON.toJSONString(roleNode.get(0));
		if(rStr!=null){
			rStr = rStr.substring(1,rStr.length()-1);
			String[] strArray = rStr.split(",");
			
			System.out.println(strArray.length);
		
			for(int i = 0;i<strArray.length;i++){
				for(int m =0 ;m<treelist.size();m++){
					if(treelist.get(m).getId()==Integer.parseInt(strArray[i])){
						treelist.get(m).setChecked(true);
					}
				}
			}	
		}
		
		
		
		String pStr=JSON.toJSONString(treelist);
		String jsonStr = "{\"treeList\":"+pStr+"}";
		System.out.println(pStr);
		renderJSON(jsonStr);
	}
	public static void allMenus(){
		sys_navlist navlist = new sys_navlist();
		String jsonStr = navlist.getAllMenus();
		renderJSON(jsonStr);
	}
}
