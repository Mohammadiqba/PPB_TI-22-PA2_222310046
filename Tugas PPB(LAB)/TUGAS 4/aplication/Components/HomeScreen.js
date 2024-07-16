import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.stories}>
        {["Zaki", "Adrian", "Hana", "Lukman", "Cindy"].map((name, index) => (
          <View key={index} style={styles.storyItem}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/image-vector/user-icon-flat-style-person-260nw-1212192763.jpg' }}
              style={styles.storyImage}
            />
            <Text style={styles.storyText}>{name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.post}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://www.shutterstock.com/image-vector/user-icon-flat-style-person-260nw-1212192763.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Shepilla</Text>
        </View>
        <Image
          source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2021/12/31/suasana-kawasan-monas-pukul-1910-wib_169.jpeg?w=1200' }}
          style={styles.postImage}
        />
        <Image
          source={{ uri: 'https://www.photo-kako.com/sample/motion-blur.jpg' }}
          style={styles.postImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stories: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
  },
  post: {
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
});
