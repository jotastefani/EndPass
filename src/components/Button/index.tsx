import { Pressable, Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
  onClick: () => void;
  title: string;
  btnStyle: ViewStyle;
}

export default function Button({ onClick, title, btnStyle } : Props) {
  
  return (
    <View style={styles.container}>
      <Pressable  style={btnStyle}
      onPress={onClick}
      >
      <Text style={styles.text1} >{title}</Text>
      </Pressable>  
    </View>
  );

}