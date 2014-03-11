package jobs;

import models.mag_classify;
import models.mag_worksclass;
import models.rbac_role;
import models.rbac_role_group;
import models.rbac_usergroup;
import models.rbac_users;
import models.sys_navlist;
import play.jobs.Job;
import play.jobs.OnApplicationStart;
@OnApplicationStart
public class Bootstarp extends Job{
	public void doJob() {	
		//初始化角色
		if (rbac_role.count() == 0) {
			new rbac_role("超级管理员","0","有效","超级管理员","").save();
			new rbac_role("管理员","0","有效","管理员","").save();			
			new rbac_role("会员","0","有效","会员","").save();
			
		}
		//初始化用户组
		if (rbac_usergroup.count() == 0) {
			rbac_usergroup group = new rbac_usergroup("超级管理员组","有效","超级管理员组",0).save();
			rbac_role role = rbac_role.findById(1);
			new rbac_role_group(group, role).save();	
			
			rbac_usergroup group2 = new rbac_usergroup("管理员组","有效","管理员组",1).save();
			rbac_role role2 = rbac_role.findById(2);
			new rbac_role_group(group2, role2).save();		
			
			rbac_usergroup group3 = new rbac_usergroup("会员组","有效","会员组",0).save();
			rbac_role role3 = rbac_role.findById(3);
			new rbac_role_group(group3, role3).save();		
			
			rbac_usergroup group4 = new rbac_usergroup("SVIP组","有效","SVIP组",3).save();
			rbac_role role4 = rbac_role.findById(3);
			new rbac_role_group(group4, role4).save();	
			
			
			rbac_usergroup group5 = new rbac_usergroup("VIP组","有效","VIP组",3).save();
			rbac_role role5 = rbac_role.findById(3);
			new rbac_role_group(group5, role5).save();		
			
			
			rbac_usergroup group6 = new rbac_usergroup("普通组","有效","普通组",3).save();
			rbac_role role6 = rbac_role.findById(3);
			new rbac_role_group(group6, role6).save();		
			
		}
		//初始化用户
		if (rbac_users.count() == 0) {
			rbac_users user = new rbac_users("admin","超级管理员","xinmowen@qq.com","123","","","有效");
			rbac_usergroup group = rbac_usergroup.findById(1);
			user.group=group;
			user.save();
			
			
			rbac_users user1 = new rbac_users("root","管理员","xinmowen1@qq.com","123","","","有效");
			rbac_usergroup group1 = rbac_usergroup.findById(2);
			user1.group=group1;
			user1.save();
			
			
			rbac_users user2 = new rbac_users("svip","SVIP会员","xinmowen1@qq.com","123","","","有效");
			rbac_usergroup group2 = rbac_usergroup.findById(4);
			user2.group=group2;
			user2.save();
			
			rbac_users user3 = new rbac_users("vip","VIP会员","xinmowen1@qq.com","123","","","有效");
			rbac_usergroup group3 = rbac_usergroup.findById(5);
			user3.group=group3;
			user3.save();
			
			rbac_users user4 = new rbac_users("huiyuan","普通会员","xinmowen1@qq.com","123","","","有效");
			rbac_usergroup group4 = rbac_usergroup.findById(6);
			user4.group=group4;
			user4.save();
			
		}
		//初始化分类
		if (mag_classify.count() == 0) {
			new mag_classify("新闻资讯",0,"xwzx","新闻资讯").save();
//			new mag_classify("名家名作",0,"mjmz","名家名作").save();
			
			new mag_classify("通知公告",1,"tzgg","通知公告").save();
			new mag_classify("业界动态",1,"yjdt","业界动态").save();
			new mag_classify("新闻专题",1,"xwzt","新闻专题").save();
			
//			new mag_classify("作者名录",2,"zzml","作者名录").save();
//			new mag_classify("作品展示",2,"zpzs","作品展示").save();
//			new mag_classify("在线展览",2,"zxzl","在线展览").save();
		}
		//初始化作品分类
		if (mag_worksclass.count() == 0) {
			new mag_worksclass("平面类",0,"pingmian","书法","").save();
			new mag_worksclass("立体类",0,"liti","油画","").save();
			
			new mag_worksclass("书法",1,"shufa","书法","/public/upload/worksclass/shufa.jpg").save();
			new mag_worksclass("国画",1,"guohua","国画","/public/upload/worksclass/guohua.jpg").save();
			new mag_worksclass("油画",1,"youhua","油画","/public/upload/worksclass/youhua.jpg").save();
			new mag_worksclass("版画",1,"banhua","版画","/public/upload/worksclass/banhua.jpg").save();
			new mag_worksclass("素描/速写",1,"suxie","素描/速写","/public/upload/worksclass/suxie.jpg").save();
			new mag_worksclass("摄影",1,"sheying","摄影","/public/upload/worksclass/sheying.jpg").save();
			new mag_worksclass("水彩/水粉/色粉",1,"shuishuise","水彩/水粉/色粉","/public/upload/worksclass/shuishuise.jpg").save();
			new mag_worksclass("漫画",1,"manhua","漫画","/public/upload/worksclass/manhua.jpg").save();
			new mag_worksclass("连环画",1,"lianhuanhua","连环画","/public/upload/worksclass/lianhuanhua.jpg").save();
			new mag_worksclass("漆画",1,"qihua","漆画","/public/upload/worksclass/qihua.jpg").save();
			new mag_worksclass("新年画",1,"xinnianhua","新年画","/public/upload/worksclass/xinnianhua.jpg").save();
			new mag_worksclass("插图",1,"chatu","插图","/public/upload/worksclass/chahua.jpg").save();
			new mag_worksclass("传统年画",1,"chuantong","传统年画","/public/upload/worksclass/chuantong.jpg").save();
			
			new mag_worksclass("雕塑",2,"diaosu","雕塑","/public/upload/worksclass/diaosu.jpg").save();
			new mag_worksclass("现代装置",2,"xzzz","现代装置","/public/upload/worksclass/xzzz.jpg").save();
			new mag_worksclass("综合艺术",2,"zhys","综合艺术","/public/upload/worksclass/zhys.jpg").save();
			new mag_worksclass("风筝",2,"fengzheng","风筝","/public/upload/worksclass/fengzheng.jpg").save();
			new mag_worksclass("陶瓷",2,"taoci","陶瓷","/public/upload/worksclass/taoci.jpg").save();
			new mag_worksclass("刺绣/印染/织物",2,"ciyinzhi","刺绣/印染/织物","/public/upload/worksclass/ciyinzhi.jpg").save();
			new mag_worksclass("玩具",2,"wanju","玩具","/public/upload/worksclass/wanju.jpg").save();
			new mag_worksclass("剪纸",2,"jianzhi","剪纸","/public/upload/worksclass/jianzhi.jpg").save();
			new mag_worksclass("皮影",2,"piying","皮影","/public/upload/worksclass/piying.jpg").save();
			new mag_worksclass("面具",2,"mianju","面具","/public/upload/worksclass/mianju.jpg").save();
			new mag_worksclass("木偶",2,"muou","木偶","/public/upload/worksclass/muou.jpg").save();
		}
		
		
		//初始化菜单
		if(sys_navlist.count() == 0){
			new sys_navlist(1,"运行概要",0,"home","icon-home").save(); 
			new sys_navlist(2,"文章管理",0,"article","icon-align-justify").save();
			new sys_navlist(3,"作品管理",0,"article","icon-align-justify").save();
			new sys_navlist(4,"分类管理",0,"programa","icon-tags").save();
			new sys_navlist(5,"页面管理",0,"page","icon-paste").save();
			new sys_navlist(6,"作家管理",0,"","").save();
			new sys_navlist(7,"媒体管理",0,"","icon-film").save();
			new sys_navlist(8,"广告管理",0,"","icon-bullhorn").save();
			new sys_navlist(9,"权限管理",0,"","icon-group").save();
			new sys_navlist(10,"系统管理",0,"","icon-cog").save();
			
			new sys_navlist(21,"所有文章",2,"","icon-cog").save();
			new sys_navlist(22,"文章上传",2,"","icon-cog").save();
			
			new sys_navlist(31,"所有作品",2,"","icon-cog").save();
			new sys_navlist(32,"作品上传",2,"","icon-cog").save();
			
			new sys_navlist(41,"所有页面",4,"","icon-cog").save();
			new sys_navlist(42,"添加页面",4,"","icon-cog").save();
			
			new sys_navlist(61,"Banner管理",6,"","icon-cog").save();
			new sys_navlist(62,"合作媒体管理",6,"","icon-cog").save();
			
			new sys_navlist(81,"用户管理",8,"","icon-cog").save();
			new sys_navlist(82,"用户组管理",8,"","icon-cog").save();
			new sys_navlist(83,"角色管理",8,"","icon-cog").save();
			
			new sys_navlist(91,"网站常规设置",9,"","icon-cog").save();
			new sys_navlist(92,"菜单管理",9,"","icon-cog").save();
			new sys_navlist(93,"友情链接管理",9,"","icon-cog").save();
			new sys_navlist(94,"统计分析",9,"","icon-cog").save();
			new sys_navlist(95,"系统日志",9,"","icon-cog").save();
		}
		

	}

}
