package controllers.admin;

import java.util.List;

import javax.persistence.Query;

import models.rbac_users;
import play.db.jpa.JPA;
import play.mvc.Before;
import play.mvc.Controller;

public class login extends Controller{
	public static void login(){
		session.clear();
		render("admin/login.html");
	}
	public static void logout(){
		session.clear();
		render("admin/login.html");
	}
	//验证信息
	public static void Verification(String username ,String password){
		validation.required(username);
		validation.required(password);
        if(!username.equals("") && !password.equals("")){
            String hql = "from rbac_users as users where users.username=:username and users.password=:password";
            Query query = JPA.em().createQuery(hql);
            query.setParameter("username", username);
            query.setParameter("password", password);
            List<rbac_users> users = query.getResultList();
            System.out.println("--------->"+query.getResultList());
            if(!users.isEmpty()){
                session.put("username", username);
                redirect("/admin/index");
            }else{
                String state = "err";
                render("/admin/login.html",state);
            }
        }else{
            render("/admin/login.html");
        }

		
	}
	
	public static void register(String username,String password){
		render("admin/register.html");
	}
	
	
}
