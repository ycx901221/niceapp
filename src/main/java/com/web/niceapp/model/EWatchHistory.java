package com.web.niceapp.model;

public class EWatchHistory {
    private Integer id;

    private String name;

    private EWatch eWatch;

    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public EWatch geteWatch() {
        return eWatch;
    }

    public void seteWatch(EWatch eWatch) {
        this.eWatch = eWatch;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}