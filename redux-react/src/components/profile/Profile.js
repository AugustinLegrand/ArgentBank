import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { EditProfile, LogoutAuth } from "../../redux/actions/auth";
import { accounts, accountView } from "./Accounts";

function Profile(props, history) {

    const { auth, EditProfile } = props
    const [editState, setEditState] = useState({})

    const navigate = useNavigate()


    return (
        <div className="profile">
            <div className="profile-edit">
                <h1>Welcome back</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    EditProfile(editState)
                    navigate('/signin', { replace: true })
                }}>
                    <div>
                        <input type="text" placeholder={auth.user.firstName} onChange={(e) => {
                            const firstName = e.target.value
                            setEditState({...editState, ...{firstName}})
                        }} />
                    </div>
                    <div>
                        <input type="text" placeholder={auth.user.lastName} onChange={(e) => {
                            const lastName = e.target.value
                            setEditState({...editState, ...{ lastName }})
                        }} />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
            <div className="profile-accounts">
                {
                    Object.values(accounts).map(account => {
                        return accountView(account.id, account.type, account.balance, account.status)
                    })
                }
            </div>
            
            
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
}

/*
<h1>Profile { auth.isLoggedIn && auth.user.email }</h1>
            <p>{ auth.isLoggedIn && auth.user.firstName } { auth.isLoggedIn && auth.user.lastName }</p>
            <button onClick={() => {
                EditProfile({
                    firstName: "Tony",
                    lastName: "Stark"
                })
                navigate("/profile", {
                    replace: false
                })
            }}>Edit profile</button>
*/

export default connect(mapStateToProps, { LogoutAuth, EditProfile })(Profile)