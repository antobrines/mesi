package com.mesi.web.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer id;

    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(name = "contain", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "purchase_id"))
    private List<Purchase> purchases;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Message> messages;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Image> images;

    @Column(name = "title")
    private String title;

    @Column(name = "tva")
    private Float tva;

    @Column(name = "price_ht")
    private Float priceHt;

    @Column(name = "description")
    private String description;

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "update_date")
    private Date updateDate;

    @Column(name = "expiration_date")
    private Date expirationDate;

    public Product() {

    }

    public Product(Integer id, Category category, User user, List<Purchase> purchases, List<Message> messages, List<Image> images, String title, Float tva, Float priceHt, String description, Integer stock, Date creationDate, Date updateDate, Date expirationDate) {
        this.id = id;
        this.category = category;
        this.user = user;
        this.purchases = purchases;
        this.messages = messages;
        this.images = images;
        this.title = title;
        this.tva = tva;
        this.priceHt = priceHt;
        this.description = description;
        this.stock = stock;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.expirationDate = expirationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public List<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<Purchase> purchases) {
        this.purchases = purchases;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Float getTva() {
        return tva;
    }

    public void setTva(Float tva) {
        this.tva = tva;
    }

    public Float getPriceHt() {
        return priceHt;
    }

    public void setPriceHt(Float priceHt) {
        this.priceHt = priceHt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }
}
