package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.management.Users;
import com.example.demo.management.UsersRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	
	@Autowired
	
	private UsersRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		userRepository.save(new Users("Oladele","Ogabi","No 2 saka jojo",12345,"ogabioladele@gmail.com","ogabz","oladele",true));
		userRepository.save(new Users("amadin","nosa","No 2 saka jojo",5647,"amasnosa@gmail.com","dele","dele",true));
		userRepository.save(new Users("Ope","Ronke","No 2 saka jojo",9876,"stevejobs@gmail.com","ronke","ronke",false));
		
	}

}
