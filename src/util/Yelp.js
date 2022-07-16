const apiKey = 'M6MRAyRTRy9ZUoM8R-HdLKiV5P8AsMO4tInwL81Rrp_6ImdpUUohkcamahTa0fsk1vUbUI6ywySVLwMcNnIuB_90z46WI0jQIVYtYzrtEHjgyO_-ImXAq9ErI-qkYnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
                return response.json();
        }).then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url,
                        }));
                    }
                });
        }
    };

export default Yelp;