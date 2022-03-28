import { Navigate, useParams } from "react-router";
import { connect } from 'react-redux'
import { accounts } from "../profile/Accounts";

function Transaction(props) {

    const { id } = useParams()

    console.log("TRANSACTION ID : ", id);
    const account = accounts.filter(acc => acc.id === parseInt(id))[0]

    if (!account) return <Navigate to="/profile" replace={true} />

    return (
        <div className="Transactions">
            <div className="Transactions-header">
                <p className="account-type">{ account.type } (x{id})</p>
                <h2 className="account-balance">$ { account.balance }</h2>
                <p className="account-status">{ account.status }</p>
            </div>
            <div className="Transactions-content">
                <table>
                    <tr>
                        <th>DATE</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                        <th>BALANCE</th>
                    </tr>
                    <tr>
                        <td>June 20th, 2020</td>
                        <td>Golden Sun Bakery</td>
                        <td>$5.00</td>
                        <td>$2082.79</td>
                    </tr>
                    <tr>
                        <td>June 20th, 2020</td>
                        <td>Golden Sun Bakery</td>
                        <td>$5.00</td>
                        <td>$2082.79</td>
                    </tr>
                    <tr>
                        <td>June 20th, 2020</td>
                        <td>Golden Sun Bakery</td>
                        <td>$5.00</td>
                        <td>$2082.79</td>
                    </tr>
                    <tr>
                        <td>June 20th, 2020</td>
                        <td>Golden Sun Bakery</td>
                        <td>$5.00</td>
                        <td>$2082.79</td>
                    </tr>
                    <tr>
                        <td>June 20th, 2020</td>
                        <td>Golden Sun Bakery</td>
                        <td>$5.00</td>
                        <td>$2082.79</td>
                    </tr>
                </table>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
}

export default connect(mapStateToProps, {})(Transaction)