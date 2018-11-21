import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Toolbar from './Components/Toolbar/Toolbar';
import GoodsList from './Components/GoodsList/GoodsList';
import './App.css';
import { goods } from './shop.json';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 15,
      data: null,
      filteredData: null,
      searchfield: ''
    }

    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: goods.slice(0, this.state.count),
      filteredData: goods.slice(0, this.state.count)
    });
  }

  fetchMoreData = () => {
    this.setState({
      count: this.state.count + 15,
      data: goods.slice(0, this.state.count),
      filteredData: [...this.state.filteredData, ...goods.slice(this.state.count, this.state.count + 15)]
    });
  };

  updateData = (config) => {
    this.setState(config);
  }

  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        searchfield: e.target.value
      });
    }
  }

  render() {

    let filteredItems = this.state.filteredData.filter(item => {
      if (item.data.title.toLowerCase().includes(this.state.searchfield.toLowerCase())) {
        return true;
      } else if (item.data.id === this.state.searchfield) {
        return true;
      } else {
        return false;
      }
    })

    return (
      <div className='wrapper'>
        <Header keyPress={this.keyPress} />
        <Toolbar
          filteredData={this.state.filteredData}
          data={this.state.data}
          update={this.updateData.bind(this)}
        />
        <GoodsList
          data={filteredItems}
          update={this.updateData.bind(this)}
          count={this.state.count}
          fetchMoreData={this.fetchMoreData}
        />
      </div>
    );
  }
}

export default App;