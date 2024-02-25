import React from "react";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import { AuthGet } from "../API";

function Spin() {
    const [available, setAvailable] = useState([]);
    const [error, setError] = useState('');

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
          <Sidebar />
          { error ? <p className="error">{error}</p> : null }
          
        </>
      );
    }


export default Spin; 