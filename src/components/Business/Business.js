import React from 'react';
import './Business.css';



class Business extends React.Component {
    render() {
        const { business } = this.props;
        const urlAddress = business.address+' '+business.city+' '+business.state+' '+business.zipCode;
        const urlAddressEncoded = encodeURI(urlAddress);
        const mapQuery = 'https://www.google.com/maps/search/?api=1&query=';
        const mapLink = mapQuery+urlAddressEncoded;
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className='Business-information'>
                <div className='Business-address'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                    <a href={business.url}> Website </a>
                    <a href={mapLink}> Map </a>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">Rating: {business.rating}</h3>
                    <p>Reviews: {business.reviewCount}</p>
                </div>
            </div>
            </div>
        );
    }
};

export default Business;