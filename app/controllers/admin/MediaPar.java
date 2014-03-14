package controllers.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import models.mag_mediapar;
import play.Play;
import play.libs.Files;
import play.mvc.Controller;

import com.alibaba.fastjson.JSON;

public class MediaPar extends Controller{
	public static void addMediaPar(String title,String websiteURL,File image,String remark ){
		if(request.method == "GET"){
			render();
		}else{
			//文件保存目录路径
			String savePath =  Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
			//文件保存目录URL
			String saveUrl  =  Play.configuration.getProperty("newsImg.savePath", "/public/upload/");			
			if (image != null) {
				//检查目录
				File uploadDir = new File(savePath);
				if(!uploadDir.isDirectory()){
					uploadDir.mkdirs();
				}
				//检查目录写权限
				if(!uploadDir.canWrite()){
					renderJSON("{\"state\":\"上传目录没有写权限。\"}");
					return;
				}
				String ymd = "MediaPar";
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
	
					mag_mediapar banner = new mag_mediapar( title,  saveUrl + newFileName,websiteURL,remark, timeStr,"");
					banner.save();
					
					
					flash("msg", "<div class='alert alert-success'>保存成功</div>");
				} catch (Exception e) {
					e.printStackTrace();
					renderJSON("{\"state\":\"上传失败\"}");
				}
			}else{
				renderJSON("{\"state\":\"请选择文件。\"}");
			}
			
			allMediaPar();
		}
	}
	public static void allMediaPar(){
		List<mag_mediapar> medias = mag_mediapar.find("order by id desc").fetch();
		
		String msg = flash.get("msg");
		render(medias, msg);
	}
	public static void edit(int id){
		mag_mediapar media = mag_mediapar.findById(id);
		if(request.method == "GET"){
			render(media);
		}else{
			media.title = params.get("title");
			media.remark = params.get("remark");
			media.save();
			
			flash("msg", "<div class='alert alert-success'>修改成功</div>");
			allMediaPar();
		}
	}
	public static void delete(int id){
		mag_mediapar media = mag_mediapar.findById(id);
		media.delete();
		
		flash("msg", "<div class='alert alert-success'>删除成功</div>");
		allMediaPar();
	}
}
