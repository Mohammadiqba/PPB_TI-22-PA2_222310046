import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
// import MyBioClass from './Tugas PPB(LAB)/TUGAS 2/no 4/MybioClass';
// import MyBioFunction from './Tugas PPB(LAB)/TUGAS 2/no 4/MyBioFunction';
// import PortfolioScreen from './Tugas PPB(LAB)/TUGAS 1/Portofolio';
// import No1 from './Tugas PPB(LAB)/TUGAS 2/no 1 dan 2/no1';
// import HistoryBicycle from './Tugas PPB(LAB)/TUGAS 2/no 1 dan 2/HistoryBicycle';
// import ProfilePicture from './Tugas PPB(LAB)/TUGAS 2/no 1 dan 2/ProfilePicture';
// import No3 from './Tugas PPB(LAB)/TUGAS 2/no 3';
import DataDiri from './Tugas PPB(LAB)/TUGAS 3/DataDiri';

export default function App() {
  return (
    // <ScrollView style={styles.container}>
      <View style={styles.container}>
        <DataDiri/>
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
