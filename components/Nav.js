import fetchRequestsObject from '../utils/requests'
import { useRouter } from 'next/router'

const Nav = () => {

  const router = useRouter();
  
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(fetchRequestsObject).map(([key, {title, url}]) => (
          <h2
          onClick={() => router.push(`/?genre=${key}`)} 
          key={key} 
          className='
            cursor-pointer
            transition
            duration-100
            transform
            hover:scale-125 
            hover:text-white 
            active:text-red-500
            last:pr-20
            '
            >
              {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 left-0 bg-gradient-to-r from-[#2b0e61] h-10 w-1/12'/>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#2b0e61] h-10 w-1/12'/>
    </nav>
  )
}

export default Nav