import React from 'react'
import { useGetCommentsQuery } from "../features/commentsAPI"

function DisplayComments({ id }) {

    const { data: comments } = useGetCommentsQuery(id)
    console.log(comments?.response)
    let texto = comments?.response
    return (
        <div className='itinerary-comment-messages'>
            <h3>Comments !</h3>
            {texto?.map((item)=>
                <div className="itinerary-comment-users">
                    <div className="itinerary-profile">
                    <img src={item?.user.photo} width="50px"  alt=""/>                    
                    </div>
                    <div className= "itinerary-comment-user">
                        <p>{item?.user.name}</p>
                        <p>{item?.comment}</p>
                    </div>
                </div>
            )}
            <div className="comment-input-div">
                <input type="text" name="comment" id="comment-input" placeholder="Write your comment here!" />
                <svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 24 24" className="sendComment" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </div>
        </div>
    )
}

export default DisplayComments
