import React, { useEffect, useState } from "react";
import "../style/Carousel.css";
import Arrow from "./Arrow";

export default function Carousel(props) {
  const range = props.range
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
    }
  }

  function next() {
    if (end < photos.length) {
      setStart(start + range);
      setEnd(end + range);
    }
  }

  return (
    <>
      <div className="Carousel-title">
        <h1>{props.text}</h1>
      </div>
      <div className="Carousel-container">
        <Arrow icon={"./images/arrow-left.svg"} click={previus} />
        {photos.slice(start, end).map(cityAndName)}
        <Arrow icon={"./images/arrow-right.svg"} click={next} />
      </div>
    </>
  );
}
