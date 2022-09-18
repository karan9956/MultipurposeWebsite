import React from "react"
import MainData from "./MainData"
import "./slick-carousel/slick/slick.css"; 
import "./slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainContent() {
    const [f2pData, setf2pData] = React.useState([])
    React.useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": ""
	}
})
.then(res => res.json())
.then(data => setf2pData(data))
},[])  
    const cards = f2pData.map(item => {
        return(
          <MainData 
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        className: 'react__slick__slider__parent'
      };
    return (
        <main>
            <div className="MainContent">
                <h1 className="free"><u>Free To Play Games</u></h1>
            </div>
            <p className="total"><b>Total Games:{f2pData.length}</b></p>
            <section >
                <Slider {...settings}>
                    {cards}
                </Slider>
            </section>
            
        </main>
    );
}

