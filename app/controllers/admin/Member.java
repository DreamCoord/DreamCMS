package controllers.admin;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import models.mag_mediapar;
import models.rbac_usergroup;
import models.rbac_users;
import models.sys_member;
import play.Play;
import play.libs.Files;
import play.mvc.Controller;

import com.alibaba.fastjson.JSON;

public class Member extends Controller{
	public static void allMember(){
		List<sys_member> allmember = sys_member.find("order by id desc").fetch();
		String allStr = JSON.toJSONString(allmember);
		renderJSON("{\"data\":"+allStr+"}");
	}
	public static void addMember(String username,String name,String email,File image,String dengji,String password,String remark){
		//文件保存目录路径
		String savePath =  Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		//文件保存目录URL
		String saveUrl  =  Play.configuration.getProperty("newsImg.savePath", "/public/upload/");			
		if (image != null) {
			//检查目录
			File uploadDir = new File(savePath);
			if(!uploadDir.isDirectory()){
				renderJSON("{\"state\":\"上传目录不存在。\"}");
				return;
			}
			//检查目录写权限
			if(!uploadDir.canWrite()){
				renderJSON("{\"state\":\"上传目录没有写权限。\"}");
				return;
			}
			String ymd = "ICON";
			savePath += ymd + "/";
			saveUrl += ymd + "/";
			File dirFile = new File(savePath);
			if (!dirFile.exists()) {
				dirFile.mkdirs();
			}			
			//检查扩展名
			String fileExt = image.getName().substring(image.getName().lastIndexOf(".") + 1).toLowerCase();
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
			File f = new File(savePath,newFileName);
			try {
				Files.copy(image,f);  
				System.out.println(saveUrl + newFileName);
				java.text.DateFormat format1 = new java.text.SimpleDateFormat(  
		                "yyyy-MM-dd hh:mm");  
				String timeStr = format1.format(new Date()).toString();	
				System.out.print("------------->"+dengji);
				rbac_users users = new rbac_users(username, name, email, password, timeStr, "", "有效");
				rbac_usergroup group = new rbac_usergroup();
				group.id = Integer.parseInt(dengji);
				users.group = group;
				users.save();	
				
				new sys_member(username, name, "false", dengji, saveUrl + newFileName,  remark).save();
				
				
				renderJSON("{\"state\":\"操作成功\"}");
			} catch (Exception e) {
				e.printStackTrace();
				renderJSON("{\"state\":\"上传失败\"}");
			}
		}else{
			renderJSON("{\"state\":\"请选择文件。\"}");
		}
		
		
		
		renderJSON("{\"status\":\"操作成功\"}");
		
		
		
		
		
		
		renderJSON("{\"state\":\"OK\"}");
	}
	
	public static void allHytj(){
		List<sys_member> allmember = sys_member.find("from sys_member where isTJ = 'true' order by id desc ").fetch();
		String allStr = JSON.toJSONString(allmember);
		System.out.println("--->"+allStr);
		renderJSON("{\"data\":"+allStr+"}");
	}
	public static void addHytj(int zjid){
		sys_member member = sys_member.findById(zjid);
		member.isTJ = "true";
		member.save();
		renderJSON("{\"state\":\"OK\"}");
	}
	
	
	public static void allDengji(){
		List<rbac_usergroup> gourp = rbac_usergroup.find("select id, groupname from rbac_usergroup where pid = 3 order by id desc").fetch();
		String allStr = JSON.toJSONString(gourp);
		System.out.println("----->"+allStr);
		renderJSON("{\"data\":"+allStr+"}");
	}
}
