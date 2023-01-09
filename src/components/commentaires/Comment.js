import React from 'react'
import './Comment.css'
const commentaire =[
    {id:1,
      name : "ismail",
      comment : "very good",
      image :"p.jpg",
      date :" il y 2 an"

    },
    {id:2,
        name : "yacine",
        comment : "very  bad",
        image :"y.png",
        date :" il y 2 an"
      
    },
    {id:3,
        name : "Dali",
        comment : "very nice ",
        image :"r.jpg",
        date :" il y 2 an"
      
    }
  ]
const Comment = () => {
  return (
    <>
    {commentaire.map(el=>
    
    <div className='commentaire' key={el.id}>
        <div className='logo'>
        <img src={el.image} alt="Bienvenue"className='imglogo'/>

        </div>
        <div className='barre'>
            <div className='nom'>
                <h5> {el.name}</h5>
                <h6 className='gris'>{el.date}</h6>

            </div>
            <div className='coments'>
                <h5>{el.comment}</h5>

            </div>
            <div className='likes'>
                <div className='like'>
                  <i class="fa-solid fa-thumbs-up" ></i>
                </div>
                <div className='dislike'>
                  <i class="fa-solid fa-thumbs-down"></i>
                </div> 
                <div className='repondre'>
                    <h6>répondre</h6>

                </div>

            </div>

        </div>

    </div>
    
    )}


    
    </>
  )
}

export default Comment