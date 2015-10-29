/**
 * Created by Lennon on 15/10/29.
 */
var React = require('react-native');
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
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
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