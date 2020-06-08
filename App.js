import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";

import { Form } from "@unform/mobile";
import Input from "./components/Input";
import SelectPicker from "./components/SelectPicker";

export default function App() {
  const formRef = useRef(null);

  //Criar as opções
  const options = [
    { label: "Java", value: "java" },
    { label: "Node", value: "node" },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <View style={styles.container}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />

        {/* Junto com o componente enviar tbm as opções */}
        <SelectPicker name="pick" options={options} />
        <Input name="password" type="password" placeholder="324234" />
        <Input
          name="naosei"
          placeholder="Não sei "
          onSubmitEditing={() => formRef.current.submitForm()}
        />

        <Button title="Sign ins" onPress={() => formRef.current.submitForm()} />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
