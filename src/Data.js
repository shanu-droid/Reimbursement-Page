import pendingimg from './Pending.svg'
import rejectedimg from './Rejected.svg'
import acceptedimg from './Accept.svg'
import editimg from './Edit.svg'
import deleteimg from './Delete.svg'



export const mockdata= 
[
{
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Pending',
},
{
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '5', 
    status: 'Pending',
    },
    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Accepted',
    },

    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Accepted',
    },
    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Accepted',
    },
    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Accepted',

    },
    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Accepted',
    },
    {
    date: '23th Mar, 2020',
    requeston: '23th Mar, 2020',
    type: 'Accomadtion',
    reason: 'Company work',
    amount: '5000',
    attachment: '3', 
    status: 'Rejected',
    },

]


export const Header = () => {
    return (
        
        <div className="row" style={{ paddingTop:"40px", paddingBottom:"20px", marginLeft:"30px", marginRight:"20px", borderBottom:"1px solid #E8E9EE", color:"#9898A5"}}>
             <div className="col-1" style={{ fontSize:"12px", textAlign:"left"}}>Date</div>
             <div className="col-1" style={{ fontSize:"12px", textAlign:"left", paddingLeft:"22px"}}><div className="row">Requested on</div></div>
             <div className="col-1" style={{ fontSize:"12px", textAlign:"left"}}>Type</div>
             <div className="col-1" style={{ fontSize:"12px", textAlign:"left"}}>Reason</div>
             <div className="col-1" style={{ fontSize:"12px", textAlign:"left"}}>Amount</div>
             <div className="col-4" style={{ fontSize:"12px", textAlign:"left"}}>Attachment</div>
             <div className="col-3" style={{ fontSize:"12px", textAlign:"left", paddingLeft:"70px"}}>Status</div>
              
          </div>
    )
}

const Attachment = ({num}) => {
    return (
        <div className="row">
            <div style={{height:"20px", width:"20px", border:"1px solid #BCBDC8", borderRadius:"5px", fontSize:"9px", textAlign:"center", paddingTop:"2px"}}>
            #{num}
           </div> 
        </div>
    )
}

const Status = ({status}) => {
    return (
        <div className="row" style={{textAlign:"left"}}>
            <div className="col-8" style={{textAlign:"left"}}>
               {(status === "Pending") && 
               <div style={{width:"84px", backgroundColor:"#FFEBCD", height:"25px", fontSize:"10px", borderRadius:"5px", paddingTop:"5px", marginLeft:"36px"}}>
                <div className="row">
                    <div className="col-4" style={{textAlign:"right", paddingLeft:"20px", height:"8px", width:"8px"}}><img src={pendingimg}/></div>
                    <div className="col-8" style={{textAlign:"left", color:"#FEA101"}}>{status}</div>
                    
                </div>
               </div>
            }
            {
                (status === "Accepted") && 
               <div style={{width:"84px", backgroundColor:"#E0FFFF", height:"25px", fontSize:"10px", borderRadius:"5px",
               paddingTop:"5px", marginLeft:"36px"}}>
               <div className="row">
                    <div className="col-4" style={{textAlign:"right", paddingLeft:"20px", height:"8px", width:"8px"}}><img src={acceptedimg}/></div>
                    <div className="col-8" style={{textAlign:"left", color:"#40D2AC"}}>{status}</div>
                    
                </div>
               
               </div>
            }
            {
                (status === "Rejected") && 
                <div className="row" style={{marginRight:"10px"}}>
                    <div className="col-4">
                         <a style={{fontSize:"10px", color:"#405CD2"}}>Reason?</a>
                    </div>
                    <div className="col-8">
                    <div style={{width:"84px", backgroundColor:"#FFF1DE", height:"25px", fontSize:"10px", borderRadius:"5px",
                    paddingTop:"5px"}}>
                    <div className="row">
                    <div className="col-4" style={{textAlign:"right", paddingLeft:"20px", height:"8px", width:"8px"}}><img src={rejectedimg}/></div>
                    <div className="col-8" style={{textAlign:"left", color:"#F26B6B"}}>{status}</div>
                    
                    </div>
                    </div>
                    </div>
                </div>
               
            }
            </div>
            <div className="col-2">
                <img src={editimg} height="15px" width="15px"/>
            </div>
            <div className="col-2">
                <img src={deleteimg} height="15px" width="15px"/>
            </div>
        </div>
    )
}




export const Data = ({date, requeston, type, reason, amount, attachment, status}) => {
    return (

        <div className="row" style={{ paddingTop:"20px",  marginLeft:"42px", marginRight:"20px", borderBottom:"1px solid #E8E9EE"}}>
             <div className="col-1" style={{ fontSize:"10px", textAlign:"left", paddingRight:"15px", paddingBottom:"20px"}}><div className="row">{date}</div></div>
             <div className="col-1" style={{ fontSize:"10px", textAlign:"left", paddingRight:"15px", paddingLeft:"13px", paddingBottom:"20px"}}><div className="row">{requeston}</div></div>
             <div className="col-1" style={{ fontSize:"10px", textAlign:"left", paddingRight:"15px", paddingBottom:"20px"}}><div className="row">{type}</div></div>
             <div className="col-1" style={{ fontSize:"10px", textAlign:"left", paddingRight:"20px", paddingLeft:"20px", paddingBottom:"20px"}}><div className="row">{reason}</div></div>
             <div className="col-1" style={{ fontSize:"10px", textAlign:"left", paddingRight:"15px", paddingLeft:"20px", paddingBottom:"20px"}}><div className="row">{amount}</div></div>
             <div className="col-4" style={{ fontSize:"10px", textAlign:"left", paddingRight:"15px", paddingLeft:"35px"}}>
               {(attachment === "1") && 
               <div className="row">
               <div className="col-1">
                  <Attachment num = "1"/>
                </div></div> }
                {(attachment === "2") && 
                <div className="row">
               <div className="col-1">
                  <Attachment num = "1"/>
                </div>
                <div className="col-1">
                  <Attachment num = "2"/>
                </div>  
              </div>
                }
                {(attachment === "3") && 
                <div className="row">
                <div className="col-1">
                   <Attachment num = "1"/>
                 </div>
                 <div className="col-1">
                   <Attachment num = "2"/>
                 </div>
                 <div className="col-1">
                   <Attachment num = "3"/>
                 </div>
               </div>
                }
                {(attachment === "4") && 
                    <div className="row">
               <div className="col-1">
                  <Attachment num = "1"/>
                </div>
                <div className="col-1">
                  <Attachment num = "2"/>
                </div>
                <div className="col-1">
                  <Attachment num = "3"/>
                </div>
                <div className="col-1">
                  <Attachment num = "4"/>
                </div>
                
              </div>
                }
                {(attachment === "5") && 
                    <div className="row">
               <div className="col-1">
                  <Attachment num = "1"/>
                </div>
                <div className="col-1">
                  <Attachment num = "2"/>
                </div>
                <div className="col-1">
                  <Attachment num = "3"/>
                </div>
                <div className="col-1">
                  <Attachment num = "4"/>
                </div>
                <div className="col-1">
                  <Attachment num = "5"/>
                </div>
                
              </div>
                }
             </div>
             <div className="col-3" style={{  textAlign:"left"}}><Status status={status}/></div>
              
          </div>
    )
}