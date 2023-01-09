import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyState } from "../../components/EmptyState";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.searchInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.buttonInput}>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.infoContent}>
          <Text style={[styles.infoText, styles.textBlue]}>Criadas</Text>
          <View style={styles.infoNumber}>
            <Text style={styles.infoNumberText}>0</Text>
          </View>
        </View>

        <View style={styles.infoContent}>
          <Text style={[styles.infoText, styles.textPurple]}>Concluídas</Text>
          <View style={styles.infoNumber}>
            <Text style={styles.infoNumberText}>0</Text>
          </View>
        </View>
      </View>

      <EmptyState />
    </View>
  )
}