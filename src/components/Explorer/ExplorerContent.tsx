// components/ExplorerContent.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ExplorerContentProps {
  text1: string;
  image1: string;
  text2: string;
  image2: string;
}

const ExplorerContent: React.FC<ExplorerContentProps> = ({ text1, image1, text2, image2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text1}</Text>
      <Image source={{ uri: image1 }} style={styles.image} />
      <Text style={styles.text}>{text2}</Text>
      <Image source={{ uri: image2 }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default ExplorerContent;
