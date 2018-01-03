import React, {Component} from 'react';
import {
    Image, StyleSheet,
    Text, View, VirtualizedList,
} from 'react-native';
import _isEqual from 'lodash/isEqual';
import _size from 'lodash/size';
import _forEach from 'lodash/forEach';
import _values from 'lodash/values';
import Moment from './Moment.js'


export default class MomentScreen extends Component {


    constructor(props){
        super(props);


        let _numberOfData = 300;
        let _data;

        _data = this._generateData(_numberOfData);

        this.state = {
            numberOfData: _numberOfData,
            data : _data,
        }
    }


    _generateData = (_numberOfData) =>{
        let _data = Array(_numberOfData);
        for(let i = 0; i < _numberOfData; i++){
            let _dataOfRow = {};
            _dataOfRow.key = i;
            _dataOfRow.userName = 'user' + i
            if(i % 13 === 0){
                _dataOfRow.content = '0123456789';
            }else{
                _dataOfRow.content = _data[i - 1].content + '0123456789';
            }
            _data[i] = _dataOfRow;
        }
        return _data;

    };

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                <MomentList data={this.state.data}/>
            </View>
        );
    }
}


class MomentList extends Component
{
    constructor(props)
    {
        super(props);
        this._getItem = this._getItem.bind(this);
        this._renderRow = this._renderRow.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        return !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState);
    }


    _getItem(data, index) {
        return data[index];
    }

    _renderRow(row)
    {
        return(
            <Moment row={row}/>
        );
    }

    render()
    {

        return (
            <VirtualizedList
                keyExtractor={(item) => item.key}
                data={_values(this.props.data)}
                renderItem={this._renderRow}
                getItem={(data,index) => this._getItem(data,index)}
                getItemCount={(data) => data ? _size(data) : 0}
                contentContainerStyle={{ flexGrow: 1, overflow: 'hidden' }}
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
                removeClippedSubviews={false}
                enableEmptySections={true}
            />
        )
    }
}

