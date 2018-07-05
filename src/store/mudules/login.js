import "whatwg-fetch";
import Api from "../api/http"

const state = {
    res: []
}

export const getSnsLogins = ({
    commit
}) => {

}
const actions = {
    login({
        commit
    }, userdata) {
        return new Promise((resolve, reject) => {
            Api.login(userdata).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    },
}

const mutations = {
    // [type.LOGIN_SUCCEED](state) {
    //     state.res = []
    // },
    // [type.LOGIN_FALSE](state, data) {
    //     state.res = data
    // }
}

export default {
    state,
    actions,
    mutations
}