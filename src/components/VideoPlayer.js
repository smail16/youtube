import React from 'react'


const VideoPlayer = () => {
  return (
    <div className="video">
       <iframe width="90%" height="520" src="https://www.youtube.com/embed/pOAwQ0FkVz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPlayer