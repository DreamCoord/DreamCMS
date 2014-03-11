package controllers.admin;

import java.util.List;

import models.rbac_role;
import models.rbac_users;
import models.sys_flinks;
import play.Play;
import play.mvc.Controller;

import com.alibaba.fastjson.JSON;

public class SysConfig extends Controller{
	//网站配置管理
	public static void saveWebSiteCfg(String wstitle,String wssubtitle,String keyworks){
//		new sys_config()
		Play.configuration.put("website", wstitle);
		Play.configuration.put("websitesubtitle", wssubtitle);
		Play.configuration.put("websitekeyworks", keyworks);
		renderJSON("");
	}
	public static void getSyscfg(){
		String wstitle = Play.configuration.getProperty("website");
		String wssubtitle = Play.configuration.getProperty("websitesubtitle");
		String keyworks = Play.configuration.getProperty("websitekeyworks");
		String jsonStr = "{\"wstitle\":\""+wstitle+"\",\"wssubtitle\":\""+wssubtitle+"\",\"keyworks\":\""+keyworks+"\"}";
		System.out.println(jsonStr);
		renderJSON(jsonStr);
	}
	
	//友情链接管理
	public static void addWebSiteFLinks(String websitename,String websiteURL,String websiteMS){ 
		new sys_flinks(websitename,websiteURL,websiteMS).save();
		renderJSON("");
	}
	public static void allWebSiteFLinks(){
		List<sys_flinks> list = sys_flinks.find("order by id desc").fetch();
		String jsonStr = JSON.toJSONString(list);
		renderJSON("{\"data\":"+jsonStr+"}");
		
	}
	public static void delWebSiteFLinks(int id){
		sys_flinks flinks = sys_flinks.findById(id);
		flinks.delete();
		renderJSON("{\"state\":\"ok\"}");
	}
	public static void getWebSiteFLinks(){
		
	}
	public static void updateWebSiteFLinks(int id,String wsname,String wsurl,String wsms){
		sys_flinks links = sys_flinks.findById(id);
		links.wsname=wsname;
		links.wsurl=wsurl;
		links.remark=wsms;
		links.save();
		renderJSON("{\"state\":\"ok\"}");
	}
	
}
