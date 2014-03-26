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
		
		try{
			List<Version> versions = new ArrayList<Version>();
			versions = Version.getAvailableVersions();
			System.out.println(versions.get(0).major);
		}catch(Exception e){
			e.printStackTrace();
		}
		try{
			Version.updateToLatestVersion();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		System.out.println(session.get("username")+"-------------");
		if(!session.isEmpty()){
			String username = session.get("username");
			render("admin/index.html",username);	
		}else{
			render("admin/login.html");
		}
		
	}

}
