package backmodels;

import java.util.List;

//用户组列表
public class rbac_usergrouplist {
	private int id;
	private String groupname;
	private String groupparname;
	private String status;
	private List<String> role;
	private long sumuser;
	private String remark;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	public String getGroupparname() {
		return groupparname;
	}
	public void setGroupparname(String groupparname) {
		this.groupparname = groupparname;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<String> getRole() {
		return role;
	}
	public void setRole(List<String> role) {
		this.role = role;
	}
	public long getSumuser() {
		return sumuser;
	}
	public void setSumuser(long sumuser) {
		this.sumuser = sumuser;
	}
	public rbac_usergrouplist(int id, String groupname, String groupparname,
			String status, List<String> role, int sumuser,String remark) {
		this.id = id;
		this.groupname = groupname;
		this.groupparname = groupparname;
		this.status = status;
		this.role = role;
		this.sumuser = sumuser;
		this.remark = remark;
	}
	public rbac_usergrouplist(int id, String groupname,
			String status,String remark) {
		this.id = id;
		this.groupname = groupname;
		this.status = status;
		this.remark = remark;
	}
	
	
	public rbac_usergrouplist(int id, String groupparname) {
		this.id = id;
		this.groupparname = groupparname;
	}
	
	public rbac_usergrouplist(int id, long sumuser) {
		this.id = id;
		this.sumuser = sumuser;
	}
	public rbac_usergrouplist() {
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

	
}
