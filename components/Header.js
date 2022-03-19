import Image from 'next/image'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
  } from "@heroicons/react/outline"

import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className='m-5 flex flex-col sm:flex-row justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='Home' Icon={HomeIcon}/>
        <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
        <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
        <HeaderItem title='Collections' Icon={CollectionIcon}/>
        <HeaderItem title='Search' Icon={SearchIcon}/>
        <HeaderItem title='Account' Icon={UserIcon}/>
      </div>
      <Image 
        className='object-contain'
        src='/images/twolu-logo.png' 
        height={100} 
        width={200}
        alt=''
        />
    </header>
  )
}

export default Header