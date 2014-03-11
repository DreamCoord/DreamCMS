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
	public static void getClassify(){
		
	}
	public static void selectClassify(){
		
	}
	//分类管理列表
	public static void allClassify(){
		List<mag_classify> pList = mag_classify.find("select id,name from mag_classify order by id desc").fetch();
		String pStr=JSON.toJSONString(pList);
		
		String classhql = "select new backmodels.mag_allclasslist(c.id,c.name,c.alias,c.miaoshu) from mag_classify c";
		Query classquery = JPA.em().createQuery(classhql);		
		List<mag_allclasslist> classList =classquery.getResultList();
		//bug
		String class2hql = "select new backmodels.mag_allclasslist2(c.id,count(a.id)) from mag_classify c left join c.classify ca left join ca.art a where c.id=ca.classify.id and ca.art.id = a.id";
		Query class2query = JPA.em().createQuery(class2hql);		
		List<mag_allclasslist2> class2List =class2query.getResultList();
		
		for(int i=0;i<classList.size();i++){
			for(int m =0;m<class2List.size();m++){
				if(classList.get(i).getId()==class2List.get(m).getId()){
					classList.get(i).setSumart(class2List.get(m).getSumart());
				}
			}
		}
//		
		
		String allStr = JSON.toJSONString(classList);
		String jsonStr = "{\"pArr\":"+pStr+",\"classList\":"+allStr+"}";
		System.out.println(jsonStr);
		renderJSON(jsonStr);
		
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
	public static void addClassify(String classname,int parName,String aliasname,String miaoshu){
		new mag_classify(classname, parName, aliasname, miaoshu).save();
		renderJSON("{\"state\":\"ok\"}");
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
