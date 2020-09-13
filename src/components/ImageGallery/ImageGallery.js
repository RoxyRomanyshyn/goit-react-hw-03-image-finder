import React from 'react';
import styles from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({
    images
}) {
    return <ul className = {
            styles.ImageGallery
        } > {
            images.map(image => ( <
                ImageGalleryItem key = {
                    image.id
                }
                source = {
                    image.webformatURL
                }
                alt = {
                    image.tags
                }
                large = {
                    image.largeImageURL
                }
                />
            ))
        } <
        /ul>;
}