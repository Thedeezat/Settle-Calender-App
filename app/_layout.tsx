import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { EventProvider } from "../components/EventContext";

SplashScreen.preventAutoHideAsync(); // Prevent auto hide splash screen

// Display fonts
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "RedHatDisplay-light": require("../assets//fonts/RedHatDisplay-Light.ttf"),
    "RedHatDisplay-regular": require("../assets//fonts/RedHatDisplay-Regular.ttf"),
    "RedHatDisplay-medium": require("../assets//fonts/RedHatDisplay-Medium.ttf"),
    "RedHatDisplay-semibold": require("../assets/fonts/RedHatDisplay-SemiBold.ttf"),
    "RedHatDisplay-bold": require("../assets//fonts/RedHatDisplay-Bold.ttf"),
    "RedHatDisplay-extrabold": require("../assets//fonts/RedHatDisplay-ExtraBold.ttf"),
    "RedHatDisplay-black": require("../assets/fonts/RedHatDisplay-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <EventProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="weekly-overview" />
        <Stack.Screen name="event-details" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </EventProvider>
  );
}
