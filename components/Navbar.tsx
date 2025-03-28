import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-[#2B59FF] rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
  )
}

export default Navbar