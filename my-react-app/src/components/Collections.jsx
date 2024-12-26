import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

function Collections() {
    const [watchview,setWatchView]=useState("Front View")
    const [srcData,setSrcData]=useState("https://img-prd-pim.poorvika.com/product/Apple-Watch-Series-7-GPS-Cellular-Aluminium-Case-with-Sport-Band-Midnight-41mm-Front-Side-View.png")

    const btnClicked=()=>{
        if(watchview==="Front View"){
            setWatchView("Side View")
            setSrcData("https://www.att.com/scmsassets/global/devices/other/apple/apple-watch-series-7-45mm/carousel/6257D-2-CAROUSEL.png")
        }else{
            setWatchView("Front View")
            setSrcData("https://img-prd-pim.poorvika.com/product/Apple-Watch-Series-7-GPS-Cellular-Aluminium-Case-with-Sport-Band-Midnight-41mm-Front-Side-View.png")
        }
    }


  return (
    <div className='collections'>
        <div className='watch'>
        <img className="logo" src="https://freepngdesign.com/content/uploads/images/p-1699-3-apple-watch-logo-png-transparent-logo-820097204032.png" alt="logo"/>
        </div>
        <div className='collection-div'>
        <div>
        <img className='iwatch1' src={srcData} alt='iwatch'/><br/>
        <button className='view-btn' onClick={btnClicked}>{watchview}</button>
        <p>APPLE WATCH SERIES 10</p>
        <h6>46mm Jet Black Aluminum Case with Black Solo Loop</h6>
        <h5>From $429</h5>
        </div>
        <div>
            <Link to='/size'><button className='btn-s'>Size</button></Link>
            <Link to='case'><button className='btn-s'>Case</button></Link>
            <Link to='band'><button className='btn-s'>Band</button></Link>
        </div>
        </div>
      
    </div>
  )
}

export default Collections
