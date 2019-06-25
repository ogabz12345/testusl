package com.example.demo.management;

import java.util.List;

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
		System.out.println("++++++++++++++second"+username+"____"+password);
		System.out.println("++++++++++++++isokay" + isOkay);
		return isOkay;
	}


}
