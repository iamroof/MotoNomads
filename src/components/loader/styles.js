import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#rgba(255, 255, 255, 1)',
    height: 70,
    width: 70,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
