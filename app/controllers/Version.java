package controllers;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.regex.*;

import play.Play;

import org.apache.commons.io.*;

import net.lingala.zip4j.core.*;
import net.lingala.zip4j.exception.ZipException;

import com.google.gson.*;
import com.google.gson.reflect.*;

public class Version {
	public int major;
	public int minor;
	public int micro;
	
	public Version(int major, int minor, int micro){
		this.major = major;
		this.minor = minor;
		this.micro = micro;
	}
	
	public boolean newerThan(Version v){
		return this.major>v.major || (this.major==v.major&&this.minor>v.minor) || (this.major==v.major&&this.minor==v.minor&&this.micro>v.micro);
	}
	
	public String toString(){
		return this.major+"."+this.minor+"."+this.micro;
	}
	
	public static List<Version> getAvailableVersions(){
		String response = "";
		try{
			URL url = new URL("http://localhost:8000/check_updates");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			InputStream stream = conn.getInputStream();
			response = IOUtils.toString(stream);
		}catch(Exception e){
			e.printStackTrace();
		}
		
		Gson gson = new Gson();
		List<Version> versions = (List<Version>)gson.fromJson(response, new TypeToken<List<Version>>(){}.getType());
		return versions;
	}
	
	public static Version getLatestVersion(){
		Version latest_version = new Version(0,0,0);
		List<Version> versions = Version.getAvailableVersions();
		if(versions == null){
			return latest_version;
		}
		
		for(Version v:versions){
			if(v.newerThan(latest_version)){
				latest_version = v;
			}
		}
		
		return latest_version;
	}
	
	public static Version getCurrentVersion(){
		Pattern pat = Pattern.compile("(\\d)\\.(\\d)\\.(\\d)");
		Matcher matcher = pat.matcher(Play.configuration.getProperty("cms.version"));
		if(matcher.matches()){
			Version v = new Version(Integer.parseInt(matcher.group(1)), Integer.parseInt(matcher.group(2)), Integer.parseInt(matcher.group(3)));
			return v;
		}else{
			return new Version(1, 0, 0);
		}
	}
	public static void setCurrentVersion(Version ver){
		Play.configuration.setProperty("cms.version", ver.toString());
		try{
			FileWriter writer = new FileWriter("conf/application.conf");
			Play.configuration.store(writer, "");
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	public static void updateToLatestVersion() throws IOException, ZipException{
		Version current_version = Version.getCurrentVersion();
		Version latest_version = Version.getLatestVersion();
		if(latest_version.newerThan(current_version)){
			URL url = new URL("http://localhost:8000/download_version?ver="+latest_version.toString());
			File f = new File(latest_version.toString()+".zip");
			FileUtils.copyURLToFile(url, f);
			
			ZipFile zip_file = new ZipFile(latest_version.toString()+".zip");
			zip_file.extractAll(".");
			
			Version.setCurrentVersion(latest_version);
		}
	}
}
