"use client"
import { FormEvent, useState } from 'react'
import Button from './Button'

const isValidUrl = (url: string) => {
    try {
        const parseUrl = new URL(url)
        const hostname = parseUrl.hostname

        if (hostname.includes('amazon.com') || hostname.includes('amazon'))
            return true
    } catch (error) {
        return error
    }
    return false
}

const Search = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const validUrl = isValidUrl(search)
        if (!validUrl) {
            return alert('please provide a valid amazon link!')
        } else {
            try {
                setLoading(true)
                //scrap our first product
                
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }


    }

    return (
        <form onSubmit={handleSubmit} className='mt-10 ring-1 ring-gray-400 flex justify-between items-center pl-4 rounded-full max-w-[1024px] '>
            <input
                type="text"
                placeholder='search by your link'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <Button label='Search' style='bg-primary m-1 px-6 py-4 rounded-full text-white cursor-pointer max-md:py-[13px] px-4' icon='' />
        </form >
    )
}

export default Search