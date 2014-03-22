package controllers.admin;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Home extends Controller {

    public static void index() {
        render("Admin/index.html");
    }

    public static void home(){
        render();
    }

}