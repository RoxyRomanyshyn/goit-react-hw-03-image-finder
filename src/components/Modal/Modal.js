import React, {
    Component
} from 'react';
import styles from './modal.module.css';

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keyup', this.closeModal)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.closeModal)
    }

    closeModal = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        const {
            largeSize,
            alt
        } = this.props
        return ( <
            div className = {
                styles.Overlay
            } >
            <
            div className = {
                styles.ModalD
            } >
            <
            img src = {
                largeSize
            }
            alt = {
                alt
            }
            /> < /
            div > <
            /div>
        );
    }

}