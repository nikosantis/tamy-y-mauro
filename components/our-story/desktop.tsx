import { BiBookHeart, BiHomeHeart } from 'react-icons/bi'

import { story } from 'lib/data'
import Time from './time'
import Dot from './dot'
import Rings from 'components/icons/rings'
import Couple from 'components/icons/couple'

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
            />
          </div>
        )
      })}
      <Dot />
    </div>
  )
}
