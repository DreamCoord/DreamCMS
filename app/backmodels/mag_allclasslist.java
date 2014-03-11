package backmodels;

public class mag_allclasslist {
	private int id;
	private String name;
	private String alias;
	private String miaoshu;
	private long sumart;
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
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public String getMiaoshu() {
		return miaoshu;
	}
	public void setMiaoshu(String miaoshu) {
		this.miaoshu = miaoshu;
	}
	public long getSumart() {
		return sumart;
	}
	public void setSumart(long sumart) {
		this.sumart = sumart;
	}
	public mag_allclasslist(int id, String name, String alias, String miaoshu,
			long sumart) {
		this.id = id;
		this.name = name;
		this.alias = alias;
		this.miaoshu = miaoshu;
		this.sumart = sumart;
	}
	public mag_allclasslist(int id, String name, String alias, String miaoshu) {
		this.id = id;
		this.name = name;
		this.alias = alias;
		this.miaoshu = miaoshu;
	}
	
}
