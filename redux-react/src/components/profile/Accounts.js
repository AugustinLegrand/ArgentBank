import { useNavigate } from "react-router-dom"

export const accounts = [
    {
        id: 22550,
        type: 'Argent Bank checking',
        balance: 2082.79,
        status: "Available Balance"
    },
    {
        id: 27820,
        type: 'Argent Bank Savings',
        balance: 10928.42,
        status: "Available Balance"
    },
    {
        id: 13352,
        type: 'Argent Bank Credit Card',
        balance: 2082.79,
        status: "Available Balance"
    }
]

export const accountView = (id, type, balance, status) => (
    <div className={`account account-${id}`} key={id}>
        <div className="account-info">
            <p className="account-type">{ type } (x{id})</p>
            <h2 className="account-balance">$ { balance }</h2>
            <p className="account-status">{ status }</p>
        </div>
        <div className="account-options">
            <a href={"/transactions/"+id}>View transaction</a>
        </div>
    </div>
)
