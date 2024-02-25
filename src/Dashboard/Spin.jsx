import React from "react";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import { AuthGet, AuthPost } from "../API";
import sd from '../../public/sd.webp';
import pytorch from '../../public/pytorch.png';
import tensorflow from '../../public/tensorflow.png';
import juypter from '../../public/juypter.jpg';

function Spin() {
    const [available, setAvailable] = useState([]);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);
    const [storage, setStorage] = useState(100);

    async function deploy() {
        try {
            await AuthPost('/servers/start', {
                template_id: 1,
                server_config_id: 1,
                storage: parseInt(storage),
            });

            window.location.href='/dashboard';
        } catch(e) {
            setError(e.toString());
        }
    }

    useEffect(() => {
        (async () => {
            try {
                setAvailable((await AuthGet('/search')).server_configs);
            } catch (e) {
                setError(e.toString());
            }
        })();
    }, []);

    return (
        <>
            <div className="dash">
                <Sidebar />
                <div className="dashcontent">
                    {error ? <p className="error">{error}</p> : null}
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
                            <tr className="gpu">
                                <th>1x Nvidia L4</th>
                                <th>$0.47/h</th>
                                <th>US-CENTRAL-IOWA</th>
                                <th class='slid'><span>{`${storage} GB`}</span><input defaultValue={storage} type="range" min="100" max="256" onChange={e => { setStorage(e.target.value) }} /><button className="login1-button" onClick={() => { setModal(true); }}>Deploy</button></th>
                            </tr>
                            <tr className="gpu disabled">
                                <th>1x Nvidia 3090</th>
                                <th>$0.21/h</th>
                                <th>ASIA-SOUTHEAST</th>
                                <th class='slid'><span>{`${storage} GB`}</span><input defaultValue={storage} type="range" min="100" max="256" onChange={e => { setStorage(e.target.value) }} /><button className="login1-button" onClick={() => { setModal(true); }}>Deploy</button></th>
                            </tr>
                            <tr className="gpu disabled">
                                <th>2x Nvidia Tesla P100</th>
                                <th>$0.95/h</th>
                                <th>US-CENTRAL-IOWA</th>
                                <th class='slid'><span>{`${storage} GB`}</span><input defaultValue={storage} type="range" min="100" max="256" onChange={e => { setStorage(e.target.value) }} /><button className="login1-button" onClick={() => { setModal(true); }}>Deploy</button></th>
                            </tr>
                            <tr className="gpu disabled">
                                <th>1x Nvidia A100</th>
                                <th>$5.32/h</th>
                                <th>US-CENTRAL-IOWA</th>
                                <th class='slid'><span>{`${storage} GB`}</span><input defaultValue={storage} type="range" min="100" max="256" onChange={e => { setStorage(e.target.value) }} /><button className="login1-button" onClick={() => { setModal(true); }}>Deploy</button></th>
                            </tr>
                            <tr className="gpu disabled">
                                <th>1x Nvidia T4</th>
                                <th>$0.55/h</th>
                                <th>US-WEST-OREGON</th>
                                <th class='slid'><span>{`${storage} GB`}</span><input defaultValue={storage} type="range" min="100" max="256" onChange={e => { setStorage(e.target.value) }} /><button className="login1-button" onClick={() => { setModal(true); }}>Deploy</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {modal ?
                <div className="modal_bg">
                    '             <div className="bet_modal">
                        <span class="close" onClick={() => { setModal(false) }}>&times;</span>
                        <div onClick={deploy} className="kokinda">
                            <div>
                            <h1>Stable Diffusion</h1>
                            <p>This lightning fast model, developed by StabilityLabs and based on SDXL, is capable of generating image-based results as fast as you can type. </p>
                            </div>
                            <img src={sd} />
                        </div>
                        <div className="kokinda disabled">
                            <div>
                            <h1>Juypter Notebook</h1>
                            <p>JupyterLab is the latest web-based interactive development environment for notebooks, code, and data. Its flexible interface allows users to configure and arrange workflows in data science, scientific computing, computational journalism, and machine learning. A modular design invites extensions to expand and enrich functionality.</p>
                </div>
                            <img src={juypter} />
                        </div>
                        <div className="kokinda disabled">
                            <div>
                            <h1>PyTorch</h1>
                            <p>Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.</p>
                </div>
                            <img src={pytorch} />
                        </div>
                        <div className="kokinda disabled">
                            <div>
                            <h1>Tensorflow</h1>
                            <p>Create production-grade machine learning models with TensorFlow</p>
                </div>
                            <img src={tensorflow} />
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
}


export default Spin;
