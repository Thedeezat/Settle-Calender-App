import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import icons from "../constants/icon";

export default function WeekDayHeader() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get current month in string format
  const getCurrentMonth = (): string => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentMonth = currentDate.getMonth();
    return monthNames[currentMonth];
  };

  // Get the current week (7 days, starting from Sunday)
  const getWeekDates = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  // Render the week calendar with days
  const renderWeekCalendar = () => {
    const weekDates = getWeekDates();

    return weekDates.map((date, index) => {
      const isToday = currentDate.toDateString() === date.toDateString();
      const day = date.getDate();
      const dayName = date.toLocaleString("en-US", { weekday: "short" });

      return (
        <View
          key={index}
          style={[styles.dayContainer, isToday && styles.activeDay]}
        >
          <Text style={[styles.dayText, isToday && styles.activeDayText]}>
            {dayName}
          </Text>
          <Text style={[styles.dayNumber, isToday && styles.activeDayNumber]}>
            {day}
          </Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>{getCurrentMonth()}</Text>
        <Image source={icons.down_arrow} resizeMode="contain" />
      </View>
      <View style={styles.weekDays}>{renderWeekCalendar()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  month: {
    fontSize: 32,
    fontFamily: "RedHatDisplay-bold",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 40,
  },
  dayText: {
    fontSize: 13,
    color: "#FFFFFF",
    fontFamily: "RedHatDisplay-medium",
    textAlign: "center",
    marginBottom: 1.5,
  },
  dayNumber: {
    fontSize: 16,
    fontFamily: "RedHatDisplay-bold",
    color: "#FFFFFF",
  },
  activeDay: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  activeDayText: {
    color: "#000000",
  },
  activeDayNumber: {
    color: "#000000",
  },
});
