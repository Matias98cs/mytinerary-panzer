import React, { useEffect, useState } from "react";
import "../style/Carousel.css";
import Arrow from "./Carousel/Arrow";

export default function Carousel(props) {
  const range = props.range
  const limitSlides = (props.slides * range)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setIntervalId] = useState()
  const photos = props.data
  const time = props.interval * 1000

  const cityAndName = (item) => (
    <div className="Carousel-card">
      <img src={item.url} alt="photoCity" />
      <p>{item.title}</p>
    </div>
  );

  useEffect( () => {
    let id = setInterval( function () {
        next()
    }, time)

    setIntervalId(id)
    return () => clearInterval(intervalId)

  }, [start])

  function previus() {
    if (start >= range) {
      setStart(start - range);
      setEnd(end - range);
    }else {
      setStart(limitSlides - range)
      setEnd(limitSlides)
    }
    clearInterval(intervalId)
  }

  function next() {
    if (start < limitSlides - range) {
      setStart(start + range);
      setEnd(end + range);
    } else {
      setStart(0)
      setEnd(range)
    }
    clearInterval(intervalId)

  }

  return (
    <div className="Carousel-main">
      <div className="Carousel-title">
        <h1>{props.text}</h1>
      </div>
      <div className="Carousel-container">
        <Arrow icon={"./images/arrow-left.svg"} click={previus} />
        <div className="Carousel-photo">
        {photos.slice(start, end).map(cityAndName)}  
        </div>
        <Arrow icon={"./images/arrow-right.svg"} click={next} />
      </div>
    </div>
  );
}
