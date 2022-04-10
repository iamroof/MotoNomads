import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = props => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.show}
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={props.show}
            size="large"
            color="#FFD837"
          />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;
