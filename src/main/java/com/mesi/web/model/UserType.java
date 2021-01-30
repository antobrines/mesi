package com.mesi.web.model;

import javax.persistence.*;

@Entity
@Table(name = "user_type")
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_type_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @Column(name = "name")
    private String name;

    public UserType() {

    }

    public UserType(Integer id, User user, String name) {
        this.id = id;
        this.user = user;
        this.name = name;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
