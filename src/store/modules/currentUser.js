import axios from "axios";

const state = {
        user : {}
}

const getters = {};
const actions = {
    // eslint-disable-next-line no-empty-pattern
    loginGmailUser({} , user){
        axios.post('login_gmail',user).then( response => {
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',response.data[1].uemail);
        });
    },
    // eslint-disable-next-line no-empty-pattern
    loginFacebookUser({}, user){
        axios.post('login_facebook',user).then( response => {
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',response.data[1].uemail);
        });
    }
};
const mutations = {};

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}
