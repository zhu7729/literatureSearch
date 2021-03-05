import axios from 'axios';
import {message} from "element-ui";
import {objectCompare} from "@/utils/objectCompare.js";
let service = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout: 30000,
});
let lastUrl = '';
let queryData = '';
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        config.headers['Cache-Control'] = 'no-cache';
        let flag = false;
        if( queryData && config.data){
            flag = objectCompare(queryData,config.data);
        }
        let date = new Date();
        if(lastUrl === config.url && flag){
            while (new Date() - date < 200) {
                continue;
            }

        }
        lastUrl = config.url;
        queryData = config.data;

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        console.log(response);
        const res = response.data;
        let code = res.code;
        if (code != undefined) {
            if (Number(code) !== 0) {
                message.error(res.message);
            }
            return response.data;
        } else {
            message.error('系统异常，情稍后再试');
            return Promise.reject(res);
        }

    },
    error => {
        message.error(error.message);
        return Promise.reject(error);
    }
);

export default service
