import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux"
import { addToCart } from '../slices/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const ProductCards = ({ products }) => {

    const dispatch = useDispatch()

 const handleCartItems = async(product) => {
     dispatch(addToCart(product))
     setOpen(true);
     
 }

 const [open, setOpen] = React.useState(false);

 

 const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }

   setOpen(false);
 };

    
  return (
   <>
   <div className="flex flex-wrap gap-5 justify-center min-h-screen min-w-screen">
        {
           products.length <= 0 ?  <div className='m-auto'> <CircularProgress size={50} /></div>:products.map((product) => {
               return (
                    <Card   key={product.id} className='md:w-[250px] min-h-[300px] shadow-2xl text-start'>
                        <CardContent>
                            <img src={product.image} className='w-[100%] h-[200px] hover:cursor-pointer'  />  
                            <Typography sx={{ fontSize: 20 }} className='text-gray-800' >
                                <b className='text-gray-600 text-2xl'>{product.name}</b>
                            </Typography>
                            <Typography variant='h6' >
                                {product.title.length > 15 ? product.title.slice(0,16) + "..." : product.title}
                            </Typography>
                            <Typography className='font-sm' >
                                {product.description.length > 75 ? product.description.slice(0,76) + "..." : product.description }
                            </Typography>
                            <Typography className='font-sm' >
                               <b>Price:  $  <span className='text-gray-600'>{product.price }</span></b>
                            </Typography>
                           
                        </CardContent>
                        <CardActions className='mb-5'>
                            <Button variant="contained" size="small" className='w-full hover:cursor-pointer ' onClick={()=>{handleCartItems(product)}}>Add To Cart</Button>
                        </CardActions>
                    </Card>
                );
            })
        }

<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product is added to your cart!
        </Alert>
      </Snackbar>
        </div>
   </>

  );
}

export default ProductCards;
