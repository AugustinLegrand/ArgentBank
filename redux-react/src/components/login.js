function Login() {


    function handleLogin() {
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

    return (
        <div>

        </div>
    )
}