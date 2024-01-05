import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title/title';
import Form from "./src/components/form/form"

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12E08E',
    paddingTop: 50,
    borderRadius: 30,
  },
});
