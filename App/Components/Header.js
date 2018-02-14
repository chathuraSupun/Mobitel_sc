import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from 'react-native';

import { Images, Constant, ScaleUnits } from '../Config';

const { width, height } = Dimensions.get('window');

const { COLORS } = Constant
const { header } = Images;
const { scale, verticalScale, moderateScale } = ScaleUnits;

export default Header = () => {

    const {
        mainContainerStyle,
        spaceContainerStyle,
        menuContainerStyle,
        notificationIconStyle,
        hameMenuIconStyle,
        hameMenuIconContainerStyle,
        notificationIconContainerStyle
     } = styles;

    return (
        <View style={mainContainerStyle}>

            <View style={spaceContainerStyle} />
               
            <View style={menuContainerStyle}>
                <TouchableOpacity style={notificationIconContainerStyle}>
                    <Image
                        style={notificationIconStyle}
                        source={header.Notification}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={hameMenuIconContainerStyle}>
                    <Image
                        style={hameMenuIconStyle}
                        source={header.HamMenuIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {

    mainContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.TRANSPARENT
    },
    spaceContainerStyle: {
        flex: 0.8
    },
    menuContainerStyle: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center'
    },
    notificationIconContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: 64,
        // width: 64,
    },
    hameMenuIconContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: 48,
        // height: 48,
    },
    notificationIconStyle: {
        height: scale(54),
        width: scale(54),
        resizeMode: 'contain',
    },
    hameMenuIconStyle: {
        width: scale(54),
        height: scale(54),
        resizeMode: 'contain',

    }
}