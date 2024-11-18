import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import icons from "../../constants/icon";
import { useEvent } from "../../components/EventContext";

interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  subTitle: string;
  subDescription: string;
  attendees: string[];
  eventDuration: string;
  buttonLabels: string[];
  isCompleted: boolean;
  minutes?: { title: string; time: string }[];
}
interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const [animation] = useState(new Animated.Value(0));
  const { setIsEventClose } = useEvent();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [Dimensions.get("window").height, 0],
        }),
      },
    ],
  };

  const onClosePress = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsEventClose(true);
  };

  return (
    <>
      {/* Black Overlay */}
      <View style={styles.overlay} />

      {/* White container */}
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.eventWrapper}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={onClosePress} activeOpacity={1}>
              <Image source={icons.cancel} style={styles.icon_style} />
            </TouchableOpacity>
            <View style={styles.editIcon_container}>
              <Image
                source={icons.edit}
                style={[styles.icon_style, styles.edit_icon]}
              />
            </View>
          </View>
          <View style={styles.eventTime_container}>
            <Text style={styles.eventTime}>{event.time}</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.description}</Text>
          </View>
          <View style={styles.attendeesContainers}>
            <Image source={icons.girl} style={styles.attendeeImage} />
            <Image source={icons.woman} style={styles.attendeeImage} />
            <Image source={icons.man} style={styles.attendeeImage} />
            <Image source={icons.womanProfile} style={styles.attendeeImage} />
            <Image source={icons.number2} style={styles.attendeeImage} />
          </View>

          <View style={styles.content}>
            <View style={styles.section}>
              {event.minutes && event.minutes.length > 0 ? (
                <Text style={styles.sectionTitle}>Minutes Plan</Text>
              ) : (
                <Text style={[styles.sectionTitle, styles.meetingEnded]}>
                  Meeting Ended!
                </Text>
              )}

              <View style={styles.itemContainer}>
                {event.minutes?.map((minute, index) => (
                  <View
                    key={index}
                    style={[styles.item, index === 0 && styles.item_1]}
                  >
                    <Text style={styles.itemTitle}>{minute.title}</Text>
                    <Text style={styles.itemTime}>{minute.time}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    // Black overlay with opacity
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1,
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    position: "absolute",
    height: "98%",
    flex: 1,
    bottom: 0,
    elevation: 3,
    zIndex: 2,
  },
  eventWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  avatarContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  icon_style: {
    width: 48,
    height: 48,
  },
  editIcon_container: {
    backgroundColor: "#EDEDED",
    width: 48,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
  },
  edit_icon: {
    width: 20,
    height: 20,
  },
  eventTime_container: {
    backgroundColor: "#000000",
    borderRadius: 80,
    paddingHorizontal: 34,
    paddingVertical: 16,
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 172,
    marginTop: "10%",
  },
  eventTime: {
    fontFamily: "RedHatDisplay-medium",
    fontSize: 14,
    color: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
    marginTop: 3,
  },
  title: {
    fontFamily: "RedHatDisplay-bold",
    fontSize: 24,
    paddingBottom: 2,
    color: "#000000",
  },
  subtitle: {
    fontFamily: "RedHatDisplay-medium",
    fontSize: 14,
    color: "#000000",
    marginTop: 3,
  },
  attendeesContainers: {
    flexDirection: "row",
    borderColor: "#EDEDED",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 120,
    maxWidth: 400,
  },
  attendeeImage: {
    width: 40,
    height: 40,
    borderRadius: 16,
    marginLeft: -18,
  },
  content: {
    width: "100%",
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: "RedHatDisplay-bold",
    paddingVertical: 20,
  },
  itemContainer: {
    paddingHorizontal: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#EDEDED",
    borderRadius: 40,
    padding: 20,
    width: "100%",
  },
  item_1: {
    backgroundColor: "#B3FC6A",
  },
  itemTitle: {
    fontSize: 20,
    fontFamily: "RedHatDisplay-semibold",
    color: "#181818",
    maxWidth: 200,
  },
  itemTime: {
    fontSize: 14,
    fontFamily: "RedHatDisplay-medium",
    color: "#181818",
  },
  meetingEnded: {
    marginTop: 150,
  },
});

export default EventDetails;
