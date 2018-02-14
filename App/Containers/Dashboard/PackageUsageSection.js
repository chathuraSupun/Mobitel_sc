import React from 'react';
import { View, Text, Image } from 'react-native';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import LinearGradient from 'react-native-linear-gradient';

import { ScaleUnits, Constant, Images } from '../../Config';

const { scale, verticalScale } = ScaleUnits;
const { COLORS, FONT_FAMILY } = Constant;
const { dashboard } = Images;

export default PackageUsageSection = (props) => {

    const {
        mainContainerStyle,
        voicePackageUsageContainerStyle,
        smsPackageUsageContainerStyle,
        dataPackageUsageContainerStyle,
        verticalLineStyle,
        voiceIconStyle,
        PackageTitleContainerStyle,
        packageTextStyle,
        packageRemainingTextStyle,
        packageTotalTextStyle,
        dataIconStyle,
        dataPackageRemainingTextStyle,
        gaugeFillContainerStyle,
        downArrowIconStyle,
        accountNoTextStyle,
        accountNoContainerStyle,
        dataVerticalLine,
        membershipIcon,
        membershipTextStyle,
        memebershipContainerStyle,
        smsSectionContainerStyle
     } = styles;

    const { voicePackageRemaining,
        voicePackageTotal,
        smsPackageRemaining,
        smsPackageTotal,
        daytimeRemainingData,
        daytimeTotalData,
        nighttimeRemainingData,
        nightimeTotalData,
        dataPackageRemaining,
        accountNo
     } = props;

    return (
        <View style={mainContainerStyle}>
            <View style={voicePackageUsageContainerStyle}>

                <View style={PackageTitleContainerStyle}>
                    <Image
                        style={voiceIconStyle}
                        source={dashboard.VoiceIcon} />
                    <Text style={packageTextStyle}>Voice</Text>
                </View>

                <Text style={packageRemainingTextStyle}>{voicePackageRemaining}min</Text>
                <View style={verticalLineStyle} />
                <Text style={packageTotalTextStyle}>Left of {voicePackageTotal}min</Text>
            </View>

            <View style={dataPackageUsageContainerStyle}>
                <View style={accountNoContainerStyle}>
                    <Text style={accountNoTextStyle}>Account : {accountNo}</Text>
                    <Image
                        style={downArrowIconStyle}
                        source={dashboard.DownArrowIcon} />
                </View>        
                    <GaugeProgress
                        size={scale(386)}
                        width={scale(15)}
                        fill={70}
                        rotation={90}
                        cropDegree={90}
                        tintColor="#4682b4"
                        backgroundColor={COLORS.GAUGE_BACK}
                        stroke={[2, 2]} //For a equaly dashed line
                        strokeCap="circle" >
                        {(fill) => (
                            <View style={gaugeFillContainerStyle}>
                                <View style={PackageTitleContainerStyle}>
                                    <Image
                                        style={dataIconStyle}
                                        source={dashboard.DataIcon} />
                                    <Text style={packageTextStyle}>Data</Text>
                                </View>
                                <Text style={dataPackageRemainingTextStyle}>{dataPackageRemaining}%</Text>
                                <View style={dataVerticalLine} />
                            </View>
                        )}
                    </GaugeProgress>

                <Text style={packageTotalTextStyle}>Day time {daytimeRemainingData}mb/ {daytimeTotalData}mb</Text>
                <Text style={packageTotalTextStyle}>Night time {nighttimeRemainingData}mb/ {nightimeTotalData}mb</Text>
            </View>

            <View style={smsPackageUsageContainerStyle}>

                <View style={memebershipContainerStyle}>
                    <Image
                        style={membershipIcon}
                        source={dashboard.GoldMembership} />
                    <Text style={membershipTextStyle}>Gold{"\n"} Membership</Text>

                </View>

                <View style={smsSectionContainerStyle}>
                    <View style={PackageTitleContainerStyle}>
                        <Image
                            style={voiceIconStyle}
                            source={dashboard.SMSIcon} />
                        <Text style={packageTextStyle}>SMS</Text>
                    </View>

                    <Text style={packageRemainingTextStyle}>{smsPackageRemaining}</Text>
                    <View style={verticalLineStyle} />
                    <Text style={packageTotalTextStyle}>Left of {smsPackageTotal}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = {
    mainContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: verticalScale(23),
        paddingBottom: verticalScale(55),
        paddingRight: scale(60),
        paddingLeft: scale(60)
    },
    voicePackageUsageContainerStyle: {
        flex: 0.25,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingBottom: verticalScale(28),
        // borderWidth: 1
        
    },
    dataPackageUsageContainerStyle: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
    },
    smsPackageUsageContainerStyle: {
        flex: 0.25,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingBottom: verticalScale(28),
        // borderWidth: 1
        
    },
    PackageTitleContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(13),
    },
    accountNoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: scale(83),
        // borderWidth: 1
    },
    memebershipContainerStyle: {
        flex: 0.5,
        justifyContent: 'flex-start',
        paddingTop: scale(55),
        alignItems: 'center'
    },
    smsSectionContainerStyle: {
        flex: 0.5,
        justifyContent: 'flex-end'
    },
    verticalLineStyle: {
        alignSelf: 'stretch',
        height: scale(6),
        backgroundColor: COLORS.LINE_SEPERATOR,
        marginBottom: verticalScale(8),
        marginLeft: scale(55),
        marginRight: scale(55)
    },
    voiceIconStyle: {
        height: scale(33),
        width: scale(33),
        resizeMode: 'contain'
    },
    dataIconStyle: {
        height: scale(43),
        width: scale(43),
        resizeMode: 'contain'
    },
    packageTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(36),
        lineHeight: scale(44),
        color: COLORS.PACKAGE_TITLE_TEXT,
        paddingLeft: scale(8)
    },
    packageRemainingTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(55),
        lineHeight: scale(57),
        color: COLORS.WHITE,
        textAlign: 'center',
        marginBottom: verticalScale(9)
    },
    packageTotalTextStyle: {
        fontFamily: FONT_FAMILY.LATO_LIGHT,
        fontSize: scale(28),
        lineHeight: scale(34),
        color: COLORS.PACKAGE_TOTAL_TEXT,
        textAlign: 'center'
    },
    dataPackageRemainingTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(80),
        lineHeight: scale(96),
        color: COLORS.WHITE,
        textAlign: 'center',
        marginBottom: scale(43)
    },
    gaugeFillContainerStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    dataVerticalLine: {
        width: scale(148),
        height: scale(6),
        backgroundColor: COLORS.LINE_SEPERATOR,
        marginBottom: verticalScale(8),
        // marginLeft: scale(55),
        // marginRight: scale(55)
    },
    downArrowIconStyle: {
        height: scale(37),
        width: scale(37),
        resizeMode: 'contain'
    },
    accountNoTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(36),
        lineHeight: scale(44),
        color: COLORS.WHITE,
        textAlign: 'center',
        marginRight: scale(20)
    },
    membershipIcon: {
        height: scale(76),
        width: scale(64),
        resizeMode: 'contain'
    },
    membershipTextStyle: {
        fontFamily: FONT_FAMILY.LATO_REGULAR,
        fontSize: scale(30),
        lineHeight: scale(35),
        color: COLORS.WHITE,
        textAlign: 'center',
    }
}