package com.example.demo.management;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UsersService {
	

	public List<Users> findAll();
	
	public Users findById(long id);
	
	public Users save(Users entity);
	
	public void delete(long id);
	
	public Users update(Users entity);
	
	public long Count();
	
	public boolean isExist(String username,String password);
	

}