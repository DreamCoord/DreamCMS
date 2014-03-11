package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Query;

import backmodels.mag_allclasslist;
import play.db.jpa.GenericModel;
import play.db.jpa.JPA;
//文章模型
@Entity
public class mag_article extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;			//(文章ID)
	public String title;	//文章名称
	public String content; //文章内容
	public String time;	//发布时间
	public String state;	//文章状态
	public String top; 	//文章置顶
	public String author;	//作者
	public String tags;	//标签
	@OneToMany(mappedBy="art")
	public List<mag_classify_art> art;
	//新闻查询
	public static List<Map> getNewsList(int num,String classify){
		String classhql = "select new models.mag_article(art.id,art.title,art.time,art.author) from mag_article art left join art.art mca left join mca.classify cf where cf.alias ='"+classify+"'";
		Query classquery = JPA.em().createQuery(classhql);	
		classquery.setMaxResults(num);
		List<mag_article> artList =classquery.getResultList();		
		List<Map> newslist = new ArrayList<Map>();
		for(int i=0;i<artList.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", artList.get(i).id);
			map.put("title", artList.get(i).title);
			map.put("time", artList.get(i).time);
			map.put("author", artList.get(i).author);
			newslist.add(map);			
		}
		return newslist;
	}
	//获取指定id 的文章详细内容
	public static Map<String,Object> getNewsPage(int id){
		mag_article art = mag_article.findById(id);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("id", art.id);
		map.put("title", art.title);
		map.put("time", art.time);
		map.put("author", art.author);
		map.put("content", art.content);
		return map;
	}
	
	public mag_article(int id,String title,  String time,
			String author) {		
		this.id= id;
		this.title = title;
		this.time = time;
		this.author = author;
	}
	
	public mag_article(String title, String content, String time,
			String state, String top,String author,String tags) {		
		this.title = title;
		this.content = content;
		this.time = time;
		this.state = state;
		this.top = top;
		this.author = author;
		this.tags = tags;
	}
	public mag_article(){
		
	}
}
