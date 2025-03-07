import React from 'react'
import Logo from './_components/logo'
import { Menu } from './_components/menu'
import ActionButton from './_components/action-buttons'
const Navbar = () => {
  return (
      <div className='flex items-center'>
          <Logo />
      <Menu />
      <ActionButton/>
    </div>
  )
}

export default Navbar