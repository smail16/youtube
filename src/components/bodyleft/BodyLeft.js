import React from 'react'
import Comment from '../commentaires/Comment'
import Description from '../description/Description'
import VideoPlayer from '../VideoPlayer'
import './BodyLeft.css'
const commentaire =[
    {
      name : "ismail",
      comment : "very good"
    },
    {
      name : "yacine",
      comment : "very nice video"
    },
    {
      name : "rassem",
      comment : "don't like it"
    }
  ]
 
const BodyLeft = () => {
  return (
    <div className='bodyleft'>
                  <VideoPlayer/>
                  <Description/>
                  <Comment/>
                  {/* <h3>
                  GoMycode
                  </h3>
                  {commentaire.map(el=><div><h5>{el.name}</h5><p>{el.comment}</p></div>)} */}
    </div>
  )
}

export default BodyLeft