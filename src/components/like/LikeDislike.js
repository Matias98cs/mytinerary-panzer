import React, { useEffect, useState } from "react";
import "./LikesDislikes.css";
import { useLikeDislikeMutation } from "../../features/itineraryAPI";
import { useDispatch, useSelector } from "react-redux";
import { setReload } from "../../features/likeSlice";

function LikeDislike({ item }) {
  const [likeDislike] = useLikeDislikeMutation();
  const userId = useSelector(state => state.auth.userId)
  let likesCount = item.likes.length;
  const dispath = useDispatch()
  async function sendLike(e) {
    if (localStorage.getItem("token")) {
      try {
        let res = await likeDislike(item._id)
        if(res.data?.success){
            dispath(setReload(res.data.success))
        }else{
            dispath(setReload(res.data.success))
        }
      } catch(error) {
        console.log(error)
      }
    }
  }



  return (
    <div className="likes-dislikes">
      <p>
        <img onClick={sendLike} src={
            item.likes.includes(userId)
            ?
            "/images/heart-like.svg"
            :
            "/images/heart.svg"
        } />
        {likesCount}
      </p>
    </div>
  );
}

export default LikeDislike;
