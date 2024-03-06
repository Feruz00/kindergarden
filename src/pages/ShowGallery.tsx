import React from 'react'
import { useGetOneGallery } from '../services/useGallery'
import Loader from '../ui/Loader'
import PDFViewer from '../ui/PDFViewer'

const ShowGallery = () => {
    const {isLoading, gallery} = useGetOneGallery()
    console.log(gallery)
  return (
    <div
        className='min-h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center'
 
    >
        <div className='w-[1500px] 2xl:w-full 2xl:px-5  flex justify-center items-center flex-1'>
            {
                isLoading ? <Loader />
                :<div>
                    <h1>{gallery.data.title}</h1>
                    <PDFViewer 
                        url={gallery.data.url}
                    />
                </div>
            }
        </div>
    </div>
  )
}

export default ShowGallery