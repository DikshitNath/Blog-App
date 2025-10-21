import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest updates and exclusive news.</p>
      <form className="flex items-center justify-between w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto h-12 md:h-13 px-4 sm:px-0">
        <input
          type="email"
          placeholder="Enter your email id"
          required
          className="flex-1 h-full px-3 sm:px-4 text-sm sm:text-base text-gray-700 border border-gray-300 border-r-0 rounded-l-md outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          type="submit"
          className="h-full px-6 sm:px-8 md:px-12 bg-primary/80 hover:bg-primary text-white text-sm sm:text-base rounded-r-md transition-all duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
