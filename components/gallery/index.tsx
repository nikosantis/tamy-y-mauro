import GalleryItem from './item'

import img1 from 'public/images/gallery/1.jpg'
import img2 from 'public/images/gallery/2.jpg'
import img3 from 'public/images/gallery/3.jpg'
import img4 from 'public/images/gallery/4.jpg'
import img5 from 'public/images/gallery/5.jpg'
import img6 from 'public/images/gallery/6.jpg'
import { useHeader } from 'components/header/context'

export default function Gallery() {
  const { galleryRef } = useHeader()
  return (
    <section
      className='w-full relative flex flex-col items-center bg-westar-200 py-24'
      ref={galleryRef}
    >
      <h2 className='font-brush text-5xl mb-12'>Nuestros Momentos</h2>
      <div className='block w-full'>
        <div className='mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-6 md:gap-y-6'>
          <GalleryItem src={img1} index={1} />
          <GalleryItem src={img2} index={2} />
          <GalleryItem src={img3} index={3} />
          <GalleryItem src={img4} index={4} />
          <GalleryItem src={img5} index={5} />
          <GalleryItem src={img6} index={6} />
        </div>
      </div>
    </section>
  )
}
