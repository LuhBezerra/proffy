import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={{ uri: 'https://avatars1.githubusercontent.com/u/50994958?s=460&u=aae201dc8808226ad281e2e03b661fcfa9aa6a19&v=4'}} 
          style={styles.avatar}  
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Luh Bezerra</Text>

          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        sasaddsdjsdjsdsjdsdjsdojsdidjsodjsjds
        {'\n'}{'\n'}
        fokjifeifjjiisjeijeicmeicmadlk akdmk mdk dd  mfeijfei O PFAPI EJF EFIJI IJF
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;