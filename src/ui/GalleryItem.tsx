import React from 'react'
import { useInView } from 'react-intersection-observer'
// import { Link } from 'react-router-dom'

interface Props{
    _id:string,
    picture:string,
    title:string
    design: string,
    url:string
}

const GalleryItem:React.FC<Props> = (i) => {
    const {ref, inView } = useInView({
        threshold: 0.5
    })
    const handleDownload = (fileUrl: string, fileName: string) => {
        fetch(`${process.env.SERVER}/${fileUrl}`)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
            })
            .catch(error => console.error('Error downloading file:', error));
    };
    return (
    <div
        ref={ref}
    className={`w-1/4 xl:w-1/2 shadow px-3 rounded-xl py-4 h-[30rem] flex flex-col items-center justify-center gap-5
    
        transition-all duration-500
        ${inView ? 'translate-x-0 translate-y-0 opacity-100': 'opacity-0 '+i.design}
    `} key={i._id}>
        <img src={`${process.env.SERVER}/${i.picture}`} className=' h-5/6 object-cover' crossOrigin='anonymous' alt={i.title} />
        <button onClick={()=>handleDownload(i.url, i.title)} className='px-16 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all duration-300'>Ýükle</button>

        {/* <Link to={i._id} className='px-16 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all duration-300'> Okamak </Link> */}
    </div>
  )
}

export default GalleryItem