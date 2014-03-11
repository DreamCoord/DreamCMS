package controllers.admin;

import play.mvc.Before;
import play.mvc.Controller;

public class index  extends Controller{
//	@Before
//	public static void before(){
//		System.out.println("session"+session.get("username"));
//		
//	}
	public static void index(){
		System.out.println(session.get("username")+"-------------");
		if(!session.isEmpty()){
			String username = session.get("username");
			render("admin/index.html",username);	
		}else{
			render("admin/login.html");
		}
		
	}
}
