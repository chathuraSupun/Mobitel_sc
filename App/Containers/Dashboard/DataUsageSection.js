import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Constant, Images, ScaleUnits } from '../../Config';

const { dashboard } = Images;
const { scale, verticalScale } = ScaleUnits;
const { FONT_FAMILY, FONT_SIZES, COLORS } = Constant;

export default dataUsageSection = (props) => {

    const { mainContainerStyle,
        dataPackageAmountContainerStyle,
        dataPackageUsageContainerStyle,
        leftSwipeContainerStyle,
        packageContainerStyle,
        rightSwipeContainerStyle,
        seperatorContainerStyle,
        arrowIconStyle,
        packageIconStyle,
        seperatorIconStyle,
        packageTitleTextStyle,
        dataRemainingTextStyle,
        dataTotalTextStyle,
        outstandingTextStyle,
        exessUsageTextStyle } = styles;

    const {
            daytimeRemainingData,
        daytimetotalData,
        nighttimeRemainingData,
        nighttimetotalData,
        outstandingAmount,
        excessedData,
        exessedCredit
        } = props;

    return (

        <View style={mainContainerStyle}>
            <LinearGradient style={{flex: 1, borderRadius: 100/3, marginLeft: scale(89), marginRight: scale(89)}}
                colors={[COLORS.TRANSPARENT,COLORS.GRADIENT_WHITE ]}>

                <View style={dataPackageUsageContainerStyle}>

                    <TouchableOpacity style={leftSwipeContainerStyle}>
                        <Image
                            style={arrowIconStyle}
                            source={dashboard.LeftArrowIcon} />
                    </TouchableOpacity>

                    <View style={packageContainerStyle}>
                        <Image
                            style={packageIconStyle}
                            source={dashboard.DaytimeData} />
                        <Text style={packageTitleTextStyle}>Day Time</Text>
                        <Text style={dataRemainingTextStyle}>{daytimeRemainingData}GB</Text>
                        <Text style={dataTotalTextStyle}>Left of {daytimetotalData}GB</Text>
                    </View>

                    <View style={seperatorContainerStyle}>
                        <Image
                            style={seperatorIconStyle}
                            source={dashboard.Separator} />
                    </View>

                    <View style={packageContainerStyle}>
                        <Image
                            style={packageIconStyle}
                            source={dashboard.NightTimeData} />
                        <Text style={packageTitleTextStyle}>Night Time</Text>
                        <Text style={dataRemainingTextStyle}>{nighttimeRemainingData}GB</Text>
                        <Text style={dataTotalTextStyle}>Left of {nighttimetotalData}GB</Text>
                    </View>

                    <TouchableOpacity style={rightSwipeContainerStyle}>
                        <Image
                            style={arrowIconStyle}
                            source={dashboard.RightArrowIcon} />
                    </TouchableOpacity>

                </View>

                <View style={dataPackageAmountContainerStyle}>
                    <Text style={outstandingTextStyle}>Outstanding -  Rs: {outstandingAmount}</Text>
                    <Text style={exessUsageTextStyle}>Excess Usage</Text>
                    <Text style={exessUsageTextStyle}>Data: {excessedData}MB Charges: Rs. {exessedCredit}</Text>
                </View>
            </LinearGradient>
        </View>

    );
}

const styles = {
    mainContainerStyle: {
        flex: 1,
    },
    dataPackageUsageContainerStyle: {
        flex: 0.63,
        flexDirection: 'row',
        // borderWidth: 1
        
    },
    dataPackageAmountContainerStyle: {
        flex: 0.37,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
        
    },
    leftSwipeContainerStyle: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // borderWidth: 1,
        paddingBottom: scale(55)
    },
    rightSwipeContainerStyle: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // borderWidth: 1,
        paddingBottom: scale(55)
        
    },
    seperatorContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    packageContainerStyle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowIconStyle: {
        height: verticalScale(115),
        width: scale(115),
        resizeMode: 'contain'
    },
    packageIconStyle: {
        height: verticalScale(136),
        width: scale(144),
        resizeMode: 'contain'
    },
    seperatorIconStyle: {
        height: verticalScale(363),
        width: scale(6),
        resizeMode: 'contain'
    },
    packageTitleTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(36),
        lineHeight: scale(44),
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    dataRemainingTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(64),
        lineHeight: scale(68),
        color: COLORS.WHITE,
        textAlign: 'center',
        marginTop: verticalScale(23)
    },
    dataTotalTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(36),
        lineHeight: scale(44),
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    outstandingTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(48),
        lineHeight: scale(56),
        color: COLORS.WHITE,
        textAlign: 'center',
        paddingBottom: verticalScale(35)
    },
    exessUsageTextStyle: {
        fontFamily: FONT_FAMILY.LATO_LIGHT,
        fontSize: scale(34),
        lineHeight: scale(41),
        color: COLORS.WHITE,
        textAlign: 'center',
    }
}

