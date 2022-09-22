import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetCommentsQuery, useDeletCommentsMutation } from "../features/commentsAPI"
import NewComment from './NewComment'

function DisplayComments({ id }) {
    const formRef = useRef()
    const [open, setOpen] = useState(false)
    const [commentDelete] = useDeletCommentsMutation()
    const { data: comments } = useGetCommentsQuery(id)
    let texto = comments?.response
    const userId = useSelector(state => state.auth.userId)
    const showInput = () => {
        if (open === true) {
            setOpen(false);
        }else {
            setOpen(true);
        }
    }

    async function deleteComment(idComment) {

        try {
            let res = await commentDelete(idComment)
            if (res.data?.success) {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='itinerary-comment-messages'>
            <h3>Comments !</h3>
            {texto?.map((item) =>

                <div className="itinerary-comment-users">
                    <div className="itinerary-profile">
                        <img src={item?.user.photo} width="50px" alt="image" />
                    </div>
                    <div className="itinerary-comment-user">
                        <p>{item?.user.name}</p>
                        <p>{item?.comment}</p>
                    </div>
                    {
                        item?.user._id == userId
                            ?
                            <>
                                <button onClick={() => deleteComment(item?._id)} type="submit"><img src="https://cdn-icons-png.flaticon.com/512/484/484611.png" alt="image" width="15px"/></button>
                                <button onClick={showInput} type="submit"><img src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png" alt="image" width="20px"/>Edit</button>
                                {
                                    open 
                                    ?
                                    <form ref={formRef}>
                                        <input type="text" name="comment" defaultValue={item?.comment}/>
                                        <input type="" name=""/>
                                        <button>Save</button>
                                    </form>
                                    :
                                    null
                                }

                            </>
                            :
                            null
                    }
                </div>
            )}

            <div className="comment-input-div">
                <NewComment id={id} />
            </div>
        </div>
    )
}

export default DisplayComments
