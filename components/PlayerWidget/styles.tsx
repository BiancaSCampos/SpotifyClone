import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    position: 'absolute',
    backgroundColor: '#131313',
    bottom: 39,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    paddingRight: 10,
  },

  albumScreen: {
    flexDirection: 'row',
    marginVertical: 10,
    position: 'absolute',
    backgroundColor: 'pink',
    bottom: 0,
  },

  rightContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artist: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },

  iconHeart: {
    marginRight: 15,
  },
});

export default styles;
