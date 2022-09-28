package com.email.ativo.service;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.email.ativo.model.EmailModel;
import com.email.ativo.model.StatusEmail;
import com.email.ativo.repository.EmailRepository;

@Service
	public class EmailService {
	    @Autowired   
	    private EmailRepository emailRepository; 
	    @Autowired    
	    private JavaMailSender emailSender;
	    @SuppressWarnings("finally")
	    public EmailModel sendEmail(EmailModel model)
	    {
	        System.out.println("Enviando e-mail");
	        model.setSendDateEmail(LocalDateTime.now());
	        try {
	            SimpleMailMessage message = new SimpleMailMessage();
	            message.setFrom(model.getEmailFrom());
	            message.setTo(model.getEmailTo());
	            message.setSubject(model.getSubject());
	            message.setText(model.getText());
	            emailSender.send(message);
	            model.setStatusEmail(StatusEmail.SEND);
	        } catch (Exception e) {
	            model.setStatusEmail(StatusEmail.ERROR);
	        }finally {
	            return emailRepository.save(model);
	        }
	    }
}