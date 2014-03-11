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

import com.alibaba.fastjson.JSON;
//会员管理
@Entity
public class sys_member  extends GenericModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String username;	//用户名
	public String name;		//作者名称
	public String isTJ ;	//是否推荐
	public String grade;	//等级
	public String icon;		//头像
	public String remark;	//备注
	public sys_member(String username, String name, String isTJ, String grade,
			String icon, String remark) {
		this.username = username;
		this.name = name;
		this.isTJ = isTJ;
		this.grade = grade;
		this.icon = icon;
		this.remark = remark;
	}	
	public sys_member(){
		
	}
	public static List<Map> allMember(){
		List<Map> allMap = new ArrayList<Map>();
		
		List<sys_member> allmember = sys_member.find("order by id desc").fetch();
		
		for(int i=0;i<allmember.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", allmember.get(i).id);
			map.put("mappath", allmember.get(i).icon);
			map.put("name", allmember.get(i).name);
			map.put("remark", allmember.get(i).remark);
			map.put("grade", allmember.get(i).grade);
			allMap.add(map);
		}
		
		return allMap;
	}
	public static List<Map> allHytj(){
		List<Map> allMap = new ArrayList<Map>();
		
		List<sys_member> allmember = sys_member.find("from sys_member where isTJ = 'true' order by id desc").fetch();
		
		for(int i=0;i<allmember.size();i++){
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("id", allmember.get(i).id);
			map.put("mappath", allmember.get(i).icon);
			map.put("name", allmember.get(i).name);
			map.put("remark", allmember.get(i).remark);
			map.put("grade", allmember.get(i).grade);
			allMap.add(map);
		}
		
		return allMap;
	}
}
