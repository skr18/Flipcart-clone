import { styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../Constants/data";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:200,
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:180,
  }
}))

const Banner = () =>{
    return(
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={ true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            slidesToSlide={1} >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="data" />
                ))
            }
        </Carousel>
    )
}

export default Banner;