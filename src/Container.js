import React, { useState } from 'react'
import Claimreimnurse from './Claimreimnurse'
import {mockdata, Header, Data} from './Data'




const Container = () => {
    
 

    return (
        <div clasName="row" style={{background:"white", width:"200vh", height:"83%", marginLeft:"70px", borderRadius:"20px", fontFamily:"DM Sans"}}>  
           <div className="row">
           <div className="col-9">
           <div style={{textAlign:"left", paddingTop:"40px", paddingLeft:"40px"}}>
               <h4>Reimbursments Data</h4>
           </div>
           <Header/>
           <div>
           {mockdata.map((data) => {
               return (
                 <Data date={data.date} requeston={data.requeston} type={data.type} reason={data.reason} amount={data.amount} attachment={data.attachment} status={data.status}/>
               )
             
           })}
           </div> 
         
        </div>
        <div className="col-3" >
           <Claimreimnurse/>
        </div>

           </div>
        
           
        </div>
     
        
    )
}

export default Container
