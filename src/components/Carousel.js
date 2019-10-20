import React from 'react';
import { FlatList } from 'react-native';
import Cards from './Cards';

export default function Carousel(props){
    return(
        <FlatList
            data={props.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem = {Cards}
        />
    );
}