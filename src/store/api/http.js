import "whatwg-fetch";
import URL from "../api/urlconig";
import router from '../../router/index'
import {
    Message
} from 'iview';
let fetchAPI = (type = "POST", body = {}, url = "") => {
    let options = {
        method: type,
        credentials: "include",
        body: body,
        cache: 'no-cache',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'uuid': sessionStorage.getItem('user_info') ? JSON.parse(sessionStorage.getItem('user_info')).info.id : {},
            'token': sessionStorage.getItem('user_info') ? JSON.parse(sessionStorage.getItem('user_info')).info.token : {}
        }
    };
    return fetch(url, options).then(function(res) {
        switch (res.status) {
            case 200:
                return res.json();
        }
    }).then(function(data) {
        if (data.code == 1) {
            Message.info('请重新登录！');
            router.push("/"); //session清除之后重新登录;
        } else if (data.code == 1) {
            Message.info('需要认证！');
        } else if (data.code == 2) {
            Message.error('请求参数错误！');
        } else if (data.code == 3) {
            Message.info('服务器内部错误！');
        } else if (data.code == 4) {
            Message.info('您没有权限进行此操作！');
        } else if (data.code == 5) {
            let mess = data.message;
            Message.error(mess);
        }
        return data;
    });
}
let urlencode = function(json_data) {
    let encode = "";
    for (let i in json_data) {
        let ce = i + "=" + json_data[i] + "&";
        encode += ce;
    }
    return encode;
}
class TravelServiceApi {
    //登录
    static login(payload) {
        let body = "user_name=" + payload.user_name + "&password=" + payload.password;
        return fetchAPI("POST", body, "api" + URL.login);
    }
}

export default TravelServiceApi;