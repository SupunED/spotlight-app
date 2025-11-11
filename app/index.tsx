import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity onPress={ () => {alert("You touched")}}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <Pressable onPress={ () => { alert('You pressed')}}>
        <Text>Press me</Text>
      </Pressable>

    </View>
  );
}