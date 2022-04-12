
import { decodeToken } from "react-jwt";
import toastr from "toastr";
import httpCommon from "../../http-common";
import authServices from "../../services/auth.services";
import { AuthActionType } from "../actions/auth.types";

const initAuthState = {
    isLoggedIn: false,
    jwttoken: '',
    user: {
        email: "",
        firstName: "",
        lastName: "",
        expires_at: "",
        authorities: []
    }
}

let authState = {
    isLoggedIn: false,
    jwttoken: '',
    user: {
        email: "",
        firstName: "",
        lastName: "",
        expires_at: "",
        authorities: []
    }
}

/**
 * ! PROBLEM AUTHENFICATION : GET AUTH LOCAL STORAGE 
 */

/*
const getAuthState = () => {

    const auth = localStorage.getItem('auth')
    try {
        const authobj = decodeToken(auth)

        const newLoginAuthState = {
            isLoggedIn: true,
            jwttoken: auth,
            user: authobj
        }
        authState = newLoginAuthState
        axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${auth}`

        return authState
    } catch (error) {
        return initAuthState
    }
}*/

async function getProfileInfo(token) {
    return authServices.getProfile()
}

/**
 * @name AuthState
 * @description Système d'authentification
 * @author Augustin
 * @version 2.0.0
 */
let userUpdate = {}
const getAuthState = () => {

    const auth = localStorage.getItem("auth")

    if (auth) {
        
        httpCommon.defaults.headers.common['Authorization'] = `Bearer ${auth}`

        const newAuthState = {
            isLoggedIn: true,
            jwttoken: auth,
            user: userUpdate
        }
        authState = newAuthState

        return newAuthState
    }

    return initAuthState

}

const newAuth =  getAuthState()
console.log(newAuth);
const authReducer = (state = newAuth, action) => {
    switch (action.type) {
        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedIn: true,
                jwttoken: action.payload,
                user: decodeToken(action.payload)
            }

            authState = loginAuthState
            httpCommon.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`
            localStorage.setItem('auth', action.payload)
            toastr.success("Vous êtes connecté !", "Authentification", {
                closeButton: true,
                progressBar: true
            })
            return authState
        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem('auth')
            httpCommon.defaults.headers.common['Authorization'] = ``
            toastr.warning("Vous êtes deconnecté !", "Authentification", {
                closeButton: true,
                progressBar: true
            })
            return initAuthState;
    
        case AuthActionType.EDIT_PROFILE_SUCCESS:
        

            const newAuthState = {
                isLoggedIn: true,
                jwttoken: authState.jwttoken,
                user: action.payload.body
            }

            authState.user = newAuthState.user
            
            toastr.success("Votre profile a bien été modifié !", "Authentification", {
                closeButton: true,
                progressBar: true
            })
            return newAuthState
        
        default:
            return state;
    }
}

export default authReducer