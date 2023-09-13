import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import DATA from '../data/chatdata'
import { MaterialCommunityIcons } from 'react-native-vector-icons'


const Chat = () => {
  const [chatData, setChatData] = useState(DATA)

  useEffect(() => {
    setChatData(DATA)
  })

  return (
    <View style={styles.container}>
      <FlatList 
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View style={styles.chatWrapper}>
              <Image source={item.photos} style={styles.image} />
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <View style={styles.message}>
                  <Text style={styles.chatMessage}>{item.lastMessage}</Text>
                </View>
              </View>
            </View>
        )}
      />

      <TouchableOpacity
      style={styles.chatButton}
      onPress={() => ('#')}
      >
        <MaterialCommunityIcons name='android-messages' size={24} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Chat;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 16,
    },
    chatWrapper: {
      flexDirection: 'row',
      marginRight: 16,
      marginLeft: 16
    },
    image: {
      width: 50,
      height: 50,
      backgroundColor: '#128c7e',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    chatContent:{
      flex: 5,
      borderBottomWidth: 0,
      marginLeft: 16,
      paddingBottom: 16,
      marginBottom: 13 
    },
    chatHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 2,
      marginTop: 4
    },
    chatName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    chatTime: {
      fontSize: 12,
      color: '#a0a09e'
    },
    message: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    chatMessage: {
      fontSize: 14,
      color: '#a0a09e',
      width: '90%'
    },
    chatButton: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      backgroundColor: '#0e806a',
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'

    }
  });