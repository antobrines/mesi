package com.mesi.web;


import com.mesi.web.model.User;
import com.mesi.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Component;


@Component
public class MyRunner implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;


    @Override
    public void run(String... strings) throws Exception {
        System.out.println("Bonjour");
        User user = userRepository.findByEmail("antonin.brines@outlook.fr");
        System.out.println(user);
    }

    public static void print(Object t) {
        System.out.println(t);
    }
}
