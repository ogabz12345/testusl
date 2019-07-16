package com.example.demo.management;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class UsersController {

	@Autowired
	private UsersService userService;
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public UsersController(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	
//	get all users
	@GetMapping("/users")
	public List<Users> findAll(){
		return userService.findAll();
	}
	
//	get a user
	@GetMapping("/user/{id}")
	public Users findById(@PathVariable Long id) {
		return userService.findById(id);
	}

//	update a user	
	@PutMapping("/user")
	public Users update(@RequestBody Users countries) {
		return userService.save(countries);
	}
	
	
//	delete a user
	@DeleteMapping("/user/{id}")
		public void delete(@PathVariable Long id) {
		userService.delete(id);
		}
	

//	@PostMapping("/user")
//	public Users save(@RequestBody Users countries) {
//		//create an email instance
//		
//		SimpleMailMessage mailMessage = new SimpleMailMessage();
//		String email = countries.getEmail();
//		String password = countries.getPassword();		
//		mailMessage.setFrom("spring.mail.username");
//		mailMessage.setTo(email);
//		mailMessage.setSubject("THIS IS YOUR PASSWORD");
//		mailMessage.setText("Password := "+ password);		
//				javaMailSender.send(mailMessage);
//				return userService.save(countries);
//			
//		
//		
//	}
	
	
//	create a user and also send the users password to the user email address.
//	This method also checks for username, you cant register the same username.
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Users countries) {
		System.out.println("entity!!!!!2"+countries.getUsername());
		//boolean exist;
		String username = countries.getUsername();
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		String email = countries.getEmail();
		String password = countries.getPassword();		
		mailMessage.setFrom("spring.mail.username");
		mailMessage.setTo(email);
		mailMessage.setSubject("THIS IS YOUR PASSWORD");
		mailMessage.setText("Password := "+ password);		
		Optional<Users> users = userService.findByUserName(username);
		Optional<Users> usersEm = userService.findByEmail(email);
		if (!users.isPresent()) {
			if(!usersEm.isPresent()) {
				javaMailSender.send(mailMessage);
				return new ResponseEntity<Users>(userService.register(countries),HttpStatus.OK) ;
			}

		}
		return new ResponseEntity<Users>(HttpStatus.BAD_REQUEST);
	}
	
	
//	This method get the email address of the user and send a link for the user to reset password.
	@PostMapping("/forgotPass")
	public ResponseEntity<?> forgotPassord(@RequestBody String email){
		
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		Optional<Users> users = userService.findByEmail(email);
		mailMessage.setTo(email);
		
		mailMessage.setText("<a href='http://localhost:4200/resetpassword/activateuser/"+email+"></a>");
		javaMailSender.send(mailMessage);
		return new ResponseEntity<Users>(HttpStatus.OK);
	}
	
//	This method get the email address of the user and send the user object back to the front.
	@PostMapping("/changePassword")
	public Optional<Users> changePassord(@RequestBody String email){
		
		Optional<Users> users = userService.findByEmail(email);
		return users;

	}
	
	@GetMapping("/users/count")
	public long count() {
		return userService.Count();
	}
	
//	This method checks if user exist in the database or not.
	@PostMapping("/isokay")
	public boolean isExist(@RequestBody Users user) {
		return userService.isExist(user.getUsername(), user.getPassword());
	
	}
}
