package controllers.admin;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import models.mag_classify;
import models.rbac_role;
import models.rbac_role_group;
import models.rbac_usergroup;
import play.db.jpa.JPA;
import play.mvc.Controller;
import backmodels.mag_allclasslist;
import backmodels.mag_allclasslist2;
import backmodels.mag_classlist;

import com.alibaba.fastjson.JSON;
//分类管理
public class Classify extends Controller{
	//分类管理列表
	public static void allClassify(){
		List<mag_classify> categories = mag_classify.findAll();
		
		String msg = flash.get("msg");
		render(categories, msg);
	}
	
	public static void edit(int id){
		mag_classify category = mag_classify.findById(id);
		if(request.method == "GET"){
			render(category);
		}else{
			category.name = params.get("name");
			category.alias = params.get("alias");
			category.miaoshu = params.get("miaoshu");
			category.save();
			
			flash("msg", "<div class='alert alert-success'>保存成功</div>");
			redirect("/admin/category");
		}
	}
	
	public static void delete(int id){
		mag_classify category = mag_classify.findById(id);
		category.delete();
		
		flash("msg", "<div class='alert alert-success'>删除成功</div>");
		redirect("/admin/category");
	}
	
	//文章内部分类
	public static void allArticleClass(){
		List<mag_classify> pList = mag_classify.find("from mag_classify order by id desc").fetch();
		List<mag_classlist> classList = new ArrayList<mag_classlist>();
		
		
		for(int i =0;i<pList.size();i++){
			mag_classlist listitem = new mag_classlist(pList.get(i).id,pList.get(i).pid,pList.get(i).name,true);
		
			classList.add(listitem);
		}
		
		
		String pStr=JSON.toJSONString(classList);
		String jsonStr = "{\"classList\":"+pStr+"}";
		System.out.println(pStr);
		renderJSON(jsonStr);
	}
	
	//添加分类
	public static void addClassify(String name,int pid,String alias,String description){
		if(request.method=="GET"){
			render();
		}else{
			new mag_classify(name, pid, alias, description).save();

			allClassify();
		}
	}
	public static void delClassify(int id){
		mag_classify classify = mag_classify.findById(id);
		classify.delete();
		renderJSON("{\"state\":\"ok\"}");
	}
	public static void updateClassify(int id,String classname2,int parName2,String aliasname2,String miaoshu2){
		System.out.println(id+"------->>>");
		mag_classify classify = mag_classify.findById(id);
		classify.name = classname2;
		classify.alias = aliasname2;
		classify.miaoshu = miaoshu2;
		classify.pid = parName2;
		classify.save();
		renderJSON("{\"status\":\"ok\"}");
	}
}
