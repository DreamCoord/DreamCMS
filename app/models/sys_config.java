package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import play.db.jpa.GenericModel;
@Entity
public class sys_config extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;
	public String value;
	
	public sys_config(String name, String value) {
	
		this.name = name;
		this.value = value;
	}
	

}
