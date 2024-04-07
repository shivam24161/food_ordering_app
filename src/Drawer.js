import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    bottom: false,
  });
 
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem><h1>Your Food Cart:</h1>
        </ListItem>
        {/* Adding items in drawer */}
        <table>
            <tbody> 
        {props.cartArray.map((text, index) => (
             <ListItem key={text} Padding>
              <tr style={{width: '100%'}}>
              <td style={{textAlign:"center", width: '25vw'}}><ListItemText><h4>{index + 1}</h4></ListItemText></td>
              <td style={{textAlign:"center", width: '25vw'}}><ListItemText><h4>{text.name}</h4></ListItemText></td>
              <td style={{textAlign:"center", width: '25vw'}}><ListItemText><h4>&#8377; {text.price}</h4></ListItemText></td>
              <td style={{textAlign:"center", width: '25vw'}}><ListItemButton onClick={props.del} id={text.id} style={{backgroundColor:"red" ,fontSize:"20px",marginLeft:"5%",marginRight:"5%",color:"white"}}>Delete</ListItemButton></td>
              </tr>
              </ListItem>
        ))}
        </tbody>
          </table>
        <ListItem Padding style={{paddingLeft:"10%"}}>
          <ListItemText><h4>Total Amount : &#8377;{props.subtotal}</h4></ListItemText>
          <ListItemButton><h4 style={{color:"#0275d8" , fontSize:"20px"}} onClick={props.checkout}>Checkout</h4></ListItemButton>
          </ListItem>
         
      </List>
    </Box>
  );

  return (
    <div id="footer">
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><h2><i className="fas fa-angle-double-up"></i></h2></Button>
          <Button onClick={toggleDrawer(anchor, true)}><h2>Your Orders( {props.cartArray.length} )</h2></Button>
          <Button onClick={toggleDrawer(anchor, true)}><h2>Subtotal: &#8377;{props.subtotal}</h2></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
