package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.alibaba.fastjson.JSON;

import play.db.jpa.GenericModel;

@Entity
public class sys_navlist extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public int tid;
	public String title;
	public int pid;
	public String tags;//标签id
	public String icons;
	public sys_navlist(int tid,String title, int pid, String tags,String icons) {
		this.tid = tid;
		this.title = title;
		this.pid = pid;
		this.tags = tags;
		this.icons = icons;
	}
	public sys_navlist(){
		
	}
	public static String getAllMenus(){
		List<sys_navlist> navlist = sys_navlist.find("order by pid asc").fetch();
		String pStr=JSON.toJSONString(navlist);
		String jsonStr = "{\"date\":"+pStr+"}";
		return jsonStr;
	}
	
	
	
}
