import axios from "axios"
import { useState } from "react"
import { connect } from "react-redux"
import { LoginAuth, LogoutAuth } from "../../redux/actions/auth"

function Login(props) {

    const { auth, LoginAuth, LogoutAuth } = props

    const [loginState, setLoginState] = useState({})

    return (
        <div>
            {!auth.isLoggedIn ? (
                <button onClick={() => {
    
                    const email = "tony@stark.com"
                    const password = "password123"

                    LoginAuth({
                        email: email,
                        password: password
                    }, null, null)
                }}>Connecte</button>
            ) : (
                <button onClick={() => LogoutAuth()}>Deconnection</button>
            )}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      auth: state.authState
    }
  }

export default connect(mapStateToProps, { LoginAuth, LogoutAuth })(Login)