package com.web.niceapp.handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by root on 17-7-10.
 */
@Controller
public class LoginHandler {

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public void login(){

    }
}
