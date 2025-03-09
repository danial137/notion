import React from 'react'
import Logo from './_components/logo'
import { Menu } from './_components/menu'
import ActionButton from './_components/action-buttons'
const Navbar = () => {

  const navBarClasses = `flex items-center justify-between space-x-10 bg-white h-14 sticky top-0 z-50 border-b border-gray-200`

  return (
    <div className={navBarClasses}>
      <div className='flex items-center justify-center'>


        <Logo />
        <Menu />
      </div>
        <ActionButton />

     
    </div>
  )
}

export default Navbar