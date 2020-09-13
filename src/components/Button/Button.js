import React, {
    Component
} from 'react';
import
styles
from './Button.module.css';


export default class Button extends Component {
    render() {
        const {
            loadMore
        } = this.props;
        return ( <
            div className = {
                styles.buttonContainer
            } >
            <
            button className = {
                styles.Button
            }

            onClick = {
                loadMore
            } >
            Load more <
            /button> < /
            div >
        );
    }
}