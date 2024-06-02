import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as S from './styles';

const SelectComponent = ({ label, size }: { label: string, size: number }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <S.Container size={size}>
      <S.Title>{label}</S.Title>
      <S.Select>
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={[
            { label: 'Opção 1', value: 'opcao1' },
            { label: 'Opção 2', value: 'opcao2' },
            { label: 'Opção 3', value: 'opcao3' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'selecione',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </S.Select>
    </S.Container>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    backgroundColor: '#fff',
    height: 38
  },
  inputAndroid: {
    fontSize: 16,    
  },
});

export default SelectComponent;
