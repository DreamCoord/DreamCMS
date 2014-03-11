package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import play.db.jpa.GenericModel;
//用户角色表
@Entity
public class rbac_role_group extends GenericModel{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	@ManyToOne
	public rbac_usergroup groups;		//(用户组标识)
	@ManyToOne
	public rbac_role roles;		//(角色标识)
	
	public rbac_role_group( rbac_usergroup groups, rbac_role roles) {
		this.groups = groups;
		this.roles = roles;
	}
	public rbac_role_group( ) {
	}

	
	
}
