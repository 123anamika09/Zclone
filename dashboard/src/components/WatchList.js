import React ,{useState} from "react";
import {Tooltip,Grow} from "@mui/material"; // tooltip for hover
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
const WatchList=()=>{
   return(
    <div className="watchlist-container">
      <div className="search-container">
        <input 
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy,bse,nifty but weekly, gold mcx "
        className="search" 
        />
        <span className="counts" >{watchlist.length}/50</span>
      </div>
      <ul className="list">
        {
          watchlist.map((stock,index)=>{
            return(
               <WatchlistItem stock={stock} key={index} />
            )  })
        }
      </ul>
    </div>
   )
}
export default  WatchList;

const WatchlistItem = ({stock})=>{
  const [showWatchListActions, setShowWatchListActions] = useState(false);
  const handleMouseEnter =(e)=>{
    setShowWatchListActions(true);
  }
  const handleMouseLeave =(e)=>{
    setShowWatchListActions(false);
  }
  return (
    <li onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="item">
      <p className={stock.isDown?"Down":"up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent"> {stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDownIcon className="down" />
        ) : (
          <KeyboardArrowUpIcon className="up" />
        )}

            <span className="price"> {stock.price}</span>
      </div>
    </div>
    {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
}
const WatchListActions = ({uid}) =>{// uid means uniqu id for each item for data -- kis unique id pr hme hover ko show krna h so we use uid
return(
  <span className="actions">
    <span>
      <Tooltip 
      title="Buy (B)"
      placement="top"
      arrow 
      TransitionComponent={Grow}>
        <button className="buy"> Buy</button>
      </Tooltip>
       <Tooltip 
      title="Sell (S)"
      placement="top"
      arrow 
      TransitionComponent={Grow}>
        <button className="sell"> Sell</button>
      </Tooltip>
        <Tooltip 
      title="Analytics (A)"
      placement="top"
      arrow 
      TransitionComponent={Grow}>
        <button className="chart">Analytics</button>
      </Tooltip>
         <Tooltip 
      title="More"
      placement="top"
      arrow 
      TransitionComponent={Grow}>
        <button className="btn">Analytics</button>
      </Tooltip>
    </span>


  </span>
)
}