import React from "react";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import { AuthGet } from "../API";

function Spin() {
    const [available, setAvailable] = useState([]);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);

    useEffect(() => {
      (async() => {
        try {
          setAvailable((await AuthGet('/search')).server_configs);
        } catch(e) {
          setError(e.toString());
        }
      })();
    }, []);

    return (
        <>
        <div className="dash">
          <Sidebar />
        <div className="dashcontent">
          { error ? <p className="error">{error}</p> : null }
            <table className="fw">
                <thead>
                    <tr className="gpu gpu-header">
                        <th>GPU</th>
                        <th>Region</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { available!== null ?
                    available.map(server => {
                        return (
                            <tr key={server.id} className={`gpu${!server.active ? ' disabled' : ''}`}>
                                <th>{`${server.gpu_type} ${server.gpu_type}`}</th>
                                <th>{`$${server.price}/h`}</th>
                                <th>{server.region}</th>
                                <th><button onClick={() => { setModal(true); setConfigId(server.id) }}>Deploy</button></th>
                            </tr>
                        );
                    })
                    : null }
                </tbody>
            </table>
            { modal ?
            <div className="modal_bg">
   '             <div className="bet_modal">
                    <span class="close" onclick="closeModal()">&times;</span>


                </div>
            </div>
            : null }
        </div>
        </div>
        </>
      );
    }


export default Spin;
