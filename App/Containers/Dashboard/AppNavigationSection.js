import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Constant, ScaleUnits, Images } from '../../Config';

const { FONT_FAMILY, FONT_SIZES, COLORS } = Constant;
const { scale } = ScaleUnits;
const { dashboard } = Images;

export default AppNavigationSection = () => {

    const { mainContainerStyle,
        appNavIconStyle,
        roundButtonStyle,
        appNavIconContainerStyle,
        buttonTextStyle } = styles;

    return (
        <View style={mainContainerStyle}>
            <TouchableOpacity >
                <LinearGradient
                    style={roundButtonStyle}
                    colors={['#1D90C2', '#1E57A7']} >
                    <Text style={buttonTextStyle}>Pay Bill</Text>
                </LinearGradient>
            </TouchableOpacity>


            <TouchableOpacity style={appNavIconContainerStyle}>
                <Image
                    style={appNavIconStyle}
                    source={dashboard.AppNav} />
            </TouchableOpacity>

            <TouchableOpacity >
                <LinearGradient
                    style={roundButtonStyle}
                    colors={['#1D90C2', '#1E57A7']} >
                    <Text style={buttonTextStyle}>mCash</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View >
    );
}

const styles = {
    mainContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        width: scale(140),
        height: scale(140),
        borderWidth: 1,
    },
    appNavIconContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: scale(30),
        paddingLeft: scale(30),
    },
    appNavIconStyle: {
        width: scale(180),
        height: scale(180),
        resizeMode: 'contain'
    },
    buttonTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(30),
        lineHeight: scale(36),
        color: COLORS.WHITE,
        textAlign: 'center',
    }
}