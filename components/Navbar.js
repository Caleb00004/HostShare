import logo from '../public/Hostshare-green.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {BsSearch} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsPersonCircle} from 'react-icons/bs'
import { useState } from 'react'
import {GrClose} from 'react-icons/gr'
import name from '../listings.json'

export default function Navbar() {
    const router = useRouter()
    const [displayContent, setDisplayContent] = useState(false)
    const testSet = []
    let location = []

    for(let i = 0; i < 21; i++) {   
        testSet.push(name.data[i])
    }

    testSet.map(data => location.push(data.info.location))
    // console.log(testSet)
    // console.log(location)

    // name.data.map(item => console.log(item.info.location))
    return (
        <>
            <div className='flex bg-white items-center justify-between py-6 px-8 border-b-2 fixed w-screen z-10 '>
                <Image 
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                    src={'/Hostshare-green.png'}
                    width={160}
                    height={60}
                    alt='hostshare'
                />
                <div className='lg:flex border-2 rounded-3xl items-center p-1 sm:hidden'>
                    {/* <p className='px-3 border-r-2 text-[1em] font-bold'>where</p> */}
                    <select className='px-2 border-r-2'>
                        <option>PerryVille</option>
                        <option>Los Angeles</option>
                        <option>East point</option>
                        <option>Telluride</option>
                        <option>GrandView</option>
                        <option>PerryVille</option>
                    </select>
                    <input type={'date'} placeholder='select' className='border-r-2 px-1'/>
                    {/* <p className='px-3 border-r-2  text-[1em] font-bold'>Any </p> */}
                    {/* <p className='px-3  text-[0.8em] text-slate-400'>Add guests</p> */}
                    <select className="px-3 text-slate-400 appearance-none cursor-pointer" defaultValue={''}>
                        <option disabled={true} value="" className="text-slate-100">select guest</option>
                        <option value={"2 guest"} className="">2 guest</option>
                        <option className="">3 guest</option>
                        <option className="">4 guest</option>
                    </select>
                    <div onClick={() => router.push('/search')} className='p-1.5 rounded-full bg-[#329a9a]'>
                        <BsSearch fill='white'/>
                    </div>
                </div>
                <div className='lg:flex sm:hidden items-center'>
                    <p className='text-[1em] p-2 hover:bg-slate-200 hover:rounded-2xl'>Airbnb your home</p>
                    <TbWorld className='mx-3 hover:bg-slate-200 hover:rounded-full' size={25}/>
                    <span className='flex items-center border rounded-2xl hover:shadow-md hover:shadow-slate-300'>
                        <RxHamburgerMenu className='mx-2 my-1' size={20}/>
                        <BsPersonCircle className='mx-2 my-1' size={25} fill='#329a9a'/>
                    </span>
                </div>

                {/* Phone Nav */}
                <div className='lg:hidden sm:flex' >
                    {displayContent ? <GrClose  className='fill-neutral-200' onClick={() => setDisplayContent(false)}/> :
                        <RxHamburgerMenu onClick={() => setDisplayContent(true)} size={20} className='fill-neutral-200'/>
                    }
                </div>
            </div>
            
            {/* Phone Nav */}
            <div className={displayContent ? 'flex flex-col justify-end transition-all duration-400 opacity-1 z-50 items-end bg-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-sm fixed w-[100vw] right-0 mt-[5.3em] h-screen' :
            'flex transition-all duration-400 flex-col opacity-0 z-[-10] justify-end items-end fixed w-[100vw]  right-0 mt-[5.3em] h-screen'}>
                {/* <div className='flex flex-col opacity-1 items-end bg-[#329a9a] fixed w-[80vw] p-5 z-50 right-0 mt-[4.3em] h-screen'> */}
                <div className='w-[80vw] h-[100%] bg-[#329a9a] p-5 flex flex-col items-end'>
                    <div className='flex items-center justify-end my-2 hover:scale-[1.1] transition-all duration-200 cursor-pointer'>
                        <p className='text-[1em] text-white '>Airbnb your home</p>
                        <TbWorld className='mx-3' fill='white' size={23}/>
                        <span className='flex items-center border rounded-2xl'>
                            <RxHamburgerMenu className='mx-2 my-1' fill='white'/>
                            <BsPersonCircle className='mx-2 my-1' size={20} fill='white'/>
                        </span>
                    </div>
                    <p className='py-3 my-2 hover:scale-[1.1] transition-all duration-200 cursor-pointer text-white' onClick={() => router.push('/search')}>Search</p>
                    {/* <div onClick={() => router.push('/search')} className='flex border-2 rounded-3xl items-center p-1'>
                        <p className='px-3 border-r-2 text-[0.8em] font-bold'>Anywhwere</p>
                        <p className='px-3 border-r-2  text-[0.8em] font-bold'>Any week</p>
                        <p className='px-3  text-[0.8em] text-slate-400'>Add guests</p>
                        <div className='p-1.5 rounded-full bg-[#329a9a]'>
                            <BsSearch fill='white'/>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
        
    )
}