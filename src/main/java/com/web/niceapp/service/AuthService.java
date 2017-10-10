package com.web.niceapp.service;

import com.alibaba.fastjson.JSONObject;
import com.web.niceapp.dao.UserMapper;
import com.web.niceapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by root on 17-9-4.
 */
public interface AuthService {

    User signin(JSONObject json);

    User login(JSONObject json);
}
