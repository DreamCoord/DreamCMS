package controllers.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import models.mag_article;
import models.mag_banner;
import models.mag_works;
import models.mag_worksclass;
import play.Play;
import play.libs.Files;
import play.mvc.Controller;

import com.alibaba.fastjson.JSON;

public class Banner extends Controller{
	public static void allBanner(){
		mag_banner banner = new mag_banner(); 
		renderJSON("{\"data\":"+banner.allBanner()+"}");
	}
	public static void addBanner(String title,String remark,File image,String artclass ,String ardid){
		System.out.println(title);
		System.out.println(remark);
		System.out.println(image);
		System.out.println(artclass);
		System.out.println(ardid);
		
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
			String ymd = "banner";
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
				
				
				
				

				if(artclass == "作品"){
					mag_banner banner = new mag_banner( title,  remark, saveUrl + newFileName, timeStr,"", ardid, "作品");
					banner.save();
				}else{
					mag_banner banner = new mag_banner( title,  remark, saveUrl + newFileName, timeStr,"", ardid, "文章");
					banner.save();
				}
				
				renderJSON("{\"state\":\"操作成功\"}");
			} catch (Exception e) {
				e.printStackTrace();
				renderJSON("{\"state\":\"上传失败\"}");
			}
		}else{
			renderJSON("{\"state\":\"请选择文件。\"}");
		}
		
		
		
		renderJSON("{\"status\":\"操作成功\"}");
		
		
	}
	public static void getBanner(){
		
	}
	public static void delBanner(){
		
	}
	public static void allBannerList(){
		List<mag_article> artlist = mag_article.find("order by id desc").fetch(); 
		List<mag_works> worklist = mag_works.find("order by id desc").fetch();
		String artStr = JSON.toJSONString(artlist);
		String worksStr = JSON.toJSONString(worklist);
		renderJSON("{\"artlist\":"+artStr+",\"worklist\":"+worksStr+"}");
	}
}
