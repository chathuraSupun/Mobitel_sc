import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, BackgroundImage } from '../../Components';
import { Images, Constant } from '../../Config';
import PackageUsageSection from './PackageUsageSection';
import AppNavigationSection from './AppNavigationSection';
import DataUsageSection from './DataUsageSection';

const { COLORS } = Constant;
const { dashboard } = Images;

export default class Dashboard extends Component {
    render() {

        const {
            mainContainerStyle,
            headerContainerStyle,
            packageUsageContainerStyle,
            dataUsageContainerStyle,
            appNavigationContainerStyle } = styles;

        return (
            <View style={mainContainerStyle}>

                <BackgroundImage sourcePath={dashboard.DashboardBack} />

                <View style={headerContainerStyle}>
                    <Header />
                </View>

                <View style={packageUsageContainerStyle}>
                    <PackageUsageSection
                        voicePackageRemaining={452}
                        voicePackageTotal={1000}
                        smsPackageRemaining={50}
                        smsPackageTotal={150}
                        dataPackageRemaining={60}
                        accountNo={711234567}
                        daytimeRemainingData={232}
                        daytimeTotalData={250}
                        nighttimeRemainingData={54}
                        nightimeTotalData={2500} />
                </View>

                <View style={dataUsageContainerStyle}>
                    <DataUsageSection
                        daytimeRemainingData={3}
                        daytimetotalData={7}
                        nighttimeRemainingData={5}
                        nighttimetotalData={10}
                        outstandingAmount={2037.00}
                        excessedData={30}
                        exessedCredit={15.60} />
                </View>

                <View style={appNavigationContainerStyle}>
                    <AppNavigationSection />
                </View>
            </View>
        );
    }
}

const styles = {

    mainContainerStyle: {
        flex: 1,
    },
    headerContainerStyle: {
        flex: 0.063
    },
    packageUsageContainerStyle: {
        flex: 0.362,
        justifyContent: 'center',
        alignItems: 'stretch',
        // borderWidth: 1
    },
    dataUsageContainerStyle: {
        flex: 0.399,
        justifyContent: 'center',
        alignItems: 'stretch',
        // borderWidth: 1
    },
    appNavigationContainerStyle: {
        flex: 0.176,
        justifyContent: 'center',
        alignItems: 'stretch',
        // borderWidth: 1

    }
}