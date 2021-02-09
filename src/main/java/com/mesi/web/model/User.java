package com.mesi.web.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    private UserType userType;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Address> addresses;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Product> products;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Purchase> purchases;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "passwordHash")
    private Integer passwordHash;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "profile_pricture")
    private Integer profilePicture;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "modification_date")
    private Date modificationDate;

    public User() {

    }

    public User(Integer id, UserType userType, List<Address> addresses, List<Product> products, List<Purchase> purchases, String firstName, String lastName, String email, Integer passwordHash, String phoneNumber, Integer profilePicture, Date creationDate, Date modificationDate) {
        this.id = id;
        this.userType = userType;
        this.addresses = addresses;
        this.products = products;
        this.purchases = purchases;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordHash = passwordHash;
        this.phoneNumber = phoneNumber;
        this.profilePicture = profilePicture;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<Purchase> purchases) {
        this.purchases = purchases;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(Integer passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(Integer profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(Date modificationDate) {
        this.modificationDate = modificationDate;
    }
}
