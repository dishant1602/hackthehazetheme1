import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { WebView } from "react-native-webview";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.github.com/dishant1602/hackthehazetheme1/blob/main/README.md" }}
        style={{ flex: 1 }}
        javaScriptEnabled={false}
        scrollEnabled={true}
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
