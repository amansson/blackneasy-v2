import React, { Fragment } from 'react';
import Masonry from '../components/Masonry';
import FetchData from '../components/FetchData';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const Gallery = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/puppy.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <Masonry columns={4}>
            {
                imageData.response.resources.map(image => {
                    return (
                        <Image key={image.public_id} cloudName="blackneasy" publicId={image.public_id} />
                    )
                })
            }
            </Masonry>
        </Fragment>
    )
}

export default Gallery;