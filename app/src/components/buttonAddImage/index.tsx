import * as ImagePicker from 'expo-image-picker';
import * as S from './styles';
import { Controller, useFormContext } from 'react-hook-form';
import { EButtonType } from '@domain/enum/EButtons';
import { useState } from 'react';
import { AnyLengthString } from 'aws-sdk/clients/comprehend';


const ButtonAddImage = ({ label, type = EButtonType.default }: any) => {
  const { control } = useFormContext();
  const [base64, setBase64] = useState<string>('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      const base64Image: any = result.assets[0].base64;
      setBase64(base64Image);
    }
  };

  return (
    <S.Container>
      <S.StyledText>{label}</S.StyledText>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange } }) => {
          const handleFileChange = (base64Image: string) => {
            onChange(base64Image);
            setBase64(base64Image);
          };

          return (
            <S.Base>
              <S.Button onPress={pickImage}>
                {base64 && (
                  <S.ImageBackground source={{ uri: `data:image/png;base64,${base64}` }} />
                )}
                <S.Icon>
                  <S.IconPlus />
                </S.Icon>
              </S.Button>
            </S.Base>
          );
        }}
        name="image"
      />
    </S.Container>
  );
};

export default ButtonAddImage;
