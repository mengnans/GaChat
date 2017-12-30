import React, {Component} from "react";
import {View, Text, Dimensions, PixelRatio} from "react-native";
import {RecyclerListView, DataProvider, LayoutProvider} from "recyclerlistview";

const ViewTypes = {
    MOMENT: 0,
};


class CellContainer extends Component {

    render() {
        return <View {...this.props}>{this.props.children}</View>;
    }
}

export default class MomentScreen extends React.Component {


    constructor(args) {
        super(args);

        let {width} = Dimensions.get("window");

        let data = MomentScreen._generateArray(300);

        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });


        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            (index) => {
                return index;
            },
            (type, dim, index) => {

                let dataLength = data[index].length;
                dataLength /= 40;
                let row = parseInt(dataLength);

                dim.width = width;
                dim.height = row * 16.7;
            }
        );

        MomentScreen._rowRenderer = MomentScreen._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(data),
        };
    }

    static _generateArray(n) {

        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            // arr[i] = i;
            arr[i] = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
            arr[i] = '好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw好嘞啊好嘞啊 三分所打翻饭Aowe反而we发件阿瓦吧金佛哇E法诺awe嫩啊;aw'
        }


        return arr;
    }


    //Given type and data return the view component
    static _rowRenderer(index, data) {


        return (
            <CellContainer style={styles.container}>
                <Text>{data}</Text>
            </CellContainer>
        );

    }

    render() {
        return <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider}
                                 rowRenderer={MomentScreen._rowRenderer}/>;
    }
}


const styles = {

    container: {
        justifyContent: "space-around",
        alignItems: "center",
        position: 'absolute',
        backgroundColor: "#af93ff",
        borderBottomColor: '#47315a',
        borderBottomWidth: 1 / PixelRatio.get(),
    },

};
