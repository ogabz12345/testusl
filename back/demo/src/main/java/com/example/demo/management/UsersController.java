package com.example.demo.management;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:2345",allowedHeaders="*")
public class UsersController {

	@Autowired
	private UsersService userService;
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public UsersController(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	
	@GetMapping("/users")
	public List<Users> findAll(){
		return userService.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Users findById(@PathVariable Long id) {
		return userService.findById(id);
	}

	
	@PutMapping("/user")
	public Users update(@RequestBody Users countries) {
		return userService.save(countries);
	}
	
	@DeleteMapping("/user/{id}")
		public void delete(@PathVariable Long id) {
		userService.delete(id);
		}
	
	
	@PostMapping("/user")
	public Users save(@RequestBody Users countries) {
		//create an email instance
		
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		String email = countries.getEmail();
		String password = countries.getPassword();		
		mailMessage.setFrom("spring.mail.username");
		mailMessage.setTo(email);
		mailMessage.setSubject("THIS IS YOUR PASSWORD");
		mailMessage.setText("Password := "+ password);		
				javaMailSender.send(mailMessage);
				return userService.save(countries);
			
		
		
	}
	
	@GetMapping("/users/count")
	public long count() {
		return userService.Count();
	}
	
	@PostMapping("/isokay")
	public boolean isExist(@RequestBody Users user) {
		return userService.isExist(user.getUsername(), user.getPassword());
	
	}
}