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
    marginBottom: 5,
  },
  title: {
    color: 'black',
    fontSize: 12,
    fontWeight: "bold",
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
    backgroundColor: '#3DABFE',
    borderWidth: 3,
    borderColor: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    height: 50,
    width: 350,
    fontWeight: 'bold',
    fontSize: 24,
    bottom: 35,
    position: 'fixed',
    borderRadius: 15,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
  placeholder: {
    padding: 8,
    fontSize: 16,
    width: 300,
    textAlign: 'center'
  }
});