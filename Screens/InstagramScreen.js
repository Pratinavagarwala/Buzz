import * as React from 'react';
import {View ,Text , StyleSheet} from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text>InstagramScreen</Text>
            </View>
        );
    }
}

var Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})