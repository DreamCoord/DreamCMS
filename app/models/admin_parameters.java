package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import play.db.jpa.GenericModel;
//网站参数设置
@Entity
//@Table(name="admin_parameters" ,catalog="easycmsdb")
public class admin_parameters extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;			//(用户标识)
	public String title;	//(标题)
	public String subhead;		//(副标题)
	public String keywords;		//（关键字)
	public admin_parameters(String title, String subhead, String keywords) {
		this.title = title;
		this.subhead = subhead;
		this.keywords = keywords;
	}
	
	public admin_parameters(){
		
	}

	

	
	
		
}
