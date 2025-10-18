import React, {useState} from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({ // context is basically a multple item that share multiple context
    openBuyWindow: (uid)=>{}, //uid mtlb kis stock p hm click kre h
    closeBuyWindow: ()=>{}
});

export const GeneralContextProvider =(props)=>{
const [isBuyWindowOpen,setIsBuyWindowOpen] = useState(false);
const [selectedStockUID,setSelectedStockUID] =useState("");
   
   const handleOpenBuyWindow =(uid)=>{
         setIsBuyWindowOpen(true);
         setSelectedStockUID(uid);
   };

   const handleCloseBuyWindow=(uid)=>{
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
   };

   return(
    <GeneralContext.Provider
    value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow : handleCloseBuyWindow,
    }}
    >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
    </GeneralContext.Provider>
   );
};


export default GeneralContext;