import React from 'react';
import { View, Text } from 'react-native';
import { GStyle } from '../_constants';
import {Icon} from 'native-base';

export default function Header(props) {
    return(
        <View style={styles.header}>
            <Text style={GStyle.textHeader}>
                {props.title}
            </Text>
            <View style={styles.textGo}>
                <Text style={GStyle.textPurple}>{(`See All `).toUpperCase()}</Text>
                <Icon name="ios-arrow-forward" type="Ionicons" style={styles.icon} />
            </View>
        </View>
    )
}

const styles = {
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    textGo : {
        fontSize: 15,
        flexDirection : "row",
        alignItems: 'center',
    },
    icon : {
        color : "#6259BA",
        fontSize : 20,
        fontWeight: 'bold',
    }
}