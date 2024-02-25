import React, {useState} from "react";
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
    }, {
        type: 'GTX-4090',
        count: 3,
        region: 'Canada',
        status: "Inactive",
        price: 0.65,
        
    }])

    // const [personal, setPersonal] = useState([{
    //     VMs: "0/3",
    //     HRate: 0.47,
    //     StorageUsed: 133.26,
    // }])
    return  <>
                <Sidebar />
                
    
            <div className="gpu-container">
            <div className="gpu gpu-header">
                            <p>GPU</p>
                            <b>Price</b>
                            <p>Region</p>
                            <p>Status</p>
                            <p>Max Available</p>
                        </div>
                { availableServers.map(available => {
                    return (
                        <div className="gpu">
                            <p>{available.type}</p>
                            <b>{`$${available.price}/h`}</b>
                            <p>{available.region}</p>
                            <p>{available.status}</p>
                            <p>{`${available.count}`}</p>
                        </div>
                    );
                })}
            </div>

            <div class="grid-container">
            <div class="grid-item"></div>
            <div class="grid-item">Transactions</div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">Amount</div>
            <div class="grid-item">Type</div>
            <div class="grid-item">Deposit</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            </div> 
            <div className="personal-stats">
            <div className="personal">
                            <p>Active VMs: 0/3</p>
                            <b>Hourly Rate: $0.47</b>
                            <p>Storage Used: 133.26B</p>
                        </div>
                        {/* { personal.map(available => {
                    return (
                        <div className="personalpersonal">
                            <p>{personal.VMs}</p>
                            <p>{`$${personal.HRate}`}</p>
                            <p>{`${personal.StorageUsed}B`}</p>
                        </div>
                    );
                })} */}

                </div>

    </>
}

export default dashboard;