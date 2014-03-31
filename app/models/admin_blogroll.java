package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import play.db.jpa.GenericModel;
//有情链接设置
@Entity
//@Table(name="admin_blogroll" ,catalog="easycmsdb")
public class admin_blogroll extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;				//(链接标识)
	public String name;			//(网站名称)
	public String address;		//(网站地址)
	public String remark;		//（备注)
	public String state;		//（有效标志)
	public admin_blogroll(String name, String address, String remark, String state) {
		this.name = name;
		this.address = address;
		this.remark = remark;
		this.state = state;
	}
	
	public admin_blogroll(){
		
	}

	

	
	
		
}
