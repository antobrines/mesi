package com.mesi.web.controller;

import com.mesi.web.model.JwtRequest;
import com.mesi.web.model.JwtResponse;
import com.mesi.web.service.UserService;
import com.mesi.web.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String home(){
        return "Hello";
    }

    @PostMapping("/authenticate")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception {

        UserDetails user = userService.loadUserByUsername(jwtRequest.getUsername());

        if(BCrypt.checkpw(jwtRequest.getPassword(), user.getPassword())){
            final UserDetails userDetails
                    = userService.loadUserByUsername(jwtRequest.getUsername());

            final String token
                    = jwtUtility.generateToken(userDetails);

            return new JwtResponse(token);

        }else {
            throw new Exception("invalid credential");
        }
    }
}
