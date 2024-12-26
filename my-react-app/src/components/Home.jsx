import { Link } from 'react-router-dom';


import './Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='home-div1'>
        <img className="logo" src="https://freepngdesign.com/content/uploads/images/p-1699-3-apple-watch-logo-png-transparent-logo-820097204032.png" alt="logo"/>
      </div>
      <div className='home-div2'>
        <h5>Apple Watch Studio</h5>
        <h1>Choose a case.<br/> Pick a band.<br/>Create your own style.</h1>
        <Link to='/collections'>
        <button>Get Started</button>
        </Link>
        <br/>
        <div className='home-div3'>
        <img className='iwatch' src='https://clipground.com/images/apple-watch-4-png-17.png' alt='iwatch'/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
