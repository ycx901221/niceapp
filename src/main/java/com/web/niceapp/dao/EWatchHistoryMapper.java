package com.web.niceapp.dao;

import com.web.niceapp.model.EWatchHistory;
import org.springframework.stereotype.Repository;

public interface EWatchHistoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(EWatchHistory record);

    int insertSelective(EWatchHistory record);

    EWatchHistory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(EWatchHistory record);

    int updateByPrimaryKey(EWatchHistory record);
}