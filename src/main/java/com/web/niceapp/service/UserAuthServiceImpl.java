package com.web.niceapp.service;

import com.alibaba.fastjson.JSONObject;
import com.web.niceapp.dao.UserMapper;
import com.web.niceapp.model.User;
import com.web.niceapp.vmodel.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Set;

/**
 * Created by root on 17-9-4.
 */
@Service("userAuthService")
public class UserAuthServiceImpl implements AuthService{
    @Autowired
    UserMapper userDao;

    /**
     * 注册
     * @param json
     * @return
     */
    public User signin(JSONObject json) {
        String name = json.getString("username");
        User user = userDao.selectByName(name);
        if(user != null){
            user.setResMessage(Message.STATUS_FAIL,"该用户名已存在");
        } else {
            User newUser = new User();
            newUser.setName(name);
            int id = userDao.insertSelective(newUser);
            if(id >= 0){
                newUser.setResMessage(Message.STATUS_SUCCESS,"用户注册成功");
            }
        }
        return user;
    }

    /**
     * 登录
     * @param json
     * @return
     */
    public User login(JSONObject json) {
        String name = json.getString("username");
        User user = userDao.selectByName(name);
        if(user != null){
            user.setResMessage(Message.STATUS_SUCCESS,"用户登录成功");
        }
        return user;
    }
}
