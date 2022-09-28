package com.email.ativo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.email.ativo.model.EmailModel;


public interface EmailRepository extends MongoRepository<EmailModel, String> {

}
