import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import axios from "axios"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./home.css"
import Caurosal from "../../Layouts/Caurosals/caurosal"

const settings = {
  arrows: true,
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "70px",
}

const Home = () => {
  const [heroImage, SetHeroImage] = useState([""])

  useEffect(() => {
    const requestHeroImages = async () => {
      const requestSliderImages = await axios.get("/movie/popular")
      SetHeroImage(requestSliderImages.data.results)
    }
    requestHeroImages()
  }, [])

  return (
    <div>
      <div className="sliderRoot mx-auto">
        <Slider {...settings}>
          {heroImage.map((image) => {
            return (
              <div className="contentHolder" key={image.id}>
                <div className="heroImage mx-auto">
                  <img
                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                    alt=""
                    className="heroImag"
                  />
                  <div className="content">
                    <div className="innerContent">
                      <h3>{image.title} </h3>
                      <p>{image.release_date}</p>
                      <p className="para">{image.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <Caurosal />
      
    </div>
  )
}

export default Home
