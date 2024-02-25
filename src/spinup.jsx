import React, {useState} from "react";
import "./App.css";
import Navbar from "./Navbar";

function spinup() {
    const [availableServers, setAvailableServers] = useState([{
        type: 'GTX-3600',
        count: 5,
        region: 'United States',
        price: 0.22,
    }, {
        type: 'GTX-4090',
        count: 3,
        region: 'Canada',
        price: 0.65,
        
    }])
    return ( <>
            <Navbar />
            <div className="Spinup-title"></div>
    
            <div className="gpu-container">
                { availableServers.map(available => {
                    return (
                        <div className="gpu">
                            <p>{available.type}</p>
                            <b>{`$${available.price}/h`}</b>
                            <p>{available.region}</p>
                            <p>{`${available.count}available`}</p>
                        </div>
                    );
                })}
            </div>
    </> 
    )

} 
export default spinup;