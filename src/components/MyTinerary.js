import React from "react";
import { useGetAllUsersQuery } from "../features/myTineraryAPI";
import '../style/MyTinerary.css';

const MyTinerary = ({ id }) => {
    console.log(id)
    const { data: user } = useGetAllUsersQuery(id)

    let userDetail = user?.response
    console.log(user)

    const showItinerary = (item) => {
        console.log(item)

        return (
            <div className="mytinerary-description" key={item._id}>
                <div className="mytinerary-content">
                        <h3>{item.name}</h3>
                    <img src={item.city.photo} alt="photo" />
                    <div className="mytinerary-country">
                        <h3>{item.city.country}</h3>
                        <p>{item.city.city}</p>
                    </div>
                    <div className="mytinerary-duration">
                        <p>Duration: {item.duration} hours</p>
                        <p>Price: ${item.price}</p>
                        <p>Likes: {item.likes}</p>
                        <p>{item.tags}</p>
                    </div>
                </div>
            </div>
        )

    }
    return (
        <>
            <div className="mytinerary-container">
                <h1>My Tineraries</h1>
                    <img className="mytinerary-img" src={userDetail?.[0].user.photo} alt="photo" />
                <div clasName="mytinerary-user">
                    <div className="mytinerary-profile">
                        <h3>{userDetail?.[0].user.name}</h3>
                        <h3>{userDetail?.[0].user.mail}</h3>
                    </div>
                </div>
            </div>
            <div className="mytinerary-general">
                {userDetail?.map(showItinerary)}
            </div>
        </>
    )
}

export default MyTinerary