import React from 'react';
import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import {Card} from 'native-base';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
const {width: vw, height: vh} = Dimensions.get('window');

export default function Cards(props) {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardHeader
            img={item.imgSrc}
            type={item.type}
            rate={item.rate}
            liked={item.liked}
          />
          <CardContent
            title={item.name}
            location={item.location}
            persentase={item.persentase}
            descs={item.descs}
          />
          <CardFooter
            persentase={item.persentase}
            bookedTimes={item.bookedTimes}            
          />
        </Card>
      </View>
    );
  };

  return (
    <FlatList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={_renderItem}
    />
  );
}

const styles = {
  container: {
    margin: 10,
  },
  card: {
    width: vw * 0.8,
    height: vh * 0.7,
    borderRadius: 8,
  },
};
