import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useCreateCommentsMutation } from "../features/commentsAPI"


function NewComment({ id }) {
    const formRef = useRef()
    const userId = useSelector(state => state.auth.userId)
    const [addComment] = useCreateCommentsMutation()
    const handleWrite = e => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const values = Object.fromEntries(formData)
        const comment = {
            comment: values.comment,
            user: userId,
            itinerary: id
        }
        console.log(comment)
        sendComment(comment)
        
    }
    async function sendComment(data){
        try {
            let res = await addComment(data)
            if(res.data?.success){
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <form ref={formRef} onSubmit={handleWrite}>
            <input type="text" name="comment" id="comment-input" placeholder="Write your comment here!" />
            <button className="sendComment" type="submit"><svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg></button>
        </form>
    )
}

export default NewComment