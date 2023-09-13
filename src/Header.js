import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
         <Text style={styles.headerText}>WhatsApp</Text>
         <View style={styles.iconContainer}>
            <Feather name='camera' size={20} color='white' style={styles.icon} />
            <Fontisto name='search' size={20} color='white' style={styles.icon} />
            <MaterialCommunityIcons name='dots-vertical' size={21} color='white' style={styles.icon} />
         </View>
        </View>
      
    </View> 
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0e806a',
      paddingTop: 80,
      paddingBottom: 8,
    },

    headerContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginHorizontal: 16, 
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        marginLeft: 20,
    }

  });