/* eslint-disable react/prop-types */
import { Meteors } from './ui/meteors'

export function MeteorsDemo({ children }) {
  return (
    <div className=''>
      <div className=' w-full relative'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-50 to-teal-50 transform scale-[0.80] rounded-full blur-3xl' />
        <div className='relative h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
          {children}

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} className='w-2'/>
        </div>
      </div>
    </div>
  )
}
