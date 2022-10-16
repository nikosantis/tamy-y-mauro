import { BiBookHeart, BiHomeHeart } from 'react-icons/bi'

import { story } from 'lib/data'
import Dot from './dot'
import Rings from 'components/icons/rings'
import Couple from 'components/icons/couple'

export default function MobileStory() {
  return (
    <div className='container mx-auto flex flex-col px-4 md:hidden'>
      <div className='w-full flex'>
        <div className='w-12 flex justify-center'>
          <Dot />
        </div>
      </div>

      <div className='w-full flex'>
        <div className='flex relative w-12 justify-center items-center'>
          <div className='bg-lunar-100 w-1 h-full' />
          <div className='bg-lunar-100 w-12 h-12 rounded-full absolute flex justify-center items-center'>
            <span className='text-lunar-500 animate-pulse'>
              <BiBookHeart size={24} className='text-lunar-500 animate-pulse' />
            </span>
          </div>
        </div>

        <div className='flex-1 pl-8 py-10 flex flex-col'>
          <div className=' flex items-center mb-6'>
            <div className='h-[200px] w-full bg-lunar-700' />
          </div>

          <div className=''>
            <h3 className='font-brush text-3xl text-coral-700 mb-5'>
              {story[0].title}
            </h3>
            <h4 className='text-lunar-300 font-light text-sm mb-2'>
              {story[0].subtitle}
            </h4>
            <p className='font-light text-sm text-lunar-400'>
              {story[0].content}
              {story[0].extraContent && (
                <>
                  <br />
                  {story[0].extraContent}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full flex'>
        <div className='flex relative w-12 justify-center items-center'>
          <div className='bg-lunar-100 w-1 h-full' />
          <div className='bg-lunar-100 w-12 h-12 rounded-full absolute flex justify-center items-center'>
            <span className='text-lunar-500 animate-pulse'>
              <BiHomeHeart size={24} className='text-lunar-500 animate-pulse' />
            </span>
          </div>
        </div>

        <div className='flex-1 pl-8 py-10 flex flex-col'>
          <div className=' flex items-center mb-6'>
            <div className='h-[200px] w-full bg-lunar-700' />
          </div>

          <div className=''>
            <h3 className='font-brush text-3xl text-coral-700 mb-5'>
              {story[1].title}
            </h3>
            <h4 className='text-lunar-300 font-light text-sm mb-2'>
              {story[1].subtitle}
            </h4>
            <p className='font-light text-sm text-lunar-400'>
              {story[1].content}
              {story[1].extraContent && (
                <>
                  <br />
                  {story[1].extraContent}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full flex'>
        <div className='flex relative w-12 justify-center items-center'>
          <div className='bg-lunar-100 w-1 h-full' />
          <div className='bg-lunar-100 w-12 h-12 rounded-full absolute flex justify-center items-center'>
            <span className='text-lunar-500 animate-pulse'>
              <Rings size={24} className='text-lunar-500 animate-pulse' />
            </span>
          </div>
        </div>

        <div className='flex-1 pl-8 py-10 flex flex-col'>
          <div className=' flex items-center mb-6'>
            <div className='h-[200px] w-full bg-lunar-700' />
          </div>

          <div className=''>
            <h3 className='font-brush text-3xl text-coral-700 mb-5'>
              {story[2].title}
            </h3>
            <h4 className='text-lunar-300 font-light text-sm mb-2'>
              {story[2].subtitle}
            </h4>
            <p className='font-light text-sm text-lunar-400'>
              {story[2].content}
              {story[2].extraContent && (
                <>
                  <br />
                  {story[2].extraContent}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full flex'>
        <div className='flex relative w-12 justify-center items-center'>
          <div className='bg-lunar-100 w-1 h-full' />
          <div className='bg-lunar-100 w-12 h-12 rounded-full absolute flex justify-center items-center'>
            <span className='text-lunar-500 animate-pulse'>
              <Couple size={24} className='text-lunar-500 animate-pulse' />
            </span>
          </div>
        </div>

        <div className='flex-1 pl-8 py-10 flex flex-col'>
          <div className=' flex items-center mb-6'>
            <div className='h-[200px] w-full bg-lunar-700' />
          </div>

          <div className=''>
            <h3 className='font-brush text-3xl text-coral-700 mb-5'>
              {story[3].title}
            </h3>
            <h4 className='text-lunar-300 font-light text-sm mb-2'>
              {story[3].subtitle}
            </h4>
            <p className='font-light text-sm text-lunar-400'>
              {story[3].content}
              {story[3].extraContent && (
                <>
                  <br />
                  {story[3].extraContent}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full flex'>
        <div className='w-12 flex justify-center'>
          <Dot />
        </div>
      </div>
    </div>
  )
}
