package backmodels;

public class mag_allarticlelist {
	private int id;
	private String title;
	private String author;
	private String classify;
	private String tags;
	private String time;
	private String content;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getClassify() {
		return classify;
	}
	public void setClassify(String classify) {
		this.classify = classify;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public mag_allarticlelist(int id, String title, String author,
			String classify, String tags, String time,String content) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.classify = classify;
		this.tags = tags;
		this.time = time;
		this.content = content;
	}
	public mag_allarticlelist(int id, String title, String author, String tags,
			String time,String content) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.tags = tags;
		this.time = time;
		this.content = content;
	}
	
	
}
