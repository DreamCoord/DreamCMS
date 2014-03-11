package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import play.db.jpa.GenericModel;
//角色表
@Entity
public class rbac_role extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;			//(角色标识)
	public String name;	//(名称)
	public String roleid;		//(角色标识)
	public String status;	//(状态)
	public String remark;	//(备注)	
	public String node;
	@OneToMany(mappedBy = "roles") 
	public List<rbac_role_group> roles;
	
	public rbac_role(String name, String pid, String status, String remark,String node) {
		this.name = name;
		this.roleid = pid;
		this.status = status;
		this.remark = remark;
		this.node = node;
	}
	public rbac_role(){
		
	}

	


	

	
}
