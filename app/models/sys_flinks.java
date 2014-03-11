package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import play.db.jpa.GenericModel;

//友情链接管理表
@Entity
public class sys_flinks  extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String wsname;
	public String wsurl;
	public String remark;
	public sys_flinks(String wsname, String wsurl, String remark) {
		this.wsname = wsname;
		this.wsurl = wsurl;
		this.remark = remark;
	}
	
	
}
