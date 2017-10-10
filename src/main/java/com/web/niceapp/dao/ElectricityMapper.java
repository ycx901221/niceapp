package com.web.niceapp.dao;

import com.web.niceapp.model.Electricity;
import org.springframework.stereotype.Repository;

public interface ElectricityMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Electricity record);

    int insertSelective(Electricity record);

    Electricity selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Electricity record);

    int updateByPrimaryKey(Electricity record);
}