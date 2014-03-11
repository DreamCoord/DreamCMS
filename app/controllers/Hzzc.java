package controllers;

import models.mag_page;
import play.mvc.Controller;

public class Hzzc extends Controller{
	public static void index(){
		mag_page page = new mag_page();
		String hzfs = page.getPage("合作方式");
		String lxwm = page.getPage("联系我们");
		String jzwm = page.getPage("捐赠我们");
		
		render("Application/Hzzc/hzzc.html",hzfs);
	}
	public static void lxwm(){
		render("Application/Hzzc/lxwm.html");
	}
	public static void hzfs(){
		render("Application/Hzzc/hzfs.html");
	}
	public static void jzwm(){
		render("Application/Hzzc/jzwm.html");
	}
}


