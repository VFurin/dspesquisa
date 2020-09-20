import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreatedRecord = () => {
    return (
        <>
            <Header />
            <Text>Cadastrar</Text>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default CreatedRecord;
