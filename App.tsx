import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { createRxDatabase } from 'rxdb';
// because we use the PouchDB RxStorage, we have to add the indexeddb adapter first.
import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';
addPouchPlugin(require('pouchdb-adapter-idb'));

export default function App() {
  var init = async function init() {
    try {
      const db = await createRxDatabase({
        name: 'heroesdb',                   // <- name
        storage: getRxStoragePouch('idb'),  // <- RxStorage
        password: 'myPassword',             // <- password (optional)
        multiInstance: true,                // <- multiInstance (optional, default: true)
        eventReduce: true                   // <- eventReduce (optional, default: true)
      });
      debugger
    } catch (rxTryError) {
      debugger
    }
  }
  init()
  return (
    <View style={styles.container}>
      <Text h1 style={{textAlign: 'center'}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
