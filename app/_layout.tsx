import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1, backgroundColor: "#000"}}>
            <Stack screenOptions={{headerShown: false}} />
          </SafeAreaView>
        </SafeAreaProvider>
    </ClerkProvider>
  );
}
