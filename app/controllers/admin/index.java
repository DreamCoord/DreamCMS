package controllers.admin;

import java.util.*;

import controllers.Version;
import play.Play;
import play.mvc.Before;
import play.mvc.Controller;

public class index  extends Controller{
//	@Before
//	public static void before(){
//		System.out.println("session"+session.get("username"));
//		
//	}
	public static void index(){
		List<Object> keys = Collections.list(Play.configuration.keys());
		
		List<Version> versions = new ArrayList<Version>();
		try{
			versions = Version.getAvailableVersions();
		}catch(Exception e){
			e.printStackTrace();
		}
		try{
			Version.updateToLatestVersion();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		System.out.println(versions.get(0).major);
		System.out.println(session.get("username")+"-------------");
		if(!session.isEmpty()){
			String username = session.get("username");
			render("admin/index.html",username);	
		}else{
			render("admin/login.html");
		}
		
	}
}
