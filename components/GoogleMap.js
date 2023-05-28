import {
	useLoadScript,
	GoogleMap,
	MarkerF,
	CircleF,
} from '@react-google-maps/api';
import { useMemo } from 'react';
import { useContext } from 'react';
import { appContext } from '../context/appContext';
import { mapsContext } from '../context/googleMapsContext';

export default function ExploreMap() {
	const libraries = useMemo(() => ['places'], []);
    const {mapCenter: center, setMapCenter} = useContext(appContext)

    const mapCenter = center

    const mapOptions = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: true,
			scrollwheel: false,
		}),
		[]
	);
        
    const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU',
		libraries: libraries,
	});

    if (!isLoaded) {
        return (
            <div className='flex justify-center items-center'>
                <p className='text-white'>Loading...</p>
            </div>
        )
    }

    return (
        <div style={{height: '75vh'}} className='w-[100%] right-0 '>
        	<GoogleMap
				options={mapOptions}
				zoom={13}
				center={mapCenter}

				mapContainerStyle={{ width: '100%', height: '100%' }}
				onLoad={() => console.log('Map Component Loaded...')}
			>
                <MarkerF
					position={mapCenter}
					onLoad={() => console.log('Marker Loaded')}
				/>
				{/* <CircleF
                    key={'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU'}
                    center={mapCenter}
                    radius={10000}
                    onLoad={() => console.log('Circle Load...')}
                    options={{
                        fillColor: 'green',
                        strokeColor: 'green',
                        strokeOpacity: 0.8,
                        clickableIcons: true,
                    }}
                /> */}
            </GoogleMap>
        </div>
    )
}