// import React from 'react'
import GalleryTypes from '../components/GalleryTypes'
import Galleries from '../components/Galleries'
// import  from '../components/Galleries'
const Gallery = () => {
  return (
    <div className='min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center font-nunito'>
        <GalleryTypes />
        <Galleries />
    
        
    </div>
  )
}

export default Gallery