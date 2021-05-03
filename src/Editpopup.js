import React from 'react'
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core'
import close from './Close.svg'
import dropdown from './Dropdown.svg'


const Editpopup = (props) => {
    
    return (
        <Dialog open={props.openPopup}>
          <DialogTitle>
          <div className="row" style={{fontFamily:"DM Sans"}}>
          <div className="col-10">
          <h6 style={{fontSize:"15px", fontWeight:"bolder", paddingTop:"20px", paddingLeft:"20px"}}>Edit Reimbursement data</h6>
          </div>
           <div className="col-2" style={{ border:"1px solid #9898A5", borderRadius:"5px", height:"35px", textAlign:"left", cursor:"pointer"}}>
             <img src={close} onClick={() => props.SetOpenPopup(false)} style={{height:"25px", width:"25px"}}/>
           </div>
          </div>
        
          </DialogTitle>
          <DialogContent>
          <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
          Expense Date (dd/mm/yyyy)
        </div>
          <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
          <div style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>
          12/03/2020
          </div>
        </div>

        <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
        Type
      </div>
        <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
        
        <div className="row">
        <div className="col-8" style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>Wild flower</div>
        <div className="col-4" style={{ textAlign:"right" ,height:"10px", width:"10px", paddingBottom:"20px"}}><img src={dropdown}/></div>
      </div>
      </div>

      <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
      Details
    </div>
      <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
      <div style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>
       There are some details
      </div>
      
      </div>

      <div style={{fontSize:"12px", textAlign:"left", marginLeft:"40px", marginRight:"40px", marginTop:"20px", color:"#9898A5"}}>
          Amount
        </div>
          <div style={{borderBottom:"1px solid #BCBDC8", marginLeft:"40px", marginRight:"40px", marginTop:"10px"}}>
          <div style={{ textAlign:"left", fontSize:"12px", fontWeight:"bolder"}}>
          5000
          </div>
        </div>

        <div style={{textAlign:"right", paddingTop:"20px", paddingBottom:"20px"}}>
           <button style={{backgroundColor:"#40D2AC", height:"30px", width:"95px", borderRadius:"10px", border:"#40D2AC", fontSize:"12px", color:"white"}}>Save</button>
        </div>



          </DialogContent>
        </Dialog>
    )
}

export default Editpopup
