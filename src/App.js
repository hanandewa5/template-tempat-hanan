import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Content} from 'native-base';
import Header from './components/Header';
import Cards from './components/Cards';
import {dataDeal,dataPopular} from './_constants/data_constants';


export default function App() {
  return (
    <Container>
      <Content>
        <Header title="Deals of the Day" />
        <Cards data={dataDeal} />

        <Header title="Popular place in Jakarta" />
        <Cards data={dataPopular} />
      </Content>
    </Container>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};
