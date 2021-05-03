import React from 'react'
import {Dialog, DialogContent, DialogTitle, Link} from '@material-ui/core'

const Rejectionmsg = (props) => {
    return (
        <Dialog open={props.openRejectMsg} style={{height:"102vh", width:"48vh", marginLeft:"80vh"}}>
        <DialogTitle>
        <h6 style={{fontWeight:"bold", fontSize:"15px", marginTop:"20px"}}>Rejection Reason</h6></DialogTitle>
         <DialogContent>
         <div style={{fontSize:"12px", color:"#9898A5"}}>The reimbursment was being regected due to invalid document that was provided by you please check again and upload a valid document.</div>
         <Link style={{color:"#FEA101", textAlign:"right", textDecoration:"none", fontSize:"12px", marginLeft:"150px", cursor:"pointer"}} onClick={() => props.SetRejectMsg(false)}>Close message</Link>
         </DialogContent>
        </Dialog>
    )
}

export default Rejectionmsg
