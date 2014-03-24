package controllers.admin;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import models.mag_article;
import models.mag_classify;
import models.mag_classify_art;
import models.rbac_users;
import play.mvc.Controller;

//文章管理
public class User extends Controller{
//	获取所有文章
	public static void allUser(){
		List<rbac_users> users = rbac_users.findAll();
		String msg = flash.get("msg");
		render(users, msg);
	}
//	查询文章
	public static void selectArticle(){
                  render();
	}
	public static void add(String username, String email, String name, String password){
		rbac_users user = new rbac_users();
		user.username = username;
		user.email = email;
		user.name = name;
		user.password = password;
		user.save();
		
		allUser();
	}

	public static void delete(int id){
		rbac_users user = rbac_users.findById(id);
		user.delete();

		flash("msg", "删除成功");
		allUser();
	}

	public static void edit(int id){
		rbac_users user = rbac_users.findById(id);
		if(request.method == "GET"){
			render(user);
		}else{
			String username = params.get("username");
			String name = params.get("name");
			String email = params.get("email");

			user.username = username;
			user.name = name;
			user.email = email;
			user.save();

			flash("msg", "<div class='alert alert-success'>保存成功</div>");
			allUser();
		}
	}

}
