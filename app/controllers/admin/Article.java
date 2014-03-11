package controllers.admin;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;

import models.mag_article;
import models.mag_classify;
import models.mag_classify_art;
import play.mvc.Controller;
import backmodels.mag_allarticlelist;

import com.alibaba.fastjson.JSON;

//文章管理
public class Article extends Controller{
//	获取所有文章
	public static void allArticle(){
		List<mag_allarticlelist> articles =  mag_article.find("select new backmodels.mag_allarticlelist(id,title,author,tags,time,content) from mag_article order by id desc").fetch();
//		String allStr = JSON.toJSONString(artlist);
//		System.out.println(allStr);
//		renderJSON("{\"data\":"+allStr+"}");
		render(articles);
	}
//	查询文章
	public static void selectArticle(){
		
	}
//	添加文章
	public static void addArticle(String author,String titleStr,String contentStr,String time,String state,String top,List<String> classify,String tags){
		String timeStr = "";
		if(time.equals("立即")){
			java.text.DateFormat format1 = new java.text.SimpleDateFormat(  
	                "yyyy-MM-dd hh:mm");  
			timeStr = format1.format(new Date()).toString();
		}else{
			timeStr = time;
		}
		 
		mag_article art = new mag_article(titleStr, contentStr, timeStr, state,top,author,tags).save();
		int id = art.id;
		mag_article artID = new mag_article();
		artID.id = id;
		for(int i = 0;i<classify.size();i++){
			mag_classify classID = new mag_classify();
			classID.id = Integer.parseInt(classify.get(i));
			new mag_classify_art(artID,classID).save();
		}
		String jsonStr = "{\"status\":ok}";
		renderJSON(jsonStr);
	}

	public static void delete(int id){
		
	}

	public static void edit(int id){
		
	}
	
}
