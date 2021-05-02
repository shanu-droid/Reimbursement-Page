import React from 'react'
import ReactRoundedImage from "react-rounded-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import profimg from './profimg.jpg'
import './Reimbursepage.css'
import Container from './Container';
import Reimburse from './Reimbursementimg.svg'

const Reimbursepage = () => {
    return (
        <div className="main" style={{fontFamily:"DM Sans", background:"#E8E9EE" }}>
       <div className="row" >
                <div className="col-6" style={{textAlign:"left", paddingLeft:"80px", paddingTop:"40px"}}>
                <div className="row">
                    <div className="col-1" style={{height:"20px", width:"20px", paddingLeft:"30px"}}>
                        <img src={Reimburse}/>
                    </div>
                    <div className="col-10" style={{textAlign:"left"}}>
                      <h2>Reimbursment</h2>
                    </div>
                </div>
                </div>
                <div className="col-6" >
                <div className="row">
                   <div className="col-10">
                     <p style={{fontSize:"15px", color:"#9898A5", textAlign:"right", paddingTop:"50px"}}>Employee name</p>
                   </div>
                   <div className="col-2" style={{ paddingTop:"40px", textAlign:"right"}}>
                   <ReactRoundedImage image={profimg} roundedSize="0" imageWidth="40" imageHeight="40" />
                   </div>
                    
                </div>
             </div>
        </div>
        <Container/>
        </div>
       
    )
}

export default Reimbursepage
