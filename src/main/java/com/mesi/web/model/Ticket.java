package com.mesi.web.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Integer id;

    @OneToOne
    @JoinColumn(name = "purchase_id")
    private Purchase purchase;

    @Column(name = "request")
    private String request;

    @Column(name = "answer")
    private String answer;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "answer_date")
    private Date answerDate;

    public Ticket() {

    }

    public Ticket(Integer id, Purchase purchase, String request, String answer, Date creationDate, Date answerDate) {
        this.id = id;
        this.purchase = purchase;
        this.request = request;
        this.answer = answer;
        this.creationDate = creationDate;
        this.answerDate = answerDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getAnswerDate() {
        return answerDate;
    }

    public void setAnswerDate(Date answerDate) {
        this.answerDate = answerDate;
    }
}
