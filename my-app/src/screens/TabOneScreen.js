import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator, ImageBackground } from "react-native";
import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";
import UserCard from "../components/UserCards";
import { fetchUsers } from "../utils/api";

export default function TabOneScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
  fetchUsers()
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Failed to fetch users:", error);
      setLoading(false);
    });
}, []);

  const renderItem = ({ item }) => <UserCard user={item} 
  onPress={() => navigation.navigate("UserDetails", { user: item })}/>;
  

  return (
    
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#888" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
});
