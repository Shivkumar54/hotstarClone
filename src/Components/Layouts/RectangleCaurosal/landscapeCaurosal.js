import React from "react"
import Slider from "react-slick"
import axios from "axios"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landscape.css"
import { useState } from "react"
import { useEffect } from "react"

const LandscapeCaurosal = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
    ],
  }

  const [img, setImg] = useState([])
  const [img1, setImg1] = useState([])

  useEffect(() => {
    const requestImage = async () => {
      const imagefromAPI = await axios.get("/tv/popular")
      setImg(imagefromAPI.data.results)
    }
    requestImage()
  }, [])

  useEffect(() => {
    const requestImage1 = async () => {
      const imagefromAPI1 = await axios.get("/tv/airing_today")
      setImg1(imagefromAPI1.data.results)
    }
    requestImage1()
  }, [])

  const imglist = img.map((im) => {
    return (
      <div className="imagester">
        <img
          src={`https://image.tmdb.org/t/p/original${im.backdrop_path}`}
          alt="poster Error from API"
          className="contentfitter"
        />
      </div>
    )
  })

  const imglist1 = img1.map((im) => {
    return (
      <div className="imagester">
        <img
          src={`https://image.tmdb.org/t/p/original${im.backdrop_path}`}
          alt="poster Error from API"
          className="contentfitter"
        />
      </div>
    )
  })

  return (
    <div className="lanscape">
      <h4 className="heading">Trending Shows</h4>
      <Slider {...settings}> {imglist} </Slider>
      <h4 className="heading">Recent Shows</h4>
      <Slider {...settings}> {imglist1} </Slider>
    </div>
  )
}

export default LandscapeCaurosal
