import * as types from '../action-types';

export default {
    login(username,password){
        return {
            type:types.LOGIN_REQUEST,
            payload:{
                username,password
            }
        }
    },
    logout(){
        return {
            type:types.LOGOUT_REQUEST
        }
    },
    setToken(token){
        return {
            type:types.LOGIN_SESSION,
            payload:token
        }
    }
}
