package com.web.niceapp.handler;

import com.alibaba.fastjson.JSONObject;
import com.sun.deploy.net.HttpResponse;
import com.web.niceapp.model.User;
import com.web.niceapp.service.AuthService;
import com.web.niceapp.service.UserAuthServiceImpl;
import jdk.nashorn.internal.parser.JSONParser;
import jdk.nashorn.internal.runtime.JSONFunctions;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;

/**
 * Created by root on 17-7-10.
 */
@Controller
@RequestMapping(value = "/authority")
public class LoginHandler {

    @Autowired
    @Qualifier("userAuthService")
    AuthService userAuthService;

    /**
     * 登录
     *
     * @param request
     */
    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    @ResponseBody
    public void login(HttpServletRequest request) {
        System.out.println();
    }

    /**
     * 注册
     *
     * @param data
     */
    @RequestMapping(value = "/signup",produces = MediaType.APPLICATION_JSON_UTF8_VALUE,method = RequestMethod.POST)
    @ResponseBody
    public User signup(@RequestBody String data) throws Exception{
        User user = null;
        if (data != null && !"".equals(data)) {
            JSONObject jsonObject = JSONObject.parseObject(data);
            user = userAuthService.signin(jsonObject);
//            Set<Map.Entry<String, Object>> set = jsonObject.entrySet();
//            for (Map.Entry<String, Object> entry : set) {
//                System.out.println(entry.getKey() + "---" + entry.getValue());
//            }
        }
        return user;
    }
}
