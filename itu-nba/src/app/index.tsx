import SignalCounter from "@componnents/SignalCounter";
import { Text, View } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import InsertFrom from "@componnents/joueur/InsertForm";

export default function App() {
  return (
    <View
      flex={1}
      backgroundColor="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <InsertFrom />
      <StatusBar style="auto" />
    </View>
  );
}
