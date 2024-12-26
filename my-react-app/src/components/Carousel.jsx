import  { useState } from 'react';
import './Carousel.css'; // Create this CSS file for styling

const Carousel = () => {
    const images = [
        {
            src: 'https://via.placeholder.com/600x400?text=Image+1',
            info: 'This is the first image description.'
        },
        {
            src: 'https://via.placeholder.com/600x400?text=Image+2',
            info: 'This is the second image description.'
        },
        {
            src: 'https://via.placeholder.com/600x400?text=Image+3',
            info: 'This is the third image description.'
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
        <div className="carousel-container">
            <button onClick={goToPrevious} className="carousel-button">Previous</button>
            <div className="carousel-image">
                <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button onClick={goToNext} className="carousel-button">Next</button>
            <div className="carousel-info">
                <p>{images[currentIndex].info}</p>
            </div>
        </div>
    );
};

export default Carousel;
