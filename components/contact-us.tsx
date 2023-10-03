'use client'

import { useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'


interface ContactUsFormProps {
 isModelOpen: boolean
 setContactUsOpen: (value:boolean)=> void
}

export default function ContactUsForm({
    isModelOpen = false,
    setContactUsOpen
}: ContactUsFormProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      <Transition show={isModelOpen} as={Fragment}>
        <Dialog initialFocus={videoRef} onClose={() => setContactUsOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
              <Dialog.Panel className=" w-96  h-4/5 flex items-center overflow-hidden bg-gray-200/90 dark:bg-zinc-800/80 rounded shadow-xl p-7">
         
            
            <form className=' w-1/1'>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400" htmlFor="name">Name</label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400" htmlFor="email">Email</label>
                   
                  </div>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400" htmlFor="message">Message</label>
                   
                  </div>
                  <textarea id="message" rows={7} className="form-input w-full resize-none text-gray-800" placeholder="Enter your message" required />
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Submit</button>
                </div>
              </div>
            </form>
            
            </Dialog.Panel> 
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}