package backmodels;
//用户列表返回对象
public class rbac_userlist {
	private int id;
	private String username;
	private String name;
	private String email;
	private String status;
	private int groupid;
	private String groupname;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getGroupid() {
		return groupid;
	}
	public void setGroupid(int groupid) {
		this.groupid = groupid;
	}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	public rbac_userlist(int id, String username, String name, String email,
			String status, int groupid, String groupname) {
		this.id = id;
		this.username = username;
		this.name = name;
		this.email = email;
		this.status = status;
		this.groupid = groupid;
		this.groupname = groupname;
	}
	
}
