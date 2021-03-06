import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import dummyData from './components/dummy-data';
// console.log(dummyData);
import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import ReactDOM from 'react-dom'
import dummyData from './components/dummy-data';
class App extends Component {
  constructor (){
  super();
  this.state = {
    dummyData:  [],
    filteredData: [],
  };
 
  }
  componentDidMount() {
    this.setState({dummyData});
  }


  render() {
    return (
      <div className="App">
        <div>
        <SearchBar content = {this.state.dummyData}/>
        <PostContainer post = {this.state.dummyData}/>
        </div>
      </div>
    );
  }
}

export default App;
