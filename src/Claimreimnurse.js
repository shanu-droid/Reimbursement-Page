import dropdown from './Dropdown.svg'
import callendar from './Callendar.svg'
import add from './Add.svg'
import close from './Close.svg'

const Claimreimnurse = () => {
    return (
        <div style={{height:"75vh", witdh:"80px", backgroundColor:"#E8E9EE", marginRight:"20px", marginTop:"30px", borderRadius:"15px", fontFamily:"DM Sans"}}>
           <h5 style={{paddingTop:"20px"}}>Claim Reimbursment</h5>
           
             <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
               Type of reimbursement
             </div>
             <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
             <div className="row">
             <div className="col-8" style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>Pick a type</div>
             <div className="col-4" style={{ textAlign:"right" ,height:"10px", width:"10px", paddingBottom:"20px"}}><img src={dropdown}/></div>
             </div>
             </div>
             <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
               Expense Date
             </div>
             <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
             <div className="row">
             <div className="col-8" style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>Pick a date</div>
             <div className="col-4" style={{ textAlign:"right" ,height:"10px", width:"10px", paddingBottom:"20px"}}><img src={callendar} style={{paddingBottom:"10px"}}/></div>
             </div>
             </div>
             <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
               Detail
             </div>
             <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
             <div style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>
              type in the details
             </div>
             </div>
             <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
               Amount 
             </div>
             <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
             <div style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>
             eg:8897
             </div>
             </div>
             <div className="row" style={{paddingTop:"20px"}}>
                 <div className="col-2" style={{height:"10px", width:"10px", textAlign:"right"}}><img src={add} style={{paddingBottom:"10px", marginLeft:"40px"}}/></div>
                 <div className="col-10" style={{color:"#FEA101", fontSize:"12px", textAlign:"left", paddingLeft:"20px"}}>Add new File</div>
             </div>
             <div style={{height:"40px", width:"250px" , backgroundColor:"#9898A5", marginTop:"10px", marginLeft:"40px", borderRadius:"5px"}}>
                  <div className="row">
                    <div className="col-8" style={{fontSize:"12px", paddingTop:"10px", textAlign:"left", paddingLeft:"30px"}}>Sam.pdf</div>
                    <div className="col-4" style={{height:"15px", width:"15px", textAlign:"center", paddingTop:"5px"}}><img src={close}/></div>
                  </div>
             </div>
             <div style={{height:"40px", width:"250px" , backgroundColor:"#9898A5", marginTop:"10px", marginLeft:"40px", borderRadius:"5px"}}>
                  <div className="row">
                    <div className="col-8" style={{fontSize:"12px", paddingTop:"10px", textAlign:"left", paddingLeft:"30px"}}>Sam.pdf</div>
                    <div className="col-4" style={{height:"15px", width:"15px", textAlign:"center", paddingTop:"5px"}}><img src={close}/></div>
                  </div>
             </div>
             <button style={{backgroundColor:"#40D2AC", borderRadius:"10px", color:"white", width:"300px", border:"#40D2AC", height:"35px", fontSize:"12px", marginTop:"20px"}}>Request Reimbursement</button>
             
        </div>
    )
}

export default Claimreimnurse
