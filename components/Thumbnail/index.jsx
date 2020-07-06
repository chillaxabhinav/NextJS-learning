import React from 'react';

const Thumbnail = ({imageUrl, caption}) => {
    return (
        <div className="thumbnail">
            <img src={imageUrl} className="thumbnail__image"/>
            <h4 className="thumbnail__caption">{caption}</h4>

            <style jsx>{`
                .thumbnail__image {
                    width : 100%;
                }

                .thumbnail__caption {
                    text-align : center;
                }
            `}</style>
        </div>
    )
}

export default Thumbnail;
