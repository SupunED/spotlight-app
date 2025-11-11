import { Image, Text, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Welcome</Text>
      
      <Image source={require("../assets/images/icon.png")} style={ {width: 100, height: 100 }} />

      <Image source={{uri: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"}} 
      
      style={{
        width: 100,
        height: 100,
        resizeMode: "cover"
      }}
      />

    </View>
  );
}