package backmodels;

public class rbac_rolelist {
	private int id;			//(角色标识)
	private String name;	//(名称)
	private String pid;		//(角色标识)
	private String status;	//(状态)
	private String remark;	//(备注)	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public rbac_rolelist(int id, String name, String pid, String status,
			String remark) {
		super();
		this.id = id;
		this.name = name;
		this.pid = pid;
		this.status = status;
		this.remark = remark;
	}
	
}
