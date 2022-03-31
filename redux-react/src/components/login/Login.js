import { useState } from "react";
import { connect } from "react-redux";
import { LoginAuth } from "../../redux/actions/auth";

function Login(props) {

    const { auth, LoginAuth } = props

    const [loginState, setLoginState] = useState({})

    return (
        <div className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In {auth.isLoggedIn ? "[Connected]" : "[No connected]"}</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const email = "tony@stark.com"
                    const password = "password123"
                    LoginAuth(loginState, null, null)
                }}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" onChange={(event) => {
                    const email = event.target.value;
                    setLoginState({ ...loginState, ...{ email } });
                  }} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({ ...loginState, ...{ password } });
                  }} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label>
                </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
}

export default connect(mapStateToProps, { LoginAuth })(Login)