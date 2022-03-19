import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

const Thumbnail = ({result}) => {
  const BASE_PHOTO_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className='group cursor-pointer'>
      <Image 
      layout='responsive'
      height={1080}
      width={1920}
      src={
        `${BASE_PHOTO_URL}${result.backdrop_path || result.poster_path}` || `${BASE_PHOTO_URL}${result.poster_path}`
      }
      alt=''
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
        <p className='flex items-center opacity-0 transition-all duration-150 group-hover:opacity-100'>
          {result.media_type && `${result.media_type} ·`}
          {' '}{result.release_date || result.first_air_date} {'· '}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Thumbnail