import { AuthActionType } from "./auth.types";
import authDataService from '../../services/auth.services'
import { decodeToken } from 'react-jwt'
import axios from 'axios'
import { useNavigate } from "react-router";

const LogoutAuth = (history) => {
    return async (dispatch) => {
        try {
        
            dispatch({
                type: AuthActionType.LOGOUT_SUCCESS
            })
            history.push('/')

        } catch (error) {
            if (error.response) {
                dispatch({
                    type: AuthActionType.LOGOUT_FAIL,
                    payload: error.response.data.message,
                })
            }
        }
    }
}

const LoginAuth = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const { data } = await authDataService.login(loginState)
            dispatch({
                type: AuthActionType.LOGIN_SUCCESS,
                payload: data.body.token
            })
            history.push('/profile')
        } catch (error) {
            
        }
    }
}

const EditProfile = (editState) => {
    return async (dispatch) => {

        try {
            const up = await authDataService.update(editState)
            console.log(up);
            dispatch({
                type: AuthActionType.EDIT_PROFILE_SUCCESS,
                payload: up.data
            })
        } catch (error) {
            
        }

    }
}

export {
    LogoutAuth,
    LoginAuth,
    EditProfile
}