import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
const GoogleMaps = () => {
    return (
        <div>
            <GoogleMap defaultZoom={14} defaultCenter={{lat:44.78544162262748, lng:17.2015742296434}}/>
        </div>
    )
}

const WrapperMap = withScriptjs(withGoogleMap(GoogleMaps))

export default WrapperMap
