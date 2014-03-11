package controllers;

import java.util.List;
import java.util.Map;

import models.mag_article;
import models.mag_mediapar;
import play.mvc.Controller;

public class New extends Controller{
	public static void index(){
		mag_article art = new mag_article();
//		Map<String,Object> data = art.getNewsPage(id);
		
		List<Map> newstop = art.getNewsList(10,"xwzt");
		List<Map> yjdttop = art.getNewsList(10,"yjdt");
		List<Map> tzggtop = art.getNewsList(2,"tzggtop");
		mag_mediapar mediapar = new mag_mediapar();
		List<Map> mediaparlist = mediapar.allMediaPat();
		
		render("Application/New/new.html",newstop,yjdttop,tzggtop,mediaparlist);
	}
	public static void tzgg(){	
		mag_article art = new mag_article();
		List<Map> data = art.getNewsList(24,"tzgg");
		render("Application/New/tzgg.html",data);
	}
	public static void yjdt(){
		mag_article art = new mag_article();
		List<Map> data = art.getNewsList(24,"yjdt");
		render("Application/New/yjdt.html",data);
	}
	public static void xwzt(){
		mag_article art = new mag_article();
		List<Map> data = art.getNewsList(24,"xwzt");
		render("Application/New/xwzt.html",data);
	}
	
	public static void hzmt(){
		render("Application/New/hzmt.html");
	}
	
	public static void pages(int id){
		mag_article art = new mag_article();
		Map<String,Object> data = art.getNewsPage(id);
		
		List<Map> newstop10 = art.getNewsList(10,"xwzt");
		List<Map> yjdttop10 = art.getNewsList(10,"yjdt");
		List<Map> xgxwtop4 = art.getNewsList(4,"xwzt");
		render("Application/New/pages.html",data,newstop10,yjdttop10,xgxwtop4);
	}
	
}
