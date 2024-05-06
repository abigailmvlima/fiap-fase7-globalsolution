import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const ViewHome = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Body>
        <S.Image>
          <S.IconEcoMiles
            src={require('../../assets/png/iconEcoMiles.png')}
            alt={''}
          />
        </S.Image>
        <S.TitleBase>
          <S.Title>Ola, seu caminho para um mundo melhor</S.Title>
          <S.SubTitle>
            Na EcoMiles, acreditamos na transformação positiva. Nosso
            compromisso é construir um mundo sustentável, inclusivo e
            responsável. Junte-se a nós nessa jornada empolgante.
          </S.SubTitle>
        </S.TitleBase>
        <S.Buttons>
          <S.Button>
            <S.ButtonTitle>Desafios</S.ButtonTitle>
            <S.ButtonImage>
              <S.ButtonImg
                src={require('../../assets/png/imageRewards.png')}
                alt={''}
              />
            </S.ButtonImage>
          </S.Button>
          <S.Button>
            <S.ButtonTitle>Recompensa</S.ButtonTitle>
            <S.ButtonImage>
              <S.ButtonImg
                src={require('../../assets/png/imageChallenges.png')}
                alt={''}
              />
            </S.ButtonImage>
          </S.Button>
        </S.Buttons>
        <S.ButtonRules>
          Ganhe {'"'}milas{'"'} ao participar de desafios ESG, como redução de
          desperdício e inclusão, e troque {'"'}milas{'"'} por pontos de
          recompensa oferecidos por empresas doadoras de produtos. Faça a
          diferença de forma sustentável.
        </S.ButtonRules>
      </S.Body>
    </S.Container>
  );
};

export default ViewHome;
