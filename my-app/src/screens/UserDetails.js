import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function UserDetails({ route }) {
  const { user } = route.params;
  const query = encodeURIComponent(`${user.name} physics wallah`);
  const googleSearchUrl = `https://www.google.com/search?q=${query}`;
  console.log(googleSearchUrl);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: googleSearchUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  subject: { marginTop: 6 },
  qualification: { marginTop: 6 },
});
