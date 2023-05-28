import Head from "next/head"
import Navbar from "../components/Navbar"
import Filter from "../components/FilterComp"
import ListingCard from "../components/ListingCard"
import {BsToggle2Off} from 'react-icons/bs'
import ExploreMap from "../components/GoogleMap"
import { useContext } from "react"
import { appContext } from "../context/appContext"
import Link from "next/link"
import {BiMapAlt} from 'react-icons/bi'

export default function SearchPage({center}) {

    const {data, locationData} = useContext(appContext)

    const set = []

    for (let x = 0; x <= 5; x++) {
        set.push(data[x])
    }

    console.log(data)

    return (
        <>
            <Head>
                <title>search</title>
                <meta name="description" content="The search Page for hostinger" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="py-16 " >
                <Link href='#map'>
                    <div className="lg:hidden sm:flex fixed flex flex-col items-center rounded-full right-3 bottom-5 z-[3] p-3 px-4 bg-[#329a9a]">
                        <BiMapAlt fill="white" size={20} />
                        <p className="text-white ">maps</p>
                    </div>
                </Link>
                <Filter />
                <div className="pl-10 flex lg:flex-row sm:px-5 sm:flex-col lg:mt-[6.9em] sm:mt-[1em]">
                    <div style={{flex: 0.64}}>
                        <p className="py-4">Over 1,000 places</p>
                        <div className="flex justify-between items-center border p-3 rounded-lg ">
                            <div className="flex">
                                <p className="font-semibold border-r pr-2 lg:text-md">Display total price</p>
                                <p className="pl-2 text-gray-500 lg:text-md lg:flex sm:hidden">includes all frees, before taxes</p>
                            </div>
                            <BsToggle2Off size={23}/>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
                            {set.map(({info}, i) => {
                                return (
                                    <ListingCard key={i} image={info.mainImage.url} name={info.title} id={info.id} displayInfo={true}/>
                                )
                            })}
                        </div>
                    </div>

                    {/* <div style={{flex: 1 }} className="flex h-[80vh] bg-rose-400 justify-center items-center lg:fixed lg:w-[35%] sm:w-[100%] right-0 md:relative"> */}
                    <div style={{ }} id="map" className="flex right-0 bg-rose-400 lg:w-[35%] sm:w-[100%] h-[75vh] lg:fixed sm:relative">
                        <ExploreMap location={center}/>
                    </div>
                </div>
            </div>
        </>
    )
}