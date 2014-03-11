package backmodels;

public class sys_navicattree {
	private int id;
	private int pid;
	private String name;
	private boolean open = true;
	private boolean checked;
	
	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
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
	public sys_navicattree(int id, int pid, String name) {
		this.id = id;
		this.pid = pid;
		this.name = name;
	}

}
