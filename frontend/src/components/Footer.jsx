import React from 'react'

const Footer = () => {
  return (
    <div className="mt-8 w-ful bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between text-sm md:text-md py-8 " >
      <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most Viewed</p>
        <p>Readers Choice</p>
      </div>
      <div className="flex flex-col text-white">
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>
      <div className="flex flex-col text-white">
        <p>Privacy Policies</p>
        <p>About us</p>
        <p>Readers Choice</p>
      </div>
    </div>
  )
}

export default Footer