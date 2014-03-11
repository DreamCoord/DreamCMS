package controllers;

import play.mvc.Controller;

public class Other extends Controller{
	public static void websitemap(){
		render("Application/Other/websitemap.html");
	}
	public static void yqlj(){
		render("Application/Other/yqlj.html");
	}
	public static void jszc(){
		render("Application/Other/jszc.html");
	}
	public static void hyfw(){
		render("Application/Other/hyfw.html");
	}

}
