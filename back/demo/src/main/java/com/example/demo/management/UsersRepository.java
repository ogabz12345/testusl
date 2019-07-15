package com.example.demo.management;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {

	public Optional<Users> findByUsername(String username);
	
	
}
