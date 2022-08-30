import React, { useState } from "react"
import "./caurosal.css"
import Slider from "react-slick"
import axios from "axios"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import LandscapeCaurosal from "../RectangleCaurosal/landscapeCaurosal"

const Caurosal = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
    ],
  }

  const [poster, setPoster] = useState([])
  const [poster1, setPoster1] = useState([])
  const [poster2, setPoster2] = useState([])
  const [poster3, setPoster3] = useState([])

  useEffect(() => {
    const getPosterFromAPI = async () => {
      const getPosters = await axios.get("/movie/upcoming")
      setPoster(getPosters.data.results)
    }
    getPosterFromAPI()
  }, [])

  useEffect(() => {
    const getPosterFromAPI1 = async () => {
      const getPosters1 = await axios.get("/tv/airing_today")
      setPoster1(getPosters1.data.results)
    }
    getPosterFromAPI1()
  }, [])

  useEffect(() => {
    const getPosterFromAPI2 = async () => {
      const getPosters2 = await axios.get("/tv/top_rated")
      setPoster2(getPosters2.data.results)
    }
    getPosterFromAPI2()
  }, [])

  useEffect(() => {
    const getPosterFromAPI3 = async () => {
      const getPosters3 = await axios.get("/movie/popular")
      setPoster3(getPosters3.data.results)
    }
    getPosterFromAPI3()
  }, [])

  const imagesList = poster.map((eachImg) => {
    return (
      <div className="posterr">
        <img
          src={`https://image.tmdb.org/t/p/original${eachImg.poster_path}`}
          alt="Poster"
          className="poster"
        />
      </div>
    )
  })

  const imagesList1 = poster1.map((eachImg) => {
    return (
      <div className="posterr">
        <img
          src={`https://image.tmdb.org/t/p/original${eachImg.poster_path}`}
          alt="Poster"
          className="poster"
        />
      </div>
    )
  })

  const imagesList2 = poster2.map((eachImg) => {
    return (
      <div className="posterr">
        <img
          src={`https://image.tmdb.org/t/p/original${eachImg.poster_path}`}
          alt="Poster"
          className="poster"
        />
      </div>
    )
  })

  const imagesList3 = poster3.map((eachImg) => {
    return (
      <div className="posterr">
        <img
          src={`https://image.tmdb.org/t/p/original${eachImg.poster_path}`}
          alt="Poster"
          className="poster"
        />
      </div>
    )
  })

  return (
    <div>
      <div className="contentRooter">
        <h5 className="heading">Latest and Trending</h5>
        <Slider {...settings}>{imagesList}</Slider>
        <h5 className="heading">Popular Shows</h5>
        <Slider {...settings}>{imagesList1}</Slider>
        <LandscapeCaurosal />
        <h5 className="heading">Movies Recommended For You</h5>
        <Slider {...settings}>{imagesList3}</Slider>
        <h5 className="heading">Shows Recommended For You</h5>
        <Slider {...settings}>{imagesList2}</Slider>
        <LandscapeCaurosal />
        <h5 className="heading">Movies Recommended For You</h5>
        <Slider {...settings}>{imagesList3}</Slider>
        <h5 className="heading">Shows Recommended For You</h5>
        <Slider {...settings}>{imagesList2}</Slider>
      </div>
    </div>
  )
}

export default Caurosal
