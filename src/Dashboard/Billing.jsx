import React, { useState } from "react";
import Sidebar from './Sidebar';


function Billing() {
  return (
    <>
      <div className="dash">
      <Sidebar />
      <div className="dashcontent">
      <stripe-buy-button
  buy-button-id="buy_btn_1OnhI0IXvW0tWfSd4tGfa6Bm"
  publishable-key="pk_live_51MXTYFIXvW0tWfSd2Bwrg3rnVIrYUEkRtfrDnz6cRUQ4EzNz4aWyPEtCEVywsgawisU4FU1XJ9odI00JycbvMjlF0051rfVF95"
>
</stripe-buy-button>
      </div>
      </div>
    </>
  );
}

export default Billing;
