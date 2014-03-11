package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import play.db.jpa.GenericModel;
@Entity
public class mag_mediapar extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String title;
	public String mappath;
	public String url;
	public String remark;
	public String time;
	public String author;
	public mag_mediapar(String title, String mappath, String url,
			String remark, String time, String author) {
		this.title = title;
		this.mappath = mappath;
		this.url = url;
		this.remark = remark;
		this.time = time;
		this.author = author;
	}
	public mag_mediapar(){
		
	}
	
	public static List<Map> allMediaPat(){
		List<Map> allMap = new ArrayList<Map>();
		List<mag_mediapar> mediaList = mag_mediapar.find("order by id desc").fetch();
 		for(int i = 0; i<mediaList.size();i++){
 			Map<String,Object> map = new HashMap<String,Object>();
 			map.put("title",mediaList.get(i).title);
 			map.put("mappath",mediaList.get(i).mappath);
 			map.put("url",mediaList.get(i).url);
 			map.put("remark",mediaList.get(i).remark);
 			
 			allMap.add(map);
 		}
		
		
		return allMap;
	}
	
}
