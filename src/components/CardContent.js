import React from 'react';
import {Text, View} from 'react-native';
import {CardItem} from 'native-base';
import {GStyle} from '../_constants';

export default function CardContent(props) {
  return (
    <CardItem style={styles.container}>
      <Text style={[GStyle.textHeader, styles.text]}>{props.title}</Text>
      <Text style={[GStyle.textGreyDark, styles.text]}>{props.location}</Text>
      <Text style={[GStyle.textDesc, styles.text]}>{props.descs}</Text>
      
    </CardItem>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    paddingVertical: 3,
  },
  bottomContent :{
    width : '100%',
    backgroundColor: '#F6F5FB',
  }
};
