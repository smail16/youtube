import React from 'react'
import './Description.css'

const Description = () => {
  return (
    <div className='description'>
        <div className='titre'>
            <h3> How to Build Responsive YouTube Clone using HTML & CSS - Beginners Tutorial | Part 1</h3>
        </div>
        <div className='barre1'>
            <div className='barre2'>
                <div className='logo'>
                <img src="logo.png" alt="Bienvenue"className='imglogo'/>
                </div>
                <div className='abonne'>
                    <h5 className='dhl'>
                    Future Coders
                    </h5>
                    <span className='nbreabonne'>
                    5,7 k abonnés
                    </span>
                </div>
                <div className='clik'>
                    s'abonner
                </div>

            </div>
            <div className='right'>
                <div className='nbrejaime mar'>
                    <div className='likes mar'>
                    <h5>
                    <i class="fa-solid fa-thumbs-up"></i>
                    55 
                    </h5>
                    </div>
                    <div className='dislikes mar'>
                     <h5>  
                    <i class="fa-solid fa-thumbs-down"></i>
                    10
                    </h5>
                    </div>
                    
                </div>
                <div className='partager'>
                    
                    
                    <h5>
                    <i class="fa-solid fa-share"></i>partage
                    </h5>
                    

                </div>
                <div className='point'>
                    <h5>...</h5>

                </div>

            </div>

        </div>
        <div className='para'>
            <p>
            6 436 vues  26 mars 2021  <span>#html #flexbox #css</span>
            <br></br>
Do you want to improve your <span>#html& #css </span>skills? Then Watch this video and follow along with me where we build <span>#responsive #youtubeclone</span> using just HTML & CSS. We will be using <span>#flexbox</span> and Google font Icons in this project.
            </p>
        </div>

    </div>
    
  )
}

export default Description