package com.mesi.web.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id")
    private Integer id;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "content")
    private String content;

    @Column(name = "send_date")
    private Date sendDate;

    @Column(name = "sender_id")
    private Integer senderId;

    public Message() {

    }

    public Message(Integer id, Product product, String content, Date sendDate, Integer senderId) {
        this.id = id;
        this.product = product;
        this.content = content;
        this.sendDate = sendDate;
        this.senderId = senderId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getSendDate() {
        return sendDate;
    }

    public void setSendDate(Date sendDate) {
        this.sendDate = sendDate;
    }

    public Integer getSenderId() {
        return senderId;
    }

    public void setSenderId(Integer senderId) {
        this.senderId = senderId;
    }
}
