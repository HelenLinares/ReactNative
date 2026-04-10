import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2196F3',
    paddingTop: 40,
    paddingBottom: 15,
    elevation: 5
  },

  navItem: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingBottom: 5
  },

  activo: {
    borderBottomWidth: 3,
    borderColor: 'white',
    color: '#FFD700'
  },

  item: {
    fontSize: 18,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    borderBottomWidth: 0
  }
});