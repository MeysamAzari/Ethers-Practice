import React from "react";
import { useState } from "react";

const Buttons = () => {
  const [Page, setPage] = useState(0);

  if(Page == 0){
    return(
        <div className="buttons">
        <button onClick={() => setPage(1)}>Contracts</button>
        <button onClick={() => setPage(2)}>Math Lab</button>
        <button onClick={() => setPage(3)}>Ethers And Units</button>
        <button onClick={() => setPage(4)}>Messages And Transactions</button>
      </div>
    )
  }else if(Page == 1){
    return(
        <>
        <div className="page">
            <p>Contracts</p>
            <button onClick={()=>setPage(0)}>Return</button>
        </div>
        </>
    )
  }else if(Page == 2){
    return(
        <>
        <div className="page">
            <p>Math</p>
            <button onClick={()=>setPage(0)}>Return</button>
        </div>
        </>
    )
  }else if(Page == 3){
    return(
        <>
        <div className="page">
            <p>Ethers</p>
            <button onClick={()=>setPage(0)}>Return</button>
        </div>
        </>
    )
  }else if(Page == 4){
    return(
        <>
        <div className="page">
            <p>Message</p>
            <button onClick={()=>setPage(0)}>Return</button>
        </div>
        </>
    )
  }
};

export default Buttons;
