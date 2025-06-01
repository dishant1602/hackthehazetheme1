// src/components/UserCard.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const getRandomColor = (seed) => {
  // Create a color based on a user-specific seed (e.g., ID)
  const hue = (seed * 137.508) % 360; // golden angle approximation
  return `hsl(${hue}, 70%, 60%)`;
};

const UserCard = ({ user, onPress }) => {
  const imageUrl = user.profileImage;
  const avatarBgColor = getRandomColor(user.id);
  console.log(user);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor: avatarBgColor }]}>
    <View style={{ flexDirection: "row", alignItems: "flex-start", width: "100%" }}>
      <View style={styles.imageWrapper}>
        <View style={styles.squareBackground} />
        <Image
          source={{ uri: imageUrl }}
          style={styles.overlappingImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={{ height: 1, backgroundColor: "#FFFFFF", marginVertical: 4 }} />
        <Text style={styles.subject}>Subjects: {user.subjects}</Text>
        <Text style={styles.qualification}>Qualification: {user.qualification.join(", ")}</Text>
      </View>
    </View>
  </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
    imageWrapper: {
    width: 60,
    height: 60,
    //position: "relative",
    marginRight: 16,
    alignItems: "left"
  },
  squareBackground: {
    width: 70,
    height: 60,
    backgroundColor: "#6C5CE7", // or use a random color function
    borderRadius: 8,
    //position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  overlappingImage: {
    width: 50,
    height: 90,
    borderRadius: 8,
    position: "absolute",
    top: -30,   // overlap the top of the square
    left: 10,
    zIndex: 0,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 16,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular"
  },
  subject: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "Poppins-Regular",
    marginTop: 4,
  },
  qualification: {
    fontSize: 12,
    color: "#ffffff",
    fontFamily: "Poppins-Regular",
    marginTop: 5,
  },
});


// const styles = StyleSheet.create({
//   cardWrapper: {
//     alignItems: "center",
//     marginBottom: 24,
//     position: "relative",
//   },
//   avatarWrapper: {
//     position: "absolute",
//     top: 0,
//     zIndex: 2,
//     backgroundColor: "#000",
//     padding: 4,
//     borderRadius: 50,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   card: {
//     marginTop: 40, // ensures space for avatar
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//     paddingBottom: 20,
//     width: "90%",
//     alignItems: "center",
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 8,
//   },
//   email: {
//     color: "#555",
//     marginTop: 4,
//   },
//   company: {
//     color: "#888",
//     marginTop: 4,
//     fontStyle: "italic",
//   },
// });

export default UserCard;
