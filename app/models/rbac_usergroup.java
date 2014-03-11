package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import play.db.jpa.GenericModel;

@Entity
public class rbac_usergroup extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String groupname;
	public String status;
	public String remark;
	public int pid;
	@OneToMany(mappedBy = "group") 
	public List<rbac_users> users;
	
	@OneToMany(mappedBy = "groups") 
	public List<rbac_role_group> groups;
	
	

	public rbac_usergroup(String groupname,	String status, String remark,int pid) {
		this.groupname = groupname;
		this.status = status;
		this.remark = remark;
		this.pid = pid;
	}
	public rbac_usergroup(){
		
	}	
	
}
