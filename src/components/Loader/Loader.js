import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './loader.module.css';

export default class Spinner extends React.Component {
  render() {
    return ( <
      div className = {
        styles.loader
      } >
      <
      Loader type = "Puff"
      color = "#00BFFF"
      height = {
        80
      }
      width = {
        80
      }
      />{' '} < /
      div >
    );
  }
}