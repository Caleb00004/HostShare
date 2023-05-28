import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/FilterComp'
import ListingCard from '../components/ListingCard'
import Modal from 'react-modal'
import { useContext } from 'react'
import { appContext } from '../context/appContext'

export default function Home() {

  // Needed to remove one error in the modal component.
  Modal.setAppElement('#__next')

  const {data, locationData} = useContext(appContext)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page for Hostinger Listings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* <div className='py-16 lg:bg-red-700 md:bg-lime-400 sm:bg-slate-950'> */}
      <div className='py-16 '>
        <Filter />
        {/* <h1 className='text-blue-500'>Hello Boyy</h1> */}
        <div className='grid px-5 lg:px-12 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 lg:mt-[6.5em] sm:mt-[0.5em] '>
          {data.map(({info}) => {
            return (
                <ListingCard image={info.mainImage.url} name={info.title} id={info.id}/>
            )
          })}
          {/* <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard /> */}
        </div>
      </div>  
    </>
  
  )
}
