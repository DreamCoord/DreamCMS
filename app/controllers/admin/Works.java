package controllers.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.persistence.Query;

import models.mag_works;
import models.mag_worksclass;
import play.Play;
import play.db.jpa.JPA;
import play.libs.Files;
import play.mvc.Controller;
import backmodels.mag_allworkslist;
import backmodels.mag_classlist;
import backmodels.rbac_userlist;

import com.alibaba.fastjson.JSON;

public class Works extends Controller{
	//添加作品
	public static void addWorks(String title,String size,String texture,String time,String author,String remark,File image,String treeclass){
		//文件保存目录路径
		String savePath =  Play.applicationPath.toString()+Play.configuration.getProperty("newsImg.savePath", "/public/upload/");
		//文件保存目录URL
		String saveUrl  =  Play.configuration.getProperty("newsImg.savePath", "/public/upload/");			
		if (image != null) {
			//检查目录
			File uploadDir = new File(savePath);
			if(!uploadDir.isDirectory()){
				renderJSON("{\"state\":\"上传目录不存在。\"}");
				return;
			}
			//检查目录写权限
			if(!uploadDir.canWrite()){
				renderJSON("{\"state\":\"上传目录没有写权限。\"}");
				return;
			}
			String ymd = "works";
			savePath += ymd + "/";
			saveUrl += ymd + "/";
			File dirFile = new File(savePath);
			if (!dirFile.exists()) {
				dirFile.mkdirs();
			}			
			//检查扩展名
			String fileExt = image.getName().substring(image.getName().lastIndexOf(".") + 1).toLowerCase();
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
			File f = new File(savePath,newFileName);
			try {
				Files.copy(image,f);  
				System.out.println(saveUrl + newFileName);
				java.text.DateFormat format1 = new java.text.SimpleDateFormat(  
		                "yyyy-MM-dd hh:mm");  
				String timeStr = format1.format(new Date()).toString();
				mag_works works = new mag_works(title,author,time,size,texture,remark,saveUrl + newFileName,timeStr,"等待审核");
				mag_worksclass wc = new mag_worksclass();
				wc.id = Integer.parseInt(treeclass);
				works.workclass = wc;
				works.save();
				renderJSON("{\"state\":\"操作成功\"}");
			} catch (Exception e) {
				e.printStackTrace();
				renderJSON("{\"state\":\"上传失败\"}");
			}
		}else{
			renderJSON("{\"state\":\"请选择文件。\"}");
		}
		
		
		
		renderJSON("{\"status\":\"操作成功\"}");
	}
	//所有作品
	public static void allWorks(){
		String hql = "select new backmodels.mag_allworkslist(w.id,w.title,w.author,w.createtime,w.size,w.texture,w.remark,w.mappath,w.time,wws.name)  from mag_works w left join w.workclass wws  where w.workclass.id = wws.id";
		Query query = JPA.em().createQuery(hql);		
		List<mag_allworkslist> alllist =query.getResultList();
//		mag_allworkslist alllist = mag_works.find("").fetch();
		String allStr = JSON.toJSONString(alllist);
		String jsonStr = "{\"data\":"+allStr+"}";
		System.out.println(jsonStr);
		renderJSON(jsonStr);
	}
	//选择指定作品
	public static void selectWorks(int id){
		
	}
	
	//删除作品
	public static void delWorkd(int id){
		
	}
	public static void allWorksClass(){
		List<mag_worksclass> pList = mag_worksclass.find("from mag_worksclass order by id asc").fetch();
		List<mag_classlist> classList = new ArrayList<mag_classlist>();
		
		
		for(int i =0;i<pList.size();i++){
			mag_classlist listitem = new mag_classlist(pList.get(i).id,pList.get(i).pid,pList.get(i).name,true);
		
			classList.add(listitem);
		}
		
		
		String pStr=JSON.toJSONString(classList);
		String jsonStr = "{\"classList\":"+pStr+"}";
		System.out.println(pStr);
		renderJSON(jsonStr);
	}
}
