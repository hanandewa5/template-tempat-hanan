import React from 'react';
import {Text, View,FlatList,Dimensions} from 'react-native';
import {CardItem, Icon} from 'native-base';
import {GStyle} from '../_constants';
const {width: vw, height: vh} = Dimensions.get('window');

export default function CardFooter(props) {

  const _renderItem = ({item}) => {
      return(
          <View style={styles.persentaseItem}>
              <Text style={GStyle.textPurple}>{item.count}</Text>
              <Icon name={iconName[item.day]} style={{fontSize: 25, color:"#6259BA"}} type="Ionicons" />
              <Text style={GStyle.textBlack}>{item.time}</Text>
          </View>
      );
  }

  return (
    <View style={styles.container}>
      <View style={styles.persentase}>
        <FlatList 
            data={props.persentase}
            contentContainerStyle={styles.persentaseContent}
            keyExtractor={(item)=>item.id}
            renderItem={_renderItem}
        />
      </View>
      <CardItem style={styles.booked}>
        <Text style={GStyle.textBlack}>
          Booked <Text style={GStyle.textBold}>{props.bookedTimes}</Text> times since yesterday.
        </Text>
      </CardItem>
      <CardItem style={styles.btnBook}>
        <Text style={GStyle.textOrange}>{`Book Now`.toUpperCase()}</Text>
      </CardItem>
    </View>
  );
}

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: '#F6F5FB',
    display: 'none',
    width: '100%',
    flexDirection: 'column',
  },
  btnBook: {
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'center',
    borderColor: '#E2E2E7',
    backgroundColor: '#F6F5FB',
  },
  booked :{
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#F6F5FB',
  },
  persentase : {
    width: '100%',
    backgroundColor: '#F6F5FB',
    borderTopWidth : 1,
    borderColor: '#E2E2E7',
  },
  persentaseContent :{
    flexDirection : "row",
    flexGrow: 1,
  },
  persentaseItem:{
      width : vw * 0.3,
      flex :1,
      justifyContent :'center',
      alignItems: 'center',
  }
};

const iconName =  {
    noon : "md-partly-sunny",
    night : "md-moon"
}