import Image from 'next/image'
import React from 'react'

const navLink = [
    { url: '/assets/icons/search.svg', alt: 'search' },
    { url: '/assets/icons/black-heart.svg', alt: 'heart' },
    { url: '/assets/icons/user.svg', alt: 'user' },
]
const Navbar = () => {
    navLink.map((icon)=>{console.log(icon.url)})
    return (
        <header className=''>
           <nav className='h-16 flex justify-between items-center'>
           <h1 className='flex gap-3'>
                <a href="/">Wise <span className='text-primary'>Price</span></a>
            </h1>
            <div className='flex items-center gap-5'>
                {
                    navLink.map((icon) => (<Image key={icon.alt} src={icon.url} width={27} height={27} alt={icon.alt} className='object-contain cursor-pointer'/>))
                }
            </div>
           </nav>
        </header>
    )
}

export default Navbar