import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}