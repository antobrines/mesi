package com.mesi.web.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "purchase")
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "purchase_id")
    private Integer id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    private List<Product> products;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Ticket> tickets;

    @Column(name = "purchase_date")
    private Date purchaseDate;

    @Column(name = "quantity")
    private Integer quantity;

    public Purchase() {

    }

    public Purchase(Integer id, User user, List<Product> products, List<Ticket> tickets, Date purchaseDate, Integer quantity) {
        this.id = id;
        this.user = user;
        this.products = products;
        this.tickets = tickets;
        this.purchaseDate = purchaseDate;
        this.quantity = quantity;
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


    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
