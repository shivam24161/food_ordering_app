import React from "react";

import Button from '@mui/material/Button';

export default class Navbar extends React.Component{
    render(){
        return(
            <>  <div id="mainDiv">
                <div className="topnav">
                <Button variant="text" style={{color:"black",marginRight:"1%"}}>Break Your Fast</Button>
                <Button variant="text" style={{color:"black",marginRight:"1%"}}>Time for Lunch</Button>
                <Button variant="text" style={{color:"black",marginRight:"1%"}}>Can I have Snacks</Button>
                <Button variant="text" style={{color:"black",marginRight:"1%"}}>Dinner</Button>
                <Button variant="text" style={{color:"black",marginRight:"1%"}}>Burger and Beverages</Button>
                <Button variant="text" style={{color:"black"}}>More...</Button>
                </div>
                </div>
            </>
        )
    }
}
