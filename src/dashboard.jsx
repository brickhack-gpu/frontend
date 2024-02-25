import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Dashboard/Sidebar";
import { Link } from "react-router-dom";
import { AuthGet } from "./API";

function dashboard() {
    const [servers, setServers] = useState([]);
    const [error, setError] = useState('');
    const [deposits, setDeposits] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [data, setData] = useState({
        active: 0,
        costs: 0,
        disk: 0,
    });
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        (async() => {
            try {
                const transactions = await AuthGet('/transactions');
                setDeposits(transactions.deposits);
                setPurchases(transactions.purchases);
                setData(await AuthGet('/data'));
                setServers((await AuthGet('/products')).products);
            } catch(e) {
                setError(e.toString());
            }
        })();
    }, [update]);

    return (
        <div className="dash">
            <Sidebar />
            <div className="dashcontent">
                { error ? <p className="error">{error}</p> : null }
                <div className="dashmain">
                <div className="stats">
                    <h1>{`Active VMs: ${data.active}/3`}</h1>
                    <p>{`Hourly Rate: $${data.costs}`}</p>
                    <p>{`Storage Used: ${data.disk} GB`}</p>
                </div>
                <div className="purchases">
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { purchases !== null ?
                            purchases.map(purchase => {
                                return (
                                    <tr key={purchase.id}>
                                        <th>{`$${purchase.amount}`}</th>
                                        <th>{purchase.createdAt}</th>
                                    </tr>
                                );
                            })
                            : null }
                        </tbody>
                    </table>
                </div>
                <div className="deposits">
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { deposits !== null ?
                            deposits.map(deposit => {
                                return (
                                    <tr key={deposit.id}>
                                        <th>{`$${deposit.amount}`}</th>
                                        <th>{deposit.createdAt}</th>
                                    </tr>
                                );
                            })
                            : null}
                        </tbody>
                    </table>
                </div>
                <div className="gpu-container">
                    <table>
                        <thead>
                            <tr className="gpu gpu-header">
                                <th>GPU</th>
                                <th>Price</th>
                                <th>Region</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { servers !== null ?
                            servers.map(server => {
                                return (
                                    <tr key={server.id} className="gpu">
                                        <th>{`${server.server_config.gpu_type} ${server.server_config.gpu_type}`}</th>
                                        <th>{`$${server.price}/h`}</th>
                                        <th>{server.server_config.region}</th>
                                        <th>{server.status}</th>
                                        <th><button onClick={() => { window.open(server.dns_link, '_blank') }}>Access</button></th>
                                    </tr>
                                );
                            })
                            : null }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;
