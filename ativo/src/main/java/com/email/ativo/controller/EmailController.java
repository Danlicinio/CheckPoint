package com.email.ativo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.email.ativo.model.EmailModel;
import com.email.ativo.service.EmailService;

@RestController
public class EmailController {
	@Autowired
	private EmailService emailService;
	
	@PostMapping("/send-email")
	public ResponseEntity<EmailModel> sendEmail(@RequestBody EmailModel model){
		emailService.sendEmail(model);
		return new ResponseEntity(model, HttpStatus.OK);
	}
}
