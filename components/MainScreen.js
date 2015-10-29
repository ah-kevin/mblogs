/**
 * Created by Lennon on 15/10/29.
 */
var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var {
    StyleSheet,
    Text,
    View,
    Image,
    Component,
    }=React;

class MainScreen extends Component{
    render(){
        return(
            <Carousel delay={1500} style={{flex: 1, height: 240}}>
                <View style={{backgroundColor:'#BADA55',height:240}}/>
                <View style={{backgroundColor:'red',height:240}}/>
                <View style={{backgroundColor:'blue',height:240}}/>
            </Carousel>
        )
    }
};

var styles=StyleSheet.create({
   container:{
       flex:1,
       marginTop:80,
       alignItems:'center'
   }
});
export default MainScreen;