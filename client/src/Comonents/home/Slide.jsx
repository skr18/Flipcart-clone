import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component = styled(Box)`
  margin-top: 8px;
  background: #FFFFFF;
`
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex; 
  align-items: center;
`
const Timer = styled(Box)`
  display: flex;
  margin-left: 13px;
  align-items: center;
  color: #7f7f7f;
`
const DealText = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  margin-right: 5px;
  line-height: 12px;
`
const ViewallButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  font-size: 13px;
  font-weight: 600;
`
const Image = styled('img')({
  width:'auto',
  height: 150
})

const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;
`

const Slide = ({products,title,timer}) =>{
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const render = ({hours,minutes,seconds})=>{
    return <Box varient='span'>{hours} : {minutes} : {seconds} Left</Box>
  }
    return(
      <Component>
        <Deal>
          <DealText>{title}</DealText>
          {
            timer &&
              <Timer>
                <img src={timerURL} alt="time" style={{width:24,marginRight:8}}/>
                <Countdown date={Date.now() + 5.04e+7} renderer={render}/>
              </Timer>
          }
          <ViewallButton variant="contained">View All</ViewallButton>
        </Deal>
        <Divider/>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={ true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                products.map(product =>(
                  <Link to={`product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
                    <Box textAlign='center' style={{padding:'25px 15px'}} >
                      <Image src={product.url} alt="pro" />
                      <Text style={{fontWeight:600}}>{product.title.shortTitle}</Text>
                      <Text style={{color:'green'}}>{product.discount}</Text>
                      <Text style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</Text>
                    </Box>
                  </Link>
                ))
            }
        </Carousel>
      </Component>
    )

}

export default Slide;