import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">SignIn</Text>
      
      <Link href="/(auth)/sign-up" className="mt-4">
        <Text className="text-green-700 underline font-medium">
          Create an account
        </Text>
      </Link>
    </View>
  );
};

export default SignIn;
