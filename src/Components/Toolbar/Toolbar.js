import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: 'умолчанию',
      minPrice: 0,
      maxPrice: null
    }
  }

  componentWillMount() {
    this.setState({
      maxPrice: this.props.data.reduce((max, val) =>
        val.data.price > max ? val.data.price : max, this.props.data[0].data.price
      )
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      maxPrice: newProps.data.reduce((max, val) =>
        val.data.price > max ? val.data.price : max, this.props.data[0].data.price
      )
    })

  }

  filterPrice() {

    const { update, data } = this.props;



    const sorted = [].slice.call(data).filter(item =>
      (item.data.price >= this.state.minPrice) ?
        ((item.data.price <= this.state.maxPrice) ? true : false) :
        false
    );

    update({
      filteredData: sorted
    });
  }

  sort(type, btnValue, reverse) {

    this.setState(
      { sortValue: btnValue.target.value }
    );

    const { update, filteredData } = this.props;
    let direction = reverse ? 1 : -1;

    const sorted = [].slice.call(filteredData).sort((a, b) => {
      if (a.data[type] === b.data[type]) { return 0; }
      return a.data[type] > b.data[type] ? direction : direction * -1;
    });

    update({
      filteredData: sorted
    });
  }

  reset(btnValue) {
    this.setState(
      { sortValue: btnValue.target.value }
    );
    this.props.update({
      filteredData: this.props.data
    });
  }

  openList() {
    document.querySelector('.btn-list').classList.toggle('open');
  }

  render() {

    return (
      <div className="toolbar">

        <div className='price-filter'>
          Цена:
          <input type='text' className='btn-filter min-price' onChange={(data) => this.setState({ minPrice: Number(data.target.value) })} placeholder={this.state.minPrice}></input>
          -
          <input type='text' className='btn-filter max-price' onChange={(data) => this.setState({ maxPrice: Number(data.target.value) })} placeholder={this.state.maxPrice}></input>
          руб.

          <button className='btn_price-filter' onClick={this.filterPrice.bind(this)}>Фильтр</button>
        </div>

        <div>Сортировать по</div>

        <div className='btns'>
          <div className="btn btn_sort" onClick={this.openList}>{this.state.sortValue}</div>
          <ul className='btn-list'>
            <li><button className="btn btn-list_sort" value='умолчанию' onClick={(data) => this.reset(data)}>умолчанию</button></li>
            <li><button className="btn btn-list_sort" value='возрастанию цены' onClick={(data) => this.sort('price', data, true)}>возрастанию цены</button></li>
            <li><button className="btn btn-list_sort" value='убыванию цены' onClick={(data) => this.sort('price', data, false)}>убыванию цены</button></li>
            <li><button className="btn btn-list_sort" value='названию А-Я' onClick={(data) => this.sort('title', data, true)}>названию А-Я</button></li>
            <li><button className="btn btn-list_sort" value='названию Я-А' onClick={(data) => this.sort('title', data, false)}>названию Я-А</button></li>
            <li><button className="btn btn-list_sort" value='скидке' onClick={(data) => this.sort('discount', data)}>скидке</button></li>
          </ul>
        </div>

      </div >
    );
  }
}


export default Toolbar;