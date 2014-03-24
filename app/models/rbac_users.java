package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import play.db.jpa.GenericModel;
//用户表
@Entity
//@Table(name="rbac_users" ,catalog="easycmsdb")
public class rbac_users extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;			//(用户标识)
	public String username;	//(用户名)
	public String name;		//(姓名)
	public String email;		//(电子邮件)		
	public String password;	//(密码)
	public String logintime;	//(登录时间)
	public String loginip;		//(登录IP)
	public String status;		//(状态)	
	@ManyToOne
	public  rbac_usergroup group;//(用户组ID）
	
	
	public rbac_users(String username, String name, String email,
			String password, String logintime, String loginip, String status
			) {
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.logintime = logintime;
		this.loginip = loginip;
		this.status = status;
	}
	
	public rbac_users(){
		
	}

	

	
	
		
}
