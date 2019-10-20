import React from 'react';
import {Text, Image, View} from 'react-native';
import {CardItem, Badge, Icon} from 'native-base';
import {GStyle} from '../_constants';

export default function CardHeader(props) {
  return (
    <CardItem style={styles.container}>
      <Image source={props.img} resizeMode="cover" style={styles.image} />
      <Badge success style={styles.badge}>
        <Icon
          name="md-star"
          style={{fontSize: 20, color: '#fff'}}
          type="Ionicons"
        />
        <Text style={GStyle.textWhite}> {props.rate}</Text>
      </Badge>
      <Icon
        name={props.liked ? 'md-heart' : 'md-heart-empty'}
        active={true}
        type="Ionicons"
        style={styles.icon}
      />
      <View style={[styles.type,{backgroundColor : typeColor[props.type]}]}>
        <Text style={GStyle.textWhite}>{props.type}</Text>
      </View>
    </CardItem>
  );
}

const styles = {
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  badge: {
    position: 'absolute',
    left: 8,
    top: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 8,
    top: 8,
    fontSize: 28,
    color: '#fff',
  },
  type :{
    position: "absolute",
    bottom : 0,
    left : 0,
    borderTopRightRadius : 30,
    paddingVertical : 5,
    paddingLeft: 8,
    paddingRight : 20
  }
};

const typeColor = {
  Restaurant: '#F4B253',
  Work: '#B067DC',
  Beauty : '#F097EF',
  Sports : '#64DBCB'
};
