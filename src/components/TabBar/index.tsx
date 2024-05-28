// Footer.tsx
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Footer = () => {  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/IconHome.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/IconSearch.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/IconPlus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/IconChat.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/IconProfile.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

