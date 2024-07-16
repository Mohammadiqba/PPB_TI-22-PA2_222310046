import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const friends = [
  { name: 'Zaki', username: 'Zaki Aljabbar' },
  { name: 'Adrian', username: 'Adrian Adhari' },
  { name: 'Hana', username: 'Hana Yulia Rahmah' },
  { name: 'Lukman', username: 'Lukman Nurhakim' },
  { name: 'Cindy', username: 'Cindy Kevina' },
  { name: 'Erdiana', username: 'Erdiana Ragil Syawala' },
  { name: 'Fawas', username: 'Mohamad Fawaz Tauhid Ridho' },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

export default function MyFriendsScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
      <FlatList
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{item.name}</Text>
              <Text style={styles.friendUsername}>{item.username}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendInfo: {
    flexDirection: 'column',
  },
  friendName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  friendUsername: {
    color: '#ccc',
  },
  followButton: {
    backgroundColor: '#800080',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
  },
});
