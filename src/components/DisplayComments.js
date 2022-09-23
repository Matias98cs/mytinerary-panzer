import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCommentsQuery,
  useDeletCommentsMutation,
  useCommentsAllMutation
} from "../features/commentsAPI";
import { setReload } from "../features/likeSlice";
import NewComment from "./NewComment";
import PatchComment from "./patchCommnet/PatchComment";
import '../style/Itinerary.css'


function DisplayComments({ id }) {
  const [open, setOpen] = useState(false);
  const [commentDelete] = useDeletCommentsMutation();
  const [findComments] = useCommentsAllMutation()
  const reload = useSelector((state) => state.like.reload);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const logged = useSelector((state) => state.auth.logged);
  const [comments, setCommenst] = useState([])

  const handleChangeComments = async() => {
    try {
        let res = await findComments(id)
        if(res?.data.success){
            setCommenst(res?.data.response)

        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    handleChangeComments()
  }, [reload])

  const showInput = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  async function deleteComment(idComment) {
    try {
      let res = await commentDelete(idComment);
      if (res.data?.success) {
        console.log(res.data);
        dispatch(setReload());
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="itinerary-comment-messages">
      <h3>Comments !</h3>
      {comments?.map((item) => (
        <div className="itinerary-comment-users" key={item?._id}>
          <div className="itinerary-profile">
            <img src={item?.user.photo && item.user.photo} width="50px" alt="image" />
          </div>
          <div className="itinerary-comment-user">
            <p>{item?.user.name}</p>
            <p>{item?.comment}</p>
          </div>
          {logged ? (
            item?.user._id == userId ? (
              <div className="itinerary-comments-btns">
                <button onClick={() => deleteComment(item?._id)} type="submit">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
                    alt="image"
                    width="15px"
                  />
                </button>
                <button onClick={showInput} type="submit">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
                    alt="image"
                    width="20px"
                  />
                  Edit
                </button>
                {open ? (
                  <PatchComment 
                    idComent={item?._id} 
                    comment={item?.comment} 
                    idItinerary={id}
                    />
                ) : null}
              </div>
            ) : null
          ) : null}
        </div>
      ))}

      <div className="comment-input-div">
        <NewComment id={id} />
      </div>
    </div>
  );
}

export default DisplayComments;
