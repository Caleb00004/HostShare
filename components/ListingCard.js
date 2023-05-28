import Image from "next/image"
import { data } from "../data"
import { useRouter } from "next/router"
import {AiOutlineHeart, AiFillHeart, AiFillStar} from 'react-icons/ai'

export default function ListingCard({displayInfo, image, name, id}) {
    let test = data.data[0]
    const router = useRouter()

    return (
        <div className="ml-auto mr-auto my-6 relative " onClick={() => router.push(`/listing/${id}`)}>
            <div>
                {displayInfo && <span className="absolute bg-white rounded-sm top-3 ml-2 font-bold p-1 text-sm">SuperHost</span>}
                <span className="absolute right-2 top-3"><AiOutlineHeart className="hover:fill-[red] fill-white" size={22}/></span>
                {/* <AiFillHeart className="fill-[#329a9a]"/> */}
                <Image 
                    src={image}
                    width={350}
                    height={300}
                    className="rounded-lg h-80 w-[100%]"
                    alt='image'
                />
                <div className="flex justify-between mt-2">
                    <h3 className="font-bold w-[80%]">{name}</h3>
                    <p className="flex items-center"><AiFillStar className="mx-1"/> 4.92</p>
                </div>
                <p className="text-gray-500">53 Miles Away</p>
                <p className="text-gray-500">Jun 2 - 7</p>
                <p><span className="font-bold">$320</span> night</p>
            </div>
        </div>
    )
}