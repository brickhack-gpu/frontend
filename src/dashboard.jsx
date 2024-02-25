import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Dashboard/Sidebar";
import { Link } from "react-router-dom";
import { AuthGet, AuthPost } from "./API";

function dashboard() {
    const [servers, setServers] = useState([]);
    const [error, setError] = useState('');
    const [deposits, setDeposits] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [data, setData] = useState({
        active: 0,
        costs: 0,
        disk: 0,
        balance: 0,
    });
    const [update, setUpdate] = useState(0);

    async function destroy(gcp) {
        try {
            await AuthPost('/servers/destroy', {
                gcp_id: gcp,
            });
        } catch(e) {
            setError(e.toString());
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
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
        }, 2500);
        return () => clearInterval(interval);
    }, [update]);

    return (
        <div className="dash">
            <Sidebar />
            <div className="dashcontent">
                { error ? <p className="error">{error}</p> : null }
                <div className="dashmain">
                <div className="stats">
                    <h1>{`Active VMs: ${data.active}/1`}</h1>
                    <p>{`Hourly Rate: $${data.costs}`}</p>
                    <p>{`Storage Used: ${data.disk} GB`}</p>
                    <p>{`Balance: $${data.balance.toFixed(2)}`}</p>
                </div>
                <div className="purchases">
                    <h1>Charges</h1>
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
                    <h1>Deposits</h1>
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
                                        <th>{`$${deposit.amount.toFixed(2)}`}</th>
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
                                    <tr key={server.id} className={`gpu${server.status == 'destroyed' ? ' disabled' : ''}`}>
                                        <th>{`${server.ServerConfig.gpu_count} ${server.ServerConfig.gpu_type}`}</th>
                                        <th>{`$${server.price}/h`}</th>
                                        <th>{server.ServerConfig.region}</th>
                                        <th>{server.status}</th>
                                        <th className="inbtn">
                                            <button className="danger-button" onClick={() => { destroy(server.gcp_id) }}>Destroy</button>
                                            <button disabled={server.status != 'active'} className={`login1-button${server.status != 'active' ? ' disabled' : ''}`} onClick={() => { window.open(server.dns_link, '_blank') }}>Access</button>
                                        </th>
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
