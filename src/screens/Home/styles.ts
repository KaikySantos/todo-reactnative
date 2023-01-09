import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },

  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: -26
  },
  searchInput: {
    height: 53,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    marginRight: 4,
    flex: 1,
  },
  buttonInput: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },

  info: {
    paddingHorizontal: 24,
    marginTop: 33,
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoContent: {
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textBlue: {
    color: '#4EA8DE'
  },
  textPurple: {
    color: '#8284FA'
  },
  infoNumber: {
    marginLeft: 8,
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  infoNumberText: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold'
  },
})