package com.web.niceapp.dao;

import com.web.niceapp.model.EWatch;
import org.springframework.stereotype.Repository;

public interface EWatchMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(EWatch record);

    int insertSelective(EWatch record);

    EWatch selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(EWatch record);

    int updateByPrimaryKey(EWatch record);
}