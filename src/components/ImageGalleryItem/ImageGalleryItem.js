import React, {
    Component
} from 'react';
import Modal from '../Modal/Modal';
import styles from './imageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }


    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        const {
            id,
            source,
            alt,
            large
        } = this.props
        return ( <
            li key = {
                id
            }
            onClick = {
                this.showModal
            }
            className = {
                styles.ImageGalleryItem
            } > {
                this.state.showModal ? < Modal onClose = {
                    this.showModal
                }
                largeSize = {
                    large
                }
                alt = {
                    alt
                } > < /Modal> :  <
                img src = {
                    source
                }
                alt = {
                    alt
                }
                dataaction = {
                    large
                }
                className = {
                    styles.ImageGalleryItemImage
                }
                / >
            } <
            /li>
        );
    }

}