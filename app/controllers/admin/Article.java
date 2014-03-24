package controllers.admin;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
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
		List<mag_article> articles = mag_article.find("order by time desc").fetch();
		String msg = flash.get("msg");
//		String allStr = JSON.toJSONString(artlist);
//		System.out.println(allStr);
//		renderJSON("{\"data\":"+allStr+"}");
		render(articles, msg);
	}
//	查询文章
	public static void selectArticle(){
		
	}
//	添加文章
	public static void addArticle(String title,String content,String state,String top,String tags){
		List<mag_classify> categories = mag_classify.findAll();
		if(request.method == "GET"){
			render(categories);
		}else{
			String author = session.get("username");
			String time = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
			
			mag_article article = new mag_article(title, content, time, state,top,author,tags);
			article.category = mag_classify.findById(Integer.parseInt(params.get("category_id")));
			article.save();

			allArticle();
		}
	}

	public static void delete(int id){
		mag_article article = mag_article.findById(id);
		article.delete();
		
		flash("msg", "删除成功");
		redirect("/admin/article");
	}

	public static void edit(int id){
		mag_article article = mag_article.findById(id);
		if(request.method == "GET"){
			render(article);
		}else{
			String title = params.get("title");
			String content = params.get("content");
			
			article.title = title;
			article.content = content;
			article.save();
			
			flash("msg", "<div class='alert alert-success'>保存成功</div>");
			redirect("/admin/article");
		}
	}
	
}
