package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import play.db.jpa.GenericModel;

@Entity
public class mag_classify_art extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	@ManyToOne
	public mag_article art;
	@ManyToOne
	public mag_classify classify;
	
	public mag_classify_art(mag_article art, mag_classify classify) {
		this.art = art;
		this.classify = classify;
	}

	
}
