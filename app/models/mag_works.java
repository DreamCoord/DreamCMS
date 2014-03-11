package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Query;

import play.db.jpa.GenericModel;
import play.db.jpa.JPA;
//作品管理
@Entity
public class mag_works extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String title;
	public String author; //作者
	public String createtime;//创作时间
	public String size;		//规格
	public String texture;	//材质
	public String remark;	//描述
	public String mappath;	//作品路径
	public String time;		//上传时间
	public String state;	//状态
//	@OneToMany(mappedBy="worksId")
	@ManyToOne
	public  mag_worksclass workclass;//(分类ID）
	public mag_works(String title, String author, String createtime,
			String size, String texture, String remark, String mappath,String time,String state) {
		this.title = title;
		this.author = author;
		this.createtime = createtime;
		this.size = size;
		this.texture = texture;
		this.remark = remark;
		this.mappath = mappath;
		this.time = time;
		this.state = state;
	}
	
	public mag_works(int id, String title, String author, String createtime,
			String size, String texture, String remark, String mappath,
			String time, String state) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.createtime = createtime;
		this.size = size;
		this.texture = texture;
		this.remark = remark;
		this.mappath = mappath;
		this.time = time;
		this.state = state;
	}

	public mag_works(){
		
	}
	//选择指定作品
	public static List<Map> getWorksList(int num,String classify){
		List<mag_works> workList;
		if(classify == "all"){
			workList =mag_works.find("order by id desc").fetch(num);	
		}else{
			String classhql = "select new models.mag_works(w.id,w.title,w.author,w.createtime,w.size,w.texture,w.remark,w.mappath,w.time,w.state) from mag_works w left join w.workclass wws where w.workclass.id = wws.id and wws.alias ='"+classify+"' order by w.id desc";	
			Query classquery = JPA.em().createQuery(classhql);	
			classquery.setMaxResults(num);
			workList =classquery.getResultList();	
		}		
		List<Map> newslist = new ArrayList<Map>();
		for(int i=0;i<workList.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", workList.get(i).id);
			map.put("title", workList.get(i).title);
			map.put("time", workList.get(i).time);
			map.put("author", workList.get(i).author);
			map.put("mappath", workList.get(i).mappath);
			newslist.add(map);			
		}
		return newslist;
	}
	public static Map<String,Object> getNewsPage(int id){
		mag_works work = mag_works.findById(id);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("id", work.id);
		map.put("title", work.title);
		map.put("createtime", work.createtime);
		map.put("author", work.author);
		map.put("texture", work.texture);
		map.put("size", work.size);
		map.put("remark", work.remark);
		map.put("mappath", work.mappath);
		return map;
	
	}
}
