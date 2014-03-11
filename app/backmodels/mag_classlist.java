package backmodels;

public class mag_classlist {
	private int id;
	private int pid;
	private String name;
	private boolean open;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isOpen() {
		return open;
	}
	public void setOpen(boolean open) {
		this.open = open;
	}
	public mag_classlist(int id, int pid, String name, boolean open) {
		this.id = id;
		this.pid = pid;
		this.name = name;
		this.open = open;
	}
	

	
}
