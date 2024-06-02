import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { EInputPosition, EInputSize, EInputType } from '@domain/enum/EInput';
import { ETheme } from '@domain/enum/ETheme';
import { isPasswordValid } from '@utils/isPasswordValid';
import { isValidCPF } from '@utils/isValidCPF';

import * as St from './styles';

type TValue = string | undefined;

interface propState {
  theme: ETheme;
  name: string;
  type?: EInputType;
  size?: any;
  position: EInputPosition;
  placeholder?: string;
  messageErrorText?: string;
  value?: TValue;
  isLowerCase?: boolean;
  isRequired?: boolean;
  onKeyPress?: (e: any) => void;
  showIcons?: boolean;
  label?: string;
}

enum EMaxLength {
  name = 38,
  text = 38,
}
const InputForm = ({ type = EInputType.text, ...props }: propState) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === EInputType.password,
  );

  const { control, setError, clearErrors, formState, getValues } =
    useFormContext();

  const {
    isRequired,
    messageErrorText,
    theme,
    showIcons,
    size,
    position,
    label,
  } = props;
  const { errors } = formState;

  const GetErros = () => {
    const dataError = errors[props.name];
    const message = dataError?.message;
    const returnMessage: any = message || '';
    return <St.ErrorText>{returnMessage}</St.ErrorText>;
  };

  const onChangeValue = (text: string) => {
    let dataValue = text;

    if (type === EInputType.text) {
      const formattedText = dataValue.replace(/[^a-zA-Z\s]/g, '');
      const formattedValue = formattedText.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
      
      return formattedValue;
    } else if (type === EInputType.name) {
      const formattedText = dataValue.replace(/[^a-zA-Z\s]/g, '');
      const formattedValue = formattedText.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );

      if (formattedValue.length > EMaxLength[EInputType.name] - 1) {
        setError(props.name, {
          type: 'maxLength',
          message: 'Exceeded maximum length (20 characters)',
        });
      } else {
        clearErrors(props.name);
      }

      return formattedValue;
    } else if (type === EInputType.mail) {
      const dataValue = text.toLowerCase().trim();

      const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        dataValue,
      );

      if (isEmailValid) {
        clearErrors(props.name);
      } else {
        setError(props.name, {
          type: 'invalidEmail',
          message: messageErrorText || 'Invalid mail',
        });
      }
      return dataValue;
    } else if (type === EInputType.cpf) {
      let numericText = dataValue.replace(/\D/g, '');

      if (numericText.length > 11) {
        numericText = numericText.substring(0, 11);
      }

      const cpfArray = numericText.split('');

      if (cpfArray.length > 3) {
        cpfArray.splice(3, 0, '.');
      }
      if (cpfArray.length > 7) {
        cpfArray.splice(7, 0, '.');
      }
      if (cpfArray.length > 11) {
        cpfArray.splice(11, 0, '-');
      }

      const formattedCPF = cpfArray.join('');

      if (isValidCPF(formattedCPF)) {
        clearErrors(props.name);
      } else {
        setError(props.name, {
          type: 'invalidCPF',
          message: 'CPF inválido',
        });
      }

      return formattedCPF;
    } else if (type === EInputType.password) {
      if (!isPasswordValid(dataValue)) {
        console.log(123, props.name, dataValue);
        setError(props.name, {
          type: 'invalidPassword',
          message: messageErrorText || 'Invalid password',
        });
      } else if (props.name == 'passConfirm') {
        const passwordValue = getValues('password');
        if (passwordValue != dataValue) {
          setError(props.name, {
            type: 'invalidPassword',
            message: 'As senhas não confere',
          });
        } else {
          clearErrors(props.name);
        }
      } else {
        clearErrors(props.name);
      }

      return dataValue;
    }
  };

  if (!control) {
    return <></>;
  }

  return (
    <St.Container themeSelected={theme} size={size}>
      <St.Content themeSelected={theme}>
        {label && <St.Label>{label}</St.Label>}
        <Controller
          control={control}
          rules={{
            required: isRequired,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <St.Base showIcons={showIcons}>
                <St.Input
                  position={position}
                  size={size}
                  showIcons={showIcons}
                  themeSelected={theme}
                  secureTextEntry={secureTextEntry}
                  placeholder={props.placeholder || ''}
                  onChangeText={(text: string) => {
                    const dataValue = onChangeValue(text);
                    onChange(dataValue);
                  }}
                  value={value}
                  autoCapitalize={'sentences'}
                  maxLength={EMaxLength[EInputType.name]}
                />
              </St.Base>
            );
          }}
          name={props.name}
        />
      </St.Content>
      <GetErros />
    </St.Container>
  );
};

InputForm.defaultProps = {
  isRequired: false,
  showIcons: false,
  size: EInputSize.regular,
  position: EInputPosition.left,
};

export { InputForm };
