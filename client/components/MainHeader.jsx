'use client';
import Link from 'next/link'
import HeaderBg from './HeaderBg'
import Image from 'next/image'
import logoImg from '@/assets/fit1.jpg'

export default function MainHeader() {
  return (
  <>
      <HeaderBg/>
     <header className=" flex justify-between items-center py-8 px-4 h-40 mx-auto w-[90%] text-stone-300 max-sm:justify-center max-sm:w-[80%] max-sm:h-32 " >
        <div className="  flex gap-8">
        <Link  className=' flex items-center justify-center gap-8  font-bold uppercase text-3xl max-sm:hidden' href='/'>
           <Image className='w-16 h-10 object-contain drop-shadow-custom rounded-full' src={logoImg}  alt='a table full fo foods' priority/>
            fit science
        </Link>
        </div>

        <div className="  flex font-semibold capitalize text-lg gap-8 ">
        <Link  className=' sm:hidden' href='/'>Home</Link>
        <Link href='/content'>content</Link>
          <Link href='/register'>register</Link>
          <Link href='/login'>login</Link>
          
       
         
        </div>

       
      </header>
  </>
)
}
