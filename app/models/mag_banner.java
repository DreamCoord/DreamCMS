package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Query;

import play.db.jpa.GenericModel;
import play.db.jpa.JPA;

import com.alibaba.fastjson.JSON;
//banner管理
@Entity
public class mag_banner extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;
	public String remark;
	public String mappath;
	public String time;
	public String author;
	public String artid;
	public String artClass;
	public mag_banner( String name, String remark, String mappath,
			String time, String author, String artid,String artClass) {
		this.name = name;
		this.remark = remark;
		this.mappath = mappath;
		this.time = time;
		this.author = author;
		this.artid = artid;
		this.artClass = artClass;
	}
	public mag_banner(int id, String name, String remark, String mappath,
			String time, String author, String artid,String artClass) {
		this.id = id;
		this.name = name;
		this.remark = remark;
		this.mappath = mappath;
		this.time = time;
		this.author = author;
		this.artid = artid;
		this.artClass = artClass;
	}
	public mag_banner(){
		
	}
	public static String allBanner(){
		
		String hql = "select new models.mag_banner(b.id,b.name,b.remark,b.mappath,b.time,b.author,art.title,b.artClass)  from mag_banner b, mag_article art where b.artid = art.id";
		Query query = JPA.em().createQuery(hql);		
		List<mag_banner> alllist =query.getResultList();
		String str =  JSON.toJSONString(alllist);
		System.out.println(str);
		return str;
	}
	public static void addBanner(){
		
	}
	public static void getBanner(){
		
	}
	public static void delBanner(){
		
	}
	
	
	public static List<Map> getBannerList(String title){
		List<Map> allList = new ArrayList<Map>();	
		List<mag_banner> alllist = mag_banner.find("from mag_banner where name = '"+title+"'").fetch();
		for(int i=0;i<alllist.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("mappath", alllist.get(i).mappath);
			map.put("artid", alllist.get(i).artid);
			map.put("artClass", alllist.get(i).artClass);
			map.put("remark", alllist.get(i).remark);
			allList.add(map);
		}
		return allList;
	}
	
	

}
