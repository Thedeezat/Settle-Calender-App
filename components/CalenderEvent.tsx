import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import icons from "../constants/icon";
import events from "../constants/events";
import EventDetails from "@/app/event-details";
import { useEvent } from "./EventContext";

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

const CalendarEvent: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { isEventClose, setIsEventClose } = useEvent();

  useEffect(() => {
    if (selectedEvent) {
    }
  }, [selectedEvent]);

  const CardWrapper = ({
    children,
    id,
  }: {
    children: React.ReactNode;
    id: number;
  }) =>
    id === 3 ? (
      <ImageBackground
        source={icons.curve3}
        style={[styles.eventCard, styles.eventCard_3]}
      >
        {children}
      </ImageBackground>
    ) : (
      <View style={styles.eventCard}>{children}</View>
    );

  const handleOnPress = (event: Event) => {
    if (selectedEvent?.id === event.id && !isEventClose) {
      setIsEventClose(true);
    } else {
      setSelectedEvent(event);
      setIsEventClose(false);
    }
  };

  return (
    <>
      {selectedEvent && !isEventClose ? (
        <EventDetails event={selectedEvent} />
      ) : (
        <View style={styles.container}>
          {events.map((event: Event) => {
            if (event.isCompleted) {
              return (
                <TouchableOpacity
                  onPress={() => handleOnPress(event)}
                  activeOpacity={0.9}
                  key={event.id}
                >
                  <ImageBackground
                    source={icons.curve2}
                    style={styles.eventCardHeader}
                  >
                    <View>
                      <Text style={styles.title}>{event.title}</Text>
                      <Text style={styles.description}>
                        {event.description}
                      </Text>
                    </View>
                    <Image source={icons.tick} style={styles.tickIcon} />
                  </ImageBackground>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={event.id}
                  onPress={() => handleOnPress(event)}
                  activeOpacity={0.9}
                >
                  <CardWrapper id={event.id}>
                    <View style={styles.eventContent}>
                      <View style={styles.eventDetails}>
                        <Text style={styles.time}>{event.time}</Text>
                        <Text style={styles.subTitle}>{event.subTitle}</Text>
                        <Text style={styles.subDescription}>
                          {event.subDescription}
                        </Text>
                      </View>

                      <View style={styles.attendeeContainer}>
                        <Image
                          source={icons.girl}
                          style={styles.attendeeImage}
                        />
                        <Image
                          source={icons.woman}
                          style={styles.attendeeImage}
                        />
                        <Image
                          source={icons.man}
                          style={styles.attendeeImage}
                        />
                      </View>
                    </View>
                    <View style={styles.eventCardTime}>
                      <View style={styles.eventCardTime_container}>
                        <Text
                          style={[
                            styles.buttonStyle,
                            event.id === 3 && styles.eventCard_3_buttonStyle,
                          ]}
                        >
                          Today
                        </Text>
                        <Text
                          style={[
                            styles.buttonStyle,
                            event.id === 3 && styles.eventCard_3_buttonStyle,
                          ]}
                        >
                          1h
                        </Text>
                      </View>
                      <Image source={icons.slantArrow} style={styles.icon} />
                    </View>
                  </CardWrapper>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "column",
    gap: 6,
    paddingBottom: 40,
  },
  eventCardHeader: {
    backgroundColor: "#FCD36A",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 40,
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontFamily: "RedHatDisplay-bold",
    color: "#181818",
  },
  description: {
    fontSize: 14,
    color: "#181818",
    fontFamily: "RedHatDisplay-medium",
    marginTop: 2,
  },
  eventCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 40,
  },
  eventCard_3: {
    backgroundColor: "#6DCE0C",
  },
  eventContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventDetails: {
    flexDirection: "column",
    gap: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: "RedHatDisplay-medium",
    color: "#181818",
  },
  subTitle: {
    fontSize: 24,
    fontFamily: "RedHatDisplay-bold",
    color: "#181818",
  },
  subDescription: {
    fontSize: 14,
    fontFamily: "RedHatDisplay-medium",
    color: "#181818",
  },
  attendeeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  attendeeImage: {
    width: 36,
    height: 36,
    borderRadius: 16,
    marginLeft: -12,
  },
  eventCardTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 52,
  },
  eventCardTime_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  buttonStyle: {
    backgroundColor: "#EDEDED",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 80,
    color: "#181818",
  },
  eventCard_3_buttonStyle: {
    backgroundColor: "#ffffff",
  },
  tickIcon: {
    width: 56,
    height: 56,
  },
  icon: {
    width: 51,
    height: 51,
  },
});

export default CalendarEvent;
