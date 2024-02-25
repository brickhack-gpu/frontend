import React from "react";
import { useState } from "react";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

function Spin() {
    return (
      <>
        <Sidebar />

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label className="contactLabel">Name:</label> */}
            <input className="contactInput"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          {/* <label className="contactLabel">Email:</label> */}
            <input className="contactInput"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="contactLabel">Message:</label> */}
            <input className="contactInput"
            type="message"
              value={message}
              placeholder="Enter message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        </>

      );
    }


export default Spin; 