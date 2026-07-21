import { Link } from "expo-router";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">SignUp</Text>
      
      <Link href="/(auth)/sign-in" className="mt-4">
        <Text className="text-green-700 underline font-medium">
          Already have an account? Sign In
        </Text>
      </Link>
    </View>
  );
};

export default signUp;