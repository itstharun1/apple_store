import  { useState } from 'react';
import './Carousel.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Size = () => {
    const images = [
        {
            src: 'https://www.swisstimehouse.com/139522-home_default/techlog-t-ultra-plus-unisex-watch.jpg',
            d: '42mm Jet Black Aluminum Case with Black Solo Loop',
            p:'From $399',
            s:'size1'
        },
        {
            src: 'https://www.swisstimehouse.com/139522-home_default/techlog-t-ultra-plus-unisex-watch.jpg',
            d: '46mm Jet Black Aluminum Case with Black Solo Loop',
            p:'From $429',
            s:'size2'
        }

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='collections div-size'>
        <div className='watch'>
        <img className="logo" src="https://freepngdesign.com/content/uploads/images/p-1699-3-apple-watch-logo-png-transparent-logo-820097204032.png" alt="logo"/>
        </div>
        <div className='collection-div'>
        <div className="carousel-container">
            <div className="carousel-image">
                <img className={`size${currentIndex}`} src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className='sizes'>
            <button onClick={goToNext} className="carousel-button">Next</button>
            <button onClick={goToPrevious} className="carousel-button">Previous</button>
            </div>
            <div className="carousel-info">
                <p>{images[currentIndex].d}</p>
                <p>{images[currentIndex].p}</p>

            </div>
        </div>
        <div>
            <Link to='/size'><button className='btn-s'>Size</button></Link>
            <Link to='case'><button className='btn-s'>Case</button></Link>
            <Link to='band'><button className='btn-s'>Band</button></Link>
        </div>
        </div>
      
    </div>
    );
};

export default Size;
