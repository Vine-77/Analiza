import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-6">
      <Text className="mb-6 text-2xl font-bold text-success">
        Welcome to NativeWind!
      </Text>

      <Link
        href="/onboarding"
        className="mt-4 w-full max-w-xs rounded-lg bg-primary p-4 text-center font-semibold text-white"
      >
        Onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-3 w-full max-w-xs rounded-lg bg-primary p-4 text-center font-semibold text-white"
      >
        Sign In
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-3 w-full max-w-xs rounded-lg bg-primary p-4 text-center font-semibold text-white"
      >
        Sign Up
      </Link>
    </View>
  );
}