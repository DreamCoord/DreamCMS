package controllers.admin;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;
import controllers.Version;

public class Home extends Controller {

    public static void index() {
        render("Admin/index.html");
    }
    
    public static void update(){
    	try{
    		Version.updateToLatestVersion();
    	}catch(Exception e){
    		e.printStackTrace();
    	}
    	flash("msg", "<div class='alert alert-success'>更新成功</div>");
    	home();
    }

    public static void home(){
    	boolean new_version_available = false;
    	Version current_version = Version.getCurrentVersion();
    	Version latest_version = Version.getLatestVersion();
    	if(latest_version.newerThan(current_version)){
    		new_version_available = true;
    	}
    	
    	String version = Version.getCurrentVersion().toString();
    	String msg = flash.get("msg");
    	//文章数目
    	List<mag_article> wenzhangs = mag_article.find("order by time desc").fetch();
    	int wenzhang= wenzhangs.size();
    	//图片数目
    	List<mag_mediapar> tupians = mag_mediapar.find("order by id desc").fetch();
    	int tupian= tupians.size();
    	//
        render(version, new_version_available, msg);
    }

}