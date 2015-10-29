/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Icon=require('react-native-vector-icons/FontAwesome');
var MainScreen=require('./components/MainScreen');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TabBarIOS,
    } = React;

var mblogs = React.createClass({
    getInitialState: function () {
      return{
          selectedTab:'default'
      }
    },

    // title:?string这是通过一个名为flow的外部工具为javascript加上强类型检查的功能，不影响编译和运行。
    _renderContent: function (category:string, title:string){
        return (
            <NavigatorIOS
                style={styles.wrapper}
                initialRoute={{
                    component:MainScreen,
                    title:title,
                    passProps:{filter:category}
                }}
            />
        );
    },
    render: function () {
        return (
        <TabBarIOS tintColor={'#ea4c89'}>
            <Icon.TabBarItem
                title="文章"
                iconName="list"
                selectedIconName="list"
                selected={this.state.selectedTab==='default'}
                onPress={()=>{
                    this.setState({
                        selectedTab:"default"
                    })
                }}
            >
                {this._renderContent("default","文章")}
            </Icon.TabBarItem>

            <Icon.TabBarItem
                title="发现"
                iconName="diamond"
                selectedIconName="diamond"
                selected={this.state.selectedTab==='find'}
                onPress={()=>{
                    this.setState({
                        selectedTab:"find"
                    })
                }}
            >
                {this._renderContent("find","发现")}
            </Icon.TabBarItem>

            <Icon.TabBarItem
                title="走廊"
                iconName="tags"
                selectedIconName="tags"
                selected={this.state.selectedTab==='corridor'}
                onPress={()=>{
                    this.setState({
                        selectedTab:"corridor"
                    })
                }}
            >
                {this._renderContent("corridor","走廊")}
            </Icon.TabBarItem>

        </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

AppRegistry.registerComponent('mblogs', () => mblogs);
