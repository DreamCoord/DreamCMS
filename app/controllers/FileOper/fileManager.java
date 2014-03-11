package controllers.FileOper;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Hashtable;
import java.util.List;

import play.Play;
import play.mvc.Controller;

import com.alibaba.fastjson.JSONObject;

public class fileManager extends Controller{
	public static void index(String path){
		renderJSON("111");
	}
	
	public static void manager(String path){
		//根目录路径，可以指定绝对路径，比如 /var/www/attached/
		String rootPath =Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		System.out.println(rootPath);
		//根目录URL，可以指定绝对路径，比如 http://www.yoursite.com/attached/
		String rootUrl  =Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		System.out.println(rootUrl);
		//图片扩展名
		String[] fileTypes = new String[]{"gif", "jpg", "jpeg", "png", "bmp"};

		
		String currentPath = rootPath + path;
		String currentUrl = rootUrl + path;
		String currentDirPath = path;
		String moveupDirPath = "";
		if (!"".equals(path)) {
			String str = currentDirPath.substring(0, currentDirPath.length() - 1);
			moveupDirPath = str.lastIndexOf("/") >= 0 ? str.substring(0, str.lastIndexOf("/") + 1) : "";
		}
	

		//不允许使用..移动到上一级目录
		if (path.indexOf("..") >= 0) {
			renderJSON("不允许访问");
			return;
		}
		//最后一个字符不是/
		if (!"".equals(path) && !path.endsWith("/")) {
			renderJSON("Parameter is not valid.");
			return;
		}
		//目录不存在或不是目录
		System.out.println(currentPath);
		File currentPathFile = new File(currentPath);
		if(!currentPathFile.isDirectory()){
			renderJSON("目录不存在");
			return;
		}
	
		//遍历目录取的文件信息
		List<Hashtable> fileList = new ArrayList<Hashtable>();
		if(currentPathFile.listFiles() != null) {
			for (File file : currentPathFile.listFiles()) {
				Hashtable<String, Object> hash = new Hashtable<String, Object>();
				String fileName = file.getName();
				if(file.isDirectory()) {
					hash.put("is_dir", true);
					hash.put("has_file", (file.listFiles() != null));
					hash.put("filesize", 0L);
					hash.put("is_photo", false);
					hash.put("filetype", "");
				} else if(file.isFile()){
					String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
					hash.put("is_dir", false);
					hash.put("has_file", false);
					hash.put("filesize", file.length());
					hash.put("is_photo", Arrays.<String>asList(fileTypes).contains(fileExt));
					hash.put("filetype", fileExt);
				}
				hash.put("filename", fileName);
				hash.put("datetime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(file.lastModified()));
				fileList.add(hash);
			}
		}
	
		JSONObject result = new JSONObject();
		result.put("moveup_dir_path", moveupDirPath);
		result.put("current_dir_path", currentDirPath);
		result.put("current_url", currentUrl);
		result.put("total_count", fileList.size());
		result.put("file_list", fileList);
	
		renderJSON(result.toJSONString());
	}
	
}
