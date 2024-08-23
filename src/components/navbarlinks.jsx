import React from 'react'

const NavbarLinks = ({extraClassNames, toggleOpen}) => {
    return (
        <div className={`${extraClassNames} md:mt-0 md:flex md:flex-row gap-x-8 gap-y-4`} onClick={toggleOpen}>
            <a href="#about" className=' hover:text-black text-lg'>About</a>

            <a href="#skills" className=' hover:text-black text-lg'>Skills</a>
            <a href="#experience" className=' hover:text-black text-lg'>Experience</a>
            <a href="#projects" className=' hover:text-black text-lg'>Projects</a>
            <a href="#interests" className=' hover:text-black text-lg'>Interest</a>
            <a href="#contact" className=' hover:text-black text-lg'>Contact</a>
        </div>
    )
}

export default NavbarLinks