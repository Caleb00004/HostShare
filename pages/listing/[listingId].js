import Head from "next/head"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import {BsDoorOpen, BsUpload} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiFillStar, AiOutlineHeart,} from 'react-icons/ai'
import Modal from "react-modal"
import { useState } from "react"
import { useRouter } from "next/router"
import { useContext } from "react"
import { appContext } from "../../context/appContext"

export default function Listing() {
    const [isOpen, setIsOpen] = useState(false) // To Open and Close the Modal
    const {data, setMapCenter} = useContext(appContext)
    const router = useRouter()

    // console.log(router.query.listingId)
    let currentData = data.filter(({info}) => info.id === router.query.listingId)

    if (!currentData[0]) {
        return (
            <>
                <Head>
                    <title>listing</title>
                    <meta name="description" content="The List Page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <div className="py-20 px-10 sm:px-5 flex justify-center items-center">
                    <h1 className="mt-40">Loading Data...</h1>
                </div>
            </>
        )
    }
    
    // styles for the Modal Component
    const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)'
    },
    content: {
        top: '50%',
        left: '50%',
        // width: '60vw',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        backgroundColor: '#f0f5f1',
        border: '1px solid #329a9a',
        color: 'black',
        transform: 'translate(-50%, -50%)'
    }
    }

    const {mainImage, price, maxGuestCapacity, host, images, title, description, location} = currentData[0].info
    console.log(currentData)

    function handleCenter() {
        setMapCenter({lat: location.lat, lng: location.long})
        router.push('/search')
    }

    let test = []
    for (let x = 1; x <= maxGuestCapacity; x++) {
        test.push(x)
    }

    let ImagesLinks = []
    for (let i = 0; i <= 4; i++) {
        ImagesLinks.push(images.data[i].url)
    }

    console.log(ImagesLinks)


    return (
        <>
            <Head>
                <title>listing</title>
                <meta name="description" content="The List Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="py-20 px-10 sm:px-5">
                <h1 className="pt-5 font-bold lg:text-3xl md:text-xl">{title}</h1>
                <div className="flex justify-between pb-5 lg:flex-row sm:flex-col md:flex-col">
                    <div className="flex-col">
                        <span className="px-1 sm:text-sm">st 4.92 .</span>
                        <span className="px-1 sm:text-sm font-semibold underline hover:no-underline cursor-pointer">65 reviews</span>
                        <span className="px-1 sm:text-sm ">.</span>
                        <span className="px-1 sm:text-sm font-semibold underline hover:no-underline cursor-pointer">Sagle, Idaho, United States</span>
                    </div>
                    <div className="flex md:ml-auto lg:mt-0 sm:mt-3">
                        <div className="flex items-center px-4">
                            <BsUpload />
                            <p className="pl-2 underline hover:text-slate-500 hover:no-underline cursor-pointer">Share</p>
                        </div>
                        <div className="flex items-center px-4">
                            <AiOutlineHeart />
                            <p className="pl-2 underline hover:text-slate-500 hover:no-underline cursor-pointer">Save</p>
                        </div>
                    </div>
                </div>

                <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                    <h3 className="pb-2">Successfully booked your Airbnb. </h3>
                    <div className="flex justify-between">
                        <button style={{backgroundColor: '#329a9a', border: 'none', color: 'white', padding: '0.5em 1em'}} onClick={() => setIsOpen(false)}>Close</button>
                        <button className="bg-[green] border-none text-white py-[0.5em] px-[1em]">Download Details</button>
                    </div>
                </Modal>

                {/* IMage Container */}
                {/* <div className="lg:grid h-[25em] mb-16 lg:gap-0 lg:grid-cols-3 sm:flex sm:overflow-auto sm:whitespace-nowrap sm:gap-3"> */}
                <div className="lg:grid h-[27em] mb-16 lg:gap-2 lg:grid-cols-3 sm:flex sm:overflow-auto sm:whitespace-nowrap sm:gap-3">
                    <p onClick={() => handleCenter()} className="absolute bg-slate-300 p-2 rounded-xl bottom-28 right-10 hover:bg-[#329a9a] hover:text-white transition-colors duration-200 cursor-pointer">View on Maps</p>
                    <div className="bg-slate-600 lg:w-[100%] lg:h-[430px] lg:row-start-1 lg:row-end-3 sm:flex-shrink-0 sm:w-[15em]">
                        <Image src={ImagesLinks[0]} height={'800'} width={'500'} className="w-[100%] h-[100%] object-cover" alt={'this is an Img'}/>
                    </div>
                    <div className="bg-rose-100 lg:h-[211px] lg:w-[100%] sm:h-[100%] sm:w-[15em] sm:flex-shrink-0">
                        <Image src={ImagesLinks[1]} height={'800'} width={'500'} className="w-[100%] h-[100%] object-cover" alt={'this is an Img'}/>
                    </div>
                    <div className="bg-slate-600 lg:h-[211px] lg:w-[100%] sm:h-[100%] sm:w-[15em] sm:flex-shrink-0">
                        <Image src={ImagesLinks[2]} height={'800'} width={'500'} className="w-[100%] h-[100%] object-cover" alt={'this is an Img'}/>
                    </div>
                    <div className="bg-rose-900  lg:h-[211px] lg:w-[100%] sm:h-[100%] sm:w-[15em] sm:flex-shrink-0">
                        <Image src={ImagesLinks[3]} height={'800'} width={'500'} className="w-[100%] h-[100%] object-cover" alt={'this is an Img'}/>
                    </div>
                    <div className="bg-rose-600  lg:h-[211px] lg:w-[100%] sm:h-[100%] sm:w-[15em] sm:flex-shrink-0">
                        <Image src={ImagesLinks[4]} height={'800'} width={'500'} className="w-[100%] h-[100%] object-cover" alt={'this is an Img'}/>
                    </div>
                </div>

                <div className="pt-6 lg:flex md:flex-none"> {/* Flex space-between*/}
                    <div style={{flex: 2}} className="lg:mr-10 sm:mr-0">
                        <div className="flex justify-between items-end lg:flex-row sm:flex-col sm:items-start"> {/* Flex, space between */}
                            <div>
                                <h2 className="font-bold">Entire home hosted by {host?.name}</h2>
                                <p>7 guest . 2 bedrooms . 4 beds . 2 baths</p>
                            </div>
                            <Image className="lg:mt-0 sm:mt-3" src='/Hostshare-icon.png' width={40} height={40} alt='hostinger'/>
                        </div>
                        <hr className="my-5"/>
                        <div className="flex mb-2"> {/* flex */}
                            <BsDoorOpen size={18}/>
                            <div className="ml-3">
                                <p className="font-bold">Self Check-in</p>
                                <p className="text-gray-600">Check yourself in with the lockbox</p>
                            </div>
                        </div>
                        <div className="flex"> {/* flex */}
                            <GoLocation size={18}/>
                            <div className="ml-3">
                                <p className="font-bold">Great location</p>
                                <p className="text-gray-600">95% of recent quests gave the location a 5 star rating</p>
                            </div>
                        </div>
                        <hr className="my-5"/>
                        <p>{description.substring(0, 500)}...</p>
                    </div>
                    
                    <div style={{flex: 1}} className="rounded-lg p-4 border shadow-md shadow-slate-900 sm:mt-10 md:mt-10 h-fit"> {/* border, box-shadow, padding, borderRadius */}
                        <div className="flex justify-between py-2"> {/* flex, space-around */}
                            <p><span className="font-bold text-xl">${price}</span> night</p> 
                            <p className="flex items-center"><AiFillStar className="mr-1"/> 4.92 . <span className="text-slate-500 underline ml-1 hover:no-underline">65 reviews</span></p>
                        </div>
                        <div className="border border-gray-500 rounded-lg "> {/* border */}
                            <div className="grid grid-cols-2 border-b border-gray-500">
                                <div className="border-r border-gray-500 p-2">
                                    <p className="text-sm font-bold">CHECK-IN</p>
                                    <input type={'date'} className="text-slate-500 text-sm"/>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm font-bold">CHECKOUT</p>
                                    <input type={'date'} className="text-slate-500 text-sm"/>
                                </div>
                            </div>
                            <div className="p-2 flex flex-col">
                                <label className="text-sm font-bold">GUESTS</label>
                                <select className="border-none">
                                    {test.map(item => (<option className="">{item} guest</option>))}
                                    {/* <option className="">1 guest</option>
                                    <option className="">2 guest</option>
                                    <option className="">3 guest</option>
                                    <option className="">4 guest</option> */}
                                </select>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(true)} className="bg-[#329a9a] w-full p-2 mt-4 rounded-md ease-in duration-300 text-white hover:bg-[#329a4b] hover:text-black">Book Airbnb</button>
                    </div>
                </div>
            </div>
        </>
    )
}