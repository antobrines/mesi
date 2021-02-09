package com.mesi.web.model;

import javax.persistence.*;

@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Integer id;

    /* 0, 1 ? */
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "url")
    private String url;

    @Column(name = "name")
    private String name;

    public Image() {

    }

    public Image(Integer id, Product product, String url, String name) {
        this.id = id;
        this.product = product;
        this.url = url;
        this.name = name;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
