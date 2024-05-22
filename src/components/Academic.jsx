import React from 'react'

function Academic({icon,heading,subheading,isLineShow=true}) {
  return (
    <section className="flex gap-4 w-full justify-start h-36 lg:h-28 relative">
          {isLineShow && <span className='absolute w-2 h-full left-6 top-0 bg-cyan-500 z-0'></span>}
          <div className="h-14 w-14 flex items-center justify-center bg-gray-500 rounded-full z-10">
            {icon}
          </div>
          <div className="flex-grow">
            <h1 className='text-cyan-400 text-lg font-semibold'>{heading}</h1>
            <p className='text-gray-100 text-sm '>{subheading}</p>
          </div>
        </section>
  )
}

export default Academic