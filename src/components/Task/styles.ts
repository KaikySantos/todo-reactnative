import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 12,

    flexDirection: 'row',
    marginBottom: 8
  },

  iconContainer: {
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: '#F2F2F2',
  },
  textFinished: {
    textDecorationLine: 'line-through',
    color: '#808080'
  },
  deleteContainer: {
  }
})