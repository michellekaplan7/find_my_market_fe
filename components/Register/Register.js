// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const Register = ({ control, handleSubmit, navigation, setRegister, register }) => {
  // // METHODS // //
  // This is for Controller
  const nameInputRef = React.useRef();
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  // fetch
  const registerFetch = (data) => {
    setRegister(!register);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.centeredView}>
      <Text style={styles.label}>Username:</Text>
      <Controller
        name="name"
        control={control}
        rules={{ required: "This is required" }}
        onFocus={() => {
          nameInputRef.current.focus();
        }}
        render={(props) => (
          <TextInput
            {...props}
            placeholder="Please enter a username"
            color="black"
            style={styles.registerNameInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={nameInputRef}
          />
        )}
      />

      <Text style={styles.label}>Email:</Text>
      <Controller
        name="email"
        control={control}
        rules={{ required: "This is required" }}
        onFocus={() => {
          emailInputRef.current.focus();
        }}
        render={(props) => (
          <TextInput
            {...props}
            placeholder="Please enter an email"
            color="black"
            style={styles.registerEmailInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={emailInputRef}
          />
        )}
      />

      <Text style={styles.label}>Password:</Text>
      <Controller
        name="password"
        control={control}
        rules={{ required: "This is required" }}
        onFocus={() => {
          passwordInputRef.current.focus();
        }}
        render={(props) => (
          <TextInput
            {...props}
            placeholder="Please enter a password"
            color="black"
            style={styles.registerPasswordInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={passwordInputRef}
          />
        )}
      />

      <TouchableHighlight
        style={{ ...styles.registerOpenButton }}
        onPress={() => handleSubmit(registerFetch())}
      >
        <Text style={styles.textStyle}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
  },
  registerEmailInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  registerNameInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  registerPasswordInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  label: {
    color: "black",
    margin: 10,
    marginHorizontal: 10,
    fontSize: 25,
  },
  registerOpenButton: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "black",
    height: 40,
    marginTop: 30,
    marginLeft: 20,
  },
  textStyle: {
    alignSelf: "center",
    paddingTop: 10,
  }
});

export default Register;
