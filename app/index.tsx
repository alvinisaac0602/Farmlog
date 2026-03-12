import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Onboarding
      </Link>
      <Link href="/sign-in" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Sign In
      </Link>
      <Link href="/sign-up" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Sign Up
      </Link> 
      <Link href="/settings" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Settings
      </Link>
      <Link href="/home" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Home
      </Link>
      <Link href="/welcome" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Welcome
      </Link>
        
    </View>
  );
}
