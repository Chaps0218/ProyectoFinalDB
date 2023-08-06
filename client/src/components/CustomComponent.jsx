import React from 'react';
import './CustomComponent.css';
import { FiUpload, FiFolder } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requieres carousel styles 

const CustomComponent = ({ title, subtitle1, subtitle2, icon1, icon2 }) => {
    return (
        <div className="custom-component">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="custom-content">
                <div className="custom-section">
                    <div className="custom-item">
                        <a href="/opcion1"><span className='custom-icon'>{icon1}</span>{subtitle1}</a>
                    </div>
                    <div className="custom-item">
                        <a href="/opcion1"><span className='custom-icon'>{icon2}</span>{subtitle2}</a>
                    </div>
                </div>
                <div className="custom-carousel">
                    <Carousel autoPlay showThumbs={false} showIndicators={true} infiniteLoop showStatus={false}>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 1" />
                        </div>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 2" />
                        </div>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 3" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CustomComponent;
