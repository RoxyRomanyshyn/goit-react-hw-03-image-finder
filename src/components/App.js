import React, {
  Component
} from 'react';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Loader/Loader';
import
styles
from './App.css';

export default class App extends Component {
  state = {
    sQuery: '',
    loading: false,
    page: 1,
    articles: [],
  };



  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.sQuery;
    const nextQuery = this.state.sQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles()
    };
    if (this.state.articles.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({
      sQuery: query,
      articles: [],
      page: 1
    })
  };

  fetchArticles = () => {
    this.setState({
      loading: true,
    });
    const {
      sQuery,
      page
    } = this.state
    axios
      .get(`https://pixabay.com/api/?q=${sQuery}&page=${page}&key=17195229-890eab4d4ceb15a1b34ad06cf&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => this.setState(prevState => ({
        articles: [...prevState.articles, ...response.data.hits],
        page: prevState.page + 1,
        loading: false
      })))
  };


  render() {
    return ( <
      >
      <
      SearchBar onSubmit = {
        this.handleSearchFormSubmit
      } >
      <
      /SearchBar> <
      ImageGallery images = {
        this.state.articles
      }
      /> {this.state.loading === true && < Spinner > < /Spinner >
    } {
      this.state.articles.length > 0 && < Button loadMore = {
        this.fetchArticles
      } > < /Button>} < / >
    )
  }
}