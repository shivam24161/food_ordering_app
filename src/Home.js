import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import products from './Data'
import {Button} from '@mui/material';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap" , minHeight:'88vh'}}>
      {products.map((data)=>{
          return(
              <>
          <Card sx={{ display: 'flex',width:"300px" ,marginBottom:"15px" , maxHeight:'400px' ,}} id="card">
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{ flex: '1 0 auto'}}>
                <Typography component="div" variant="h5">
                  {data.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Rs. {data.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="contained" id={data.id} onClick={this.props.add}>Add to Cart</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={data.image}
              alt="Live from space album cover"
            />
          </Card>
              </>
          )
      })}
      </div>
      
    );
  }
}