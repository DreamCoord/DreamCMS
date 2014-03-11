package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import play.db.jpa.GenericModel;
//页面模型
@Entity
public class mag_page extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String title;
	public String content;
	public String createtime;
	public String author;
	
	public mag_page(String title, String content, String createtime,
			String author) {

		this.title = title;
		this.content = content;
		this.createtime = createtime;
		this.author = author;
	}
	public mag_page(){
		
	}
	public static String getPage(String title){
		List<mag_page> page =  mag_page.find("from mag_page where title = '"+title+"' order by id desc").fetch();
		String backStr = "";
		if(page.size()>0){
			backStr = page.get(0).content;
		}
		return backStr;
		
	}
}
