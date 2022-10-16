import { BiBookHeart, BiHomeHeart } from 'react-icons/bi'
import { StaticImageData } from 'next/future/image'

import { story } from 'lib/data'
import Time from './time'
import Dot from './dot'
import Rings from 'components/icons/rings'
import Couple from 'components/icons/couple'

import img1 from 'public/images/gallery/3.jpg'
import img2 from 'public/images/gallery/5.jpg'
import img3 from 'public/images/footer.jpg'
import img4 from 'public/images/gallery/6.jpg'

const icons: Record<number, JSX.Element> = {
  1: <BiBookHeart size={24} className='text-lunar-500 animate-pulse' />,
  2: <BiHomeHeart size={24} className='text-lunar-500 animate-pulse' />,
  3: <Rings className='text-lunar-500 animate-pulse' />,
  4: <Couple size={24} className='text-lunar-500 animate-pulse' />
}
const directions: Record<number, 'left' | 'right'> = {
  1: 'left',
  2: 'right',
  3: 'left',
  4: 'right'
}

const images: Record<number, StaticImageData> = {
  1: img1,
  2: img2,
  3: img3,
  4: img4
}

export default function DesktopStory() {
  return (
    <div className='container mx-auto hidden md:flex flex-col'>
      {story.map(item => {
        return (
          <div key={item.id} className='w-full'>
            <Dot />
            <Time
              icon={icons[item.id]}
              direction={directions[item.id]}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              extraContent={item.extraContent}
              src={images[item.id]}
            />
          </div>
        )
      })}
      <Dot />
    </div>
  )
}
