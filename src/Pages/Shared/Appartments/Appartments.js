import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router';


const Appartments = ({ data , children}) => {
    console.log(data)

    const history = useHistory()

    const { name, area, img, location, price, description } = data;
    return (
        <Card >
            <CardMedia
                component="img"
                height="240"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Typography variant="body2" color="text.secondary">
                {location}
            </Typography>

         

            <div style={{display:'flex', alignItems:'center' , justifyContent:'space-around'}}>

                <Typography variant="p" color="text.secondary">
                    worth:${price}M USD
                </Typography>

                <Typography variant="p" color="text.secondary">
                    worth:${area}Sqft
                </Typography>


            </div>






            <CardActions>
                {/* <Button onClick={()=> history.push(`/order/${data._id}`)} variant='contained'>Buy Now!</Button> */}
                {children}

            </CardActions>
        </Card>
    );
};

export default Appartments;