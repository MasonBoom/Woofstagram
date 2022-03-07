import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'cover',
    width: 50,
  },
  heading: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 5
  },
  title: {
    color: 'black',
    fontSize: 12,
    fontWeight: "bold"
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginRight: 10,
    padding: 10,
    width: '50%',
  },
  button: {
    borderRadius: 4,
    borderColor: 'blue',
    borderWidth: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 32
  }
});