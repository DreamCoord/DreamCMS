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

import play.db.jpa.GenericModel;
import play.db.jpa.JPA;
@Entity
public class mag_worksclass extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;		//名称
	public int pid;			//父级
	public String alias;		//别名
	public String miaoshu;		//描述
	public String icon;			//封面
	@OneToMany(mappedBy = "workclass") 
	public List<mag_works> workclass;
	
	public mag_worksclass(String name, int pid, String alias, String miaoshu,String icon) {
		this.name = name;
		this.pid = pid;
		this.alias = alias;
		this.miaoshu = miaoshu;
		this.icon = icon;
	}
	
	public mag_worksclass() {
	}
	
	public static List<Map> getClassify(int id){
		List<mag_worksclass> all = mag_worksclass.find("from mag_worksclass w where w.pid = '"+id+"' order by w.id asc").fetch();
		List<Map> newslist = new ArrayList<Map>();
		for(int i=0;i<all.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", all.get(i).id);
			map.put("title", all.get(i).name);
			map.put("mappath", all.get(i).icon);
			newslist.add(map);			
		}
		return newslist;
	}
	public static List<Map> getWorksClass(int id){
		String classhql = "select new models.mag_works(w.id,w.title,w.author,w.createtime,w.size,w.texture,w.remark,w.mappath,w.time,w.state) from mag_works w left join w.workclass wws where w.workclass.id = wws.id and wws.id ='"+id+"' order by w.id desc";	
		Query classquery = JPA.em().createQuery(classhql);	
		List<mag_works> workList =classquery.getResultList();	
		List<Map> newslist = new ArrayList<Map>();
		for(int i=0;i<workList.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", workList.get(i).id);
			map.put("title", workList.get(i).title);
			map.put("mappath", workList.get(i).mappath);
			map.put("author", workList.get(i).author);
			map.put("createtime", workList.get(i).createtime);
			map.put("size", workList.get(i).size);
			newslist.add(map);			
		}
		return newslist;
	}
}
