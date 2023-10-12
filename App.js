import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Balance from './components/Balance';
import Card from './components/Card';
import Transactions from './components/Transactions';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (

    <SafeAreaView>
      <View style={styles.container}>
        <Card />
        <Balance />
        <Transactions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F2F1F1"
  }
});
