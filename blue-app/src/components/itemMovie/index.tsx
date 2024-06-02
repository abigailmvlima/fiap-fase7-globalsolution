import React, { useContext } from 'react';
import { TListMovie } from '@domain/types/TListMovie';
import * as S from './styles';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContextNavigation } from '@context/contextNavigation';
import { TNavigation } from '@domain/types/TNavigation';

type TProps = {
  data: TListMovie;
};

const ItemMovie = ({ data }: TProps) => {
  const { route } = useContext<TNavigation>(ContextNavigation);

    const onPressDetail = () => {
      route.movieDetail(data);
    };
  return (
    <TouchableOpacity onPress={onPressDetail}>
      <S.Container>
        <S.ImageContainer>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: data.image }}
            resizeMode="cover"
          />
        </S.ImageContainer>
        <S.Body>
          <S.Title>{data?.title}</S.Title>
          <S.RowBase>
            <S.Row>
              <S.Col>
                <S.Text1>{data?.category?.title}</S.Text1>
              </S.Col>
              <S.Col>
                <S.Text1>{data?.duration}</S.Text1>
              </S.Col>
            </S.Row>
            <S.Row>
              <S.Col>
                <S.Text2>{data?.note}</S.Text2>
              </S.Col>
              <S.Col>
                <S.Text2>saiba mais</S.Text2>
              </S.Col>
            </S.Row>
          </S.RowBase>
        </S.Body>
      </S.Container>
    </TouchableOpacity>
  );
};

export default ItemMovie;
