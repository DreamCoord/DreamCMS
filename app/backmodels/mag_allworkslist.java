package backmodels;

public class mag_allworkslist {
	public int id;
	public String title;
	public String author; //作者
	public String createtime;//创作时间
	public String size;		//规格
	public String texture;	//材质
	public String remark;	//描述
	public String mappath;	//作品路径
	public String time;		//上传时间
	public String classify;	//状态
	public mag_allworkslist(int id,String title, String author, String createtime,
			String size, String texture, String remark, String mappath,
			String time, String classify) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.createtime = createtime;
		this.size = size;
		this.texture = texture;
		this.remark = remark;
		this.mappath = mappath;
		this.time = time;
		this.classify = classify;
	}
	
}
