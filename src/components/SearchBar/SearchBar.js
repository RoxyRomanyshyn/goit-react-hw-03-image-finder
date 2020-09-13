import React, {
    Component
} from 'react';
import styles from './searchBar.module.css';

export default class Searchbar extends Component {
    state = {
        inputValue: ''
    };

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue)
    };

    render() {
        return ( <
            header className = {
                styles.Searchbar
            } >
            <
            form className = {
                styles.SearchForm
            }
            onSubmit = {
                this.handleSubmit
            } >
            <
            button type = "submit"
            className = {
                styles.SearchFormButton
            } >
            <
            span className = {
                styles.SearchFormButtonLabel
            } > < /span> < /
            button >

            <
            input className = {
                styles.SearchFormInput
            }
            type = "text"
            autoComplete = "off"
            autoFocus placeholder = "Search images and photos"
            value = {
                this.state.inputValue
            }
            onChange = {
                this.handleChange
            }
            /> < /
            form > <
            /header>
        );
    }
}