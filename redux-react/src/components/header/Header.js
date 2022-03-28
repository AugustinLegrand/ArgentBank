import { connect } from "react-redux";
import { LogoutAuth } from "../../redux/actions/auth";

function Header(props) {

    const { auth, LogoutAuth } = props

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                className="main-nav-logo-image"
                src="./../argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
            {!auth.isLoggedIn ? (
                <a className="main-nav-item" href="/signin">
                <i className="fa fa-user-circle"></i>
                Sign In
                </a>
            ) : (
                <div>
                    <a href="/profile">Profile</a>
                    <button className="main-nav-item" onClick={() => LogoutAuth('/')}>
                    <i className="fa fa-user-circle"></i>
                        Logout
                    </button>
                </div>
            )}
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
}

export default connect(mapStateToProps, { LogoutAuth })(Header)