package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import play.db.jpa.GenericModel;
@Entity
public class mag_classify extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;		//名称
	public int pid;			//父级
	public String alias;		//别名
	public String miaoshu;		//描述
	@OneToMany(mappedBy="classify")
	public List<mag_classify_art> classify;
	
	public mag_classify(String name, int pid, String alias, String miaoshu) {
		this.name = name;
		this.pid = pid;
		this.alias = alias;
		this.miaoshu = miaoshu;
	}
	
	public mag_classify() {
	}
	

	
}
