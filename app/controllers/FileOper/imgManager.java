package controllers.FileOper;


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Random;

import play.Play;
import play.libs.Files;
import play.mvc.Controller;

import com.alibaba.fastjson.JSONObject;



public class imgManager extends Controller{
	public static void uploadjson(File imgFile) {
		//文件保存目录路径
		String savePath =  Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		//文件保存目录URL
		String saveUrl  =  Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		//System.out.println("Play.configuration.getProperty(newsImg.fileTypes):"+Play.configuration.getProperty("newsImg.fileTypes", "false"));
		//定义允许上传的文件扩展名
		String[] fileTypes = new String[]{"gif","jpg","jpeg","png","bmp"};
		
		//最大文件大小
		long maxSize = 1000000;
		if (imgFile != null) {
		//检查目录
		File uploadDir = new File(savePath);
		if(!uploadDir.isDirectory()){
		renderJSON(getError("上传目录不存在。"));
		return;
		}

		//检查目录写权限
		if(!uploadDir.canWrite()){
		renderJSON(getError("上传目录没有写权限。"));
		return;
		}
		//创建文件夹
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String ymd = sdf.format(new Date());
		savePath += ymd + "/";
		saveUrl += ymd + "/";
		File dirFile = new File(savePath);
		if (!dirFile.exists()) {
		dirFile.mkdirs();
		}
		//检查文件大小
		if(imgFile.length() > maxSize){
		renderJSON(getError("上传文件大小超过限制。"));
		return;
		}
		//检查扩展名
		String fileExt = imgFile.getName().substring(imgFile.getName().lastIndexOf(".") + 1).toLowerCase();
		//System.out.println("fileExt:"+fileExt);
		if(!Arrays.<String>asList(fileTypes).contains(fileExt)){
		renderJSON(getError("上传文件扩展名是不允许的扩展名。"));
		return;
		}
		//String ext = imgFile.getName().substring(
		//imgFile.getName().lastIndexOf("."));
		//String fileName = RandomStringUtils.random(8, true, true) + ext;
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
		String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
		File f = new File(savePath,newFileName);
		//System.out.println("f.getPath()----:" + f.getPath());
		try {
		Files.copy(imgFile,f);  
		JSONObject obj = new JSONObject();
		obj.put("error", 0);
		obj.put("url", saveUrl + newFileName);
		System.out.println(saveUrl + newFileName);
		renderText(obj.toJSONString().toString());
		return;
		} catch (Exception e) {
		e.printStackTrace();
		renderJSON(getError("上传失败"));
		return;
		}
		}else{
		renderJSON(getError("请选择文件。"));
		return;
		} 

	}
	
	
	
	public static void uploadICON(File imgFile){
		
	}
	public static void uploadWorkd(File imgFile){
		//文件保存目录路径
		String savePath =  Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		//文件保存目录URL
		String saveUrl  =  Play.configuration.getProperty("newsImg.savePath", "/public/upload/");			
		if (imgFile != null) {
			//检查目录
			File uploadDir = new File(savePath);
			if(!uploadDir.isDirectory()){
				renderJSON(getError("上传目录不存在。"));
				return;
			}
			//检查目录写权限
			if(!uploadDir.canWrite()){
				renderJSON(getError("上传目录没有写权限。"));
				return;
			}
			String ymd = "works";
			savePath += ymd + "/";
			saveUrl += ymd + "/";
			File dirFile = new File(savePath);
			if (!dirFile.exists()) {
				dirFile.mkdirs();
			}			
			//检查扩展名
			String fileExt = imgFile.getName().substring(imgFile.getName().lastIndexOf(".") + 1).toLowerCase();
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
			File f = new File(savePath,newFileName);
			try {
				Files.copy(imgFile,f);  
				JSONObject obj = new JSONObject();
				obj.put("error", 0);
				obj.put("url", saveUrl + newFileName);
				System.out.println(saveUrl + newFileName);
				renderJSON(obj.toJSONString());
				return;
			} catch (Exception e) {
				e.printStackTrace();
				renderJSON(getError("上传失败"));
				return;
			}
		}else{
			renderJSON(getError("请选择文件。"));
			return;
		} 
	}
	
	public static  String getError(String message) {
		JSONObject obj = new JSONObject();
		obj.put("error", 1);
		obj.put("message", message);
		return obj.toJSONString();
	}
}
