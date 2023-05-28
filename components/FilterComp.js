import {GiIsland, GiCastle, GiWoodCabin, GiTreehouse} from 'react-icons/gi'
import {FaHome, FaUmbrellaBeach} from 'react-icons/fa'
import {IoBoatSharp} from 'react-icons/io'

export default function Filter({custom = {}}) {
    return (
        <div style={custom} className="lg:fixed w-[100vw] z-[2] sm:relative flex bg-white border-b-2 mt-[1.6em] py-4 overflow-auto whitespace-nowrap">
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiCastle />
                <p>castles</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiIsland />
                <p>Islands</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiWoodCabin />
                <p>Cabins</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiTreehouse />
                <p>tree house</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <FaHome />
                <p>Homes</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <FaUmbrellaBeach />
                <p>Beach</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiCastle />
                <p>castles</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiIsland />
                <p>Islands</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiWoodCabin />
                <p>Cabins</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <GiTreehouse />
                <p>tree house</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <FaHome />
                <p>Homes</p>
            </div>
            <div className='lg:mx-10 sm:px-8 flex flex-col items-center hover:bg-slate-100 cursor-pointer'>
                <FaUmbrellaBeach />
                <p>Beach</p>
            </div>
            {/* <div>
                <IoBoatSharp />
                <p>Boats</p>
            </div> */}
        </div>
    )
}