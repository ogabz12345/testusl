package com.example.demo.management;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImp implements UsersService {

	@Autowired
	private UsersRepository userRepository;
	@Override
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public Users findById(long id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public Users save(Users entity) {
		// TODO Auto-generated method stub
		return userRepository.save(entity);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

	@Override
	public Users update(Users entity) {
		// TODO Auto-generated method stub
		return userRepository.save(entity);
	}

	@Override
	public long Count() {
		// TODO Auto-generated method stub
		return userRepository.count();
	}

	@Override
	public boolean isExist(String username,String password) {
		boolean isOkay = false;
		if(userRepository.findByUsername(username).isPresent() &&
				userRepository.findByUsername(username).get().getPassword().equals(password) &&
				userRepository.findByUsername(username).get().isActive()) {
			isOkay = true;
		}
		
		
		return isOkay;
	}

	@Override
	public Users register(Users entity) {
		// TODO Auto-generated method stub
		return userRepository.save(entity);
	}

	@Override
	public Optional<Users> findByUserName(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);
	}
	
	
	
	
	


}
