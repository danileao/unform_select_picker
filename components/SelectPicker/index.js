import React, { useRef, useEffect, useState } from "react";

import { useField } from "@unform/core";

import { Picker } from "react-native";

// Repassar um props `options` com as opções
const SelectPicker = ({ name, label, value, options, ...rest }) => {
  const pickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selectedValue, setSelectedValue] = useState("node");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      path: "props.selectedValue",
    });
  }, [fieldName, registerField]);
  return (
    <Picker
      ref={pickerRef}
      style={{ height: 50, width: 150 }}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      {...rest}
    >
      {options.map((opt) => {
        return (
          <Picker.Item
            key={opt.label}
            label={opt.label}
            value={opt.value}
          ></Picker.Item>
        );
      })}
    </Picker>
  );
};
export default SelectPicker;
