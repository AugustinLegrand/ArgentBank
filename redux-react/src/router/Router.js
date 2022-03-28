import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeComponents from "../components/home/Home";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Transaction from "../components/transactions/Transaction";

function Router(props) {

    const { auth } = props

    console.log("ROUTER AUTH : ",  auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomeComponents />} />
                
                <Route exact path='/profile' element={auth.isLoggedIn === true ? <Profile /> : <Navigate to="/signin" replace={true} />} />
                <Route exact path='/signin' element={auth.isLoggedIn === false ? <Login /> : <Navigate to="/profile" replace={true} />} />
                <Route exact path='/transactions/:id' element={auth.isLoggedIn === true ? <Transaction /> : <Navigate to="/signin" replace={true} /> } />
            </Routes>
        </BrowserRouter>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.authState,
        history: state
    }
}

export default connect(mapStateToProps, {})(Router)