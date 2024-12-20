import React from "react";
import { View, StyleSheet, Image, ScrollView, Platform } from "react-native";
import icons from "../constants/icon";
import WeekDayHeader from "@/components/WeekDayHeader";
import CalendarEvent from "@/components/CalenderEvent";

export default function WeeklyOverview() {
  const Navigation = () => (
    <View style={styles.navigation}>
      <View style={styles.leftNav}>
        <Image
          source={icons.avater}
          style={styles.avaterIcon}
          resizeMode="contain"
        />
        <Image
          source={icons.crown}
          style={styles.crownicon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightNav}>
        <Image source={icons.menu} style={styles.menuicon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={icons.curve1}
          style={styles.curve1}
          resizeMode="contain"
        />
        <View style={styles.header}>
          <Navigation />
          <WeekDayHeader />
        </View>
        <CalendarEvent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    paddingTop: Platform.OS === "android" ? 50 : 60,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: Platform.OS === "android" ? 10 : 15,
  },
  curve1: {
    position: "absolute",
    width: 342,
    height: 191,
    top: 39,
    left: 0,
  },
  header: {
    marginHorizontal: 25,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avaterIcon: {
    width: 45,
    height: 45,
  },
  crownicon: {
    width: 44,
    height: 44,
    position: "absolute",
    top: -24,
    right: -14,
  },
  leftNav: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  rightNav: {
    flexDirection: "row",
  },
  menuicon: {
    width: 35,
    height: 35,
  },
});
