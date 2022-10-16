import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { StaticImageData } from 'next/future/image'
import cx from 'clsx'

import img1 from 'public/images/gallery/1.jpg'
import img2 from 'public/images/gallery/2.jpg'
import img3 from 'public/images/gallery/3.jpg'
import img4 from 'public/images/gallery/4.jpg'
import img5 from 'public/images/gallery/5.jpg'
import img6 from 'public/images/gallery/6.jpg'

const items: Record<number, StaticImageData> = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6
}

import ModalItem from './modal-item'

type ModalProps = {
  index: number
  show: boolean
  onClose: () => void
}

export default function Modal({ index, show, onClose }: ModalProps) {
  const src = items[index]

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25 z-40' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto z-50'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full md:w-11/12 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <div className='p-4 flex'>
                  <div className='relative w-[calc(100vw-20%)] h-[calc(100vh-300px)] transition-all duration-300'>
                    <ModalItem src={src} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
