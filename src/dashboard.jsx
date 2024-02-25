import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Dashboard/Sidebar";
import { Link } from "react-router-dom";

function dashboard() {
    const [availableServers, setAvailableServers] = useState([{
        type: 'GTX-3600',
        count: 5,
        region: 'United States',
        status: "Active",
        price: 0.22,
        id: 1,
    }, {
        type: 'GTX-4090',
        count: 3,
        region: 'Canada',
        status: "Inactive",
        price: 0.65,
        id: 2,
    }])

    return (
        <div className="dash">
            <Sidebar />
            <div className="dashcontent">
                <div className="dashmain">
                <div className="stats">
                    <h1>Active VMs: 0/3</h1>
                    <p>Hourly Rate: $0.47</p>
                    <p>Storage Used: 1336B</p>
                </div>
                <div className="transactions">
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
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
                                <th>Max Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availableServers.map(available => {
                                return (
                                    <tr key={available.id} className="gpu">
                                        <th>{available.type}</th>
                                        <th>{`$${available.price}/h`}</th>
                                        <th>{available.region}</th>
                                        <th>{available.status}</th>
                                        <th>{`${available.count}`}</th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;
