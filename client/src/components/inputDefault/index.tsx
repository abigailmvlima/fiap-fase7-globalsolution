import { useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { EInputPosition, EInputSize, EInputType } from 'domains/enums/EInput';
import { isPasswordValid } from 'utils/isPasswordValid';
import { isValidCPF } from 'utils/isValidCPF';
import * as S from './styles';

type TValue = string | undefined;

interface propState {
  name: string;
  type?: EInputType;
  size: EInputSize;
  position: EInputPosition;
  placeholder?: string;
  messageErrorText?: string;
  value?: TValue;
  isLowerCase?: boolean;
  isRequired?: boolean;
  onKeyPress?: (e: any) => void;
  showIcons?: boolean;
}

enum EMaxLength {
  name = 38,
}

const InputDefault = ({ type = EInputType.text, ...props }: propState) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === EInputType.password,
  );

  const { control, setError, clearErrors, formState, getValues } =
    useFormContext();
  const { isRequired, messageErrorText, showIcons, size, position } = props;
  const { errors } = formState;

  const GetErros = () => {
    const dataError = errors[props.name];
    const message = dataError?.message;
    const returnMessage: any = message || '';
    return <S.ErrorText>{returnMessage}</S.ErrorText>;
  };

  const onChangeValue = (text: string) => {
    let dataValue = text;

    if (type === EInputType.name) {
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
          message: messageErrorText || 'Invalid email',
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

  return (
    <S.Container>
      <Controller
        control={control}
        rules={{
          required: isRequired,
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <S.Base>
              <S.Input
                position={position}
                size={size}
                showIcons={showIcons}
                type={secureTextEntry == true ? 'password' : 'text'}
                placeholder={props.placeholder || ''}
                autoCapitalize={'sentences'}
                maxLength={EMaxLength[EInputType.name]}
                value={value}
                onChange={(event: any) => {
                  const dataValue = onChangeValue(event.target.value);
                  onChange(dataValue);
                }}
              />
            </S.Base>
          );
        }}
        name={props.name}
      />
    </S.Container>
  );
};

InputDefault.defaultProps = {
  isRequired: false,
  showIcons: false,
  size: EInputSize.regular,
  position: EInputPosition.left,
};

export default InputDefault;
