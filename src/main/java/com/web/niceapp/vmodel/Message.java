package com.web.niceapp.vmodel;

/**
 * Created by root on 17-9-23.
 */
public class Message {
    protected String content;

    protected String status;

    public static final String STATUS_WARNIGNG = "warning";

    public static final String STATUS_INFO = "info";

    public static final String STATUS_ERROR = "error";

    public static final String STATUS_SUCCESS = "success";

    public static final String STATUS_FAIL = "fail";

    public String getContent() {
        return content;
    }

    public String getStatus() {
        return status;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
