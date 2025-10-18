import React,{useState,useEffect}from "react";
//  useState to store that data
//  useEffect to connect to that api that comes from backend

//  now we have to fetch data from backend by using these 2 hooks - useState and useEffect


import axios from "axios";  // axios is a package which helps to connect with api
import "./Holdings.css"; 
// import { holdings } from "../data/data";   // dummy data not come from backend
const Holdings = () => {

  const [allHoldings,setAllholdings] = useState([]); //initial size is 0 

  useEffect(()=>{ // 1 hi baar call ho baar baar use na ho 
   axios.get("http://localhost:3002/allHoldings").then((res)=>{
    console.log(res.data);//just to see if data is coming or not 
    setAllholdings(res.data);
   })
  
  },[])
    return(
      <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table className="holdings-table">
          <thead>

          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>p&L</th>
            <th>Ner chg.</th>
            <th>Day Chg </th>
            
          </tr>
           </thead>
           <tbody>
          {/* dynamic data .... data read line by line  */}
          {allHoldings.map((stock,index)=>{
            const currValue = stock.price * stock.qty;
            const isProfit = currValue- stock.avg * stock.qty>=0.0;
            const profClass = isProfit?"Profit":"loss";

            const dayClass = stock.isLoss?"Loss":"Profit";

            return(
               <tr key={index} >
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currValue.toFixed(2)}</td>
            <td className={profClass}>{(currValue-stock.avg * stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}> {stock.day} </td>
            
          </tr>
            );
          })}
          </tbody>
        </table>
      </div>


      <div className="row">
        <div className="col">
          <h5>29,875. <span>55</span>{" "}</h5>
          <p>Total Investment</p>
        </div>
        <div className="col">
          <h5>31,428. <span>95</span>{" "}</h5>
          <p>Current Value</p>
        </div>
        <div className="col">
          <h5>1,553.40{+5.20}</h5>
          <p> P&L</p>
        </div>
      </div>
      </>
    )

};

export default Holdings;