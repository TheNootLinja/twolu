import Image from 'next/image'

import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className=''>
      <div>
        <HeaderItem title='home' Icon=''/>
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