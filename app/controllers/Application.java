package controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import models.mag_article;
import models.sys_member;
import play.mvc.Controller;

public class Application extends Controller {
	
    public static void index() {  
    	mag_article art = new mag_article();
    	List<Map> news = art.getNewsList(12,"xwzt");
    	List<Map> news1 = new ArrayList<Map>();
    	List<Map> news2 = new ArrayList<Map>();
    	
    	
    	for(int i = 0;i<news.size();i++){
    		if(i<6){
    			news1.add(news.get(i));	
    		}else{
    			news2.add(news.get(i));
    		}    		
    	}
    	sys_member m = new sys_member();
		List<Map> allMember = m.allMember();
    	
    	
    	render(news1,news2,allMember);
    }
}