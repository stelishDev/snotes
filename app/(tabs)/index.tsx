import { StyleSheet, Text } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View>
      <Text className='text-3xl justify-center text-center pt-1 text-blue-500'>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
