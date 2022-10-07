import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'
import { TbBrandSpotify } from 'react-icons/tb'
import { usePopper } from 'react-popper'

export default function Playlist() {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top'
  })
  return (
    <div className='fixed bottom-4 left-4 '>
      <Popover className='relative'>
        {({ open }) => {
          return (
            <>
              <Popover.Button
                className='bg-coral-700 rounded-full p-3'
                ref={setReferenceElement}
              >
                <TbBrandSpotify className='text-coral-300' size={24} />
              </Popover.Button>

              <Transition
                show={open}
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Popover.Panel
                  className='absolute z-10 rounded-lg bg-black'
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div className='w-[300px] h-[380px]'>
                    <iframe
                      className='rounded-lg border-0'
                      src='https://open.spotify.com/embed/playlist/77chgKtqdLDxShcnizTusz?utm_source=generator&theme=0'
                      width='100%'
                      height='380'
                      allowFullScreen
                      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                      loading='lazy'
                    />
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )
        }}
      </Popover>
    </div>
  )
}
