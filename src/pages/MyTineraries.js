import React from "react";
import { useParams } from "react-router-dom";
import MyTinerary from "../components/MyTinerary";

export default function MyTineraries() {


    return (
        <div className="MyTinerary-container">
            <MyTinerary />
        </div>
    )
}
