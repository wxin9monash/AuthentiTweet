import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({    
    
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // alignItems: 'center',
        justifyContent:'center',    
      }, 

      title:{
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
      },

      button:{
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 5,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
      },

      searchButton:{
        backgroundColor: 'white',
        height: 50,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 100,
      },

      searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
      }
  });

export default styles
