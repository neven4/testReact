import React, { Component } from 'react';
import Item from '../Item/Item';
import ItemSolo from '../ItemSolo/ItemSolo';
import './GoodsList.css';
import InfiniteScroll from 'react-infinite-scroll-component';

class GoodsList extends Component {

    render() {
        let goodsList = this.props.data.map((goods, i) => {
            return (
                <Item
                    key={i}
                    id={goods.id}
                    img={goods.data.base_url}
                    title={goods.data.title}
                    price={goods.data.price}
                    oldP={goods.data.oldPrice}
                    sale={`-${goods.data.discount}%`}
                />
            )
        });

        if (this.props.data.length === 1) {
            goodsList =
                <ItemSolo
                    key={this.props.data[0].data.id}
                    id={this.props.data[0].id}
                    img={this.props.data[0].data.base_url}
                    title={this.props.data[0].data.title}
                    price={this.props.data[0].data.price}
                    oldP={this.props.data[0].data.oldPrice}
                    sale={`-${this.props.data[0].data.discount}%`}
                    description={this.props.data[0].data.description_id}
                    star={this.props.data[0].data.star}
                />;
        }
        else if (this.props.data < 1) {
            goodsList =
                <div>К сожаленью ничего не найдено :( </div>
        }

        return (
            <InfiniteScroll
                dataLength={this.props.count}
                next={this.props.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <div className='items'>
                    {goodsList}
                </div>
            </InfiniteScroll>
        )
    }

}

export default GoodsList;