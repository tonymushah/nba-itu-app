import { Text, View } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View
      flex={1}
      backgroundColor="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
