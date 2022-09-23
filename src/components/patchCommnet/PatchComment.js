import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateCommentsMutation } from '../../features/commentsAPI';
import { setReload } from '../../features/likeSlice';

function PatchComment({idComent, comment, idItinerary }) {

    const userId = useSelector(state => state.auth.userId)
    const  fromRef = useRef()
    const [patchComment] = useUpdateCommentsMutation()
    const reload = useSelector(state => state.like.reload)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(fromRef.current)
        const values = Object.fromEntries(formData)
        const objComment = {
            comment: values.comment,
            id: idComent
        }
        console.log(objComment)
        sendPatchComment(objComment)
    }

    async function sendPatchComment(data){
        try {
            let res = await patchComment(data)
            if(res.data?.success){
                console.log(res.data)
                dispatch(setReload())
            }else{
                console.log(res.error.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form className='form-edit-comment' onSubmit={handleSubmit} ref={fromRef}>
        <input type="text" name='comment' defaultValue={comment}/>
        <button type='submit' >Save</button>
    </form>
  )
}

export default PatchComment