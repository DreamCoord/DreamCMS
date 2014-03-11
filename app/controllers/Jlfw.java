package controllers;

import models.mag_page;
import play.mvc.Controller;

public class Jlfw extends Controller{
	public static void index(){
		mag_page page = new mag_page();
		String hdyg = page.getPage("活动预告");
		String zxwj = page.getPage("最新问卷");
		render("Application/Jlfw/jlfw.html",hdyg,zxwj);
	}
	public static void zzjj(){
		render("Application/Jlfw/zzjj.html");
	}
	public static void yjfk(){
		render("Application/Jlfw/yjfk.html");
	}
	public static void wldc(){
		render("Application/Jlfw/wldc.html");
	}

}
