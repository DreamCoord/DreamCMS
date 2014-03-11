package backmodels;

public class rbac_usergrouprolelist {
	private int id;
	private String role;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public rbac_usergrouprolelist(int id, String role) {
		this.id = id;
		this.role = role;
	}
	
}
