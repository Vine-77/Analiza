import { Link } from "expo-router";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in">Sign Up</Link>
    </View>
  );
};

export default signUp;
