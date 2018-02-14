import { Image, View } from 'react-native';
import React, { Component } from 'react';

export default BackgroundImage = (props) => {

    const { 
        backImageContainerStyle, 
        backImageStyle } = styles;

    const { sourcePath } = props;

    return (
        <View style={backImageContainerStyle} >
            <Image 
            style={backImageStyle} 
            source={sourcePath} />
        </View>
    );

}

const styles = {
    backImageContainerStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    backImageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
}
