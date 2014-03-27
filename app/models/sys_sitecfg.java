package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import play.db.jpa.GenericModel;

//网站关键字管理表
@Entity
public class sys_sitecfg  extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String wskey;
	public String wsvalue;
	public sys_sitecfg(String wskey, String wsvalue) {
		this.wskey = wskey;
		this.wsvalue = wsvalue;
	}
	public sys_sitecfg(){

	}
    public static List<Map> getWsCfg(){
        List<Map> mapList = new ArrayList<Map>();
        return mapList;
    }
    public static void setWsCfg(String wskey, String wsvalue){

    }

}
