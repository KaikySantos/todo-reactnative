import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../image/empty.png')} />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}