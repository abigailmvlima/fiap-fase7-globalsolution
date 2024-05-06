import { useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';

const ViewLogin = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      mail: '',
      pass: '',
      rememberLogin: true,
    },
  });

  return (
    <S.Container>
      <S.Body>
        <S.Icon>
          <S.EcoMilesPlanet />
        </S.Icon>
        <FormProvider {...methods}>
          <S.Form>
            <S.Image>
              <S.IconEcoMiles
                src={require('../../assets/png/iconEcoMiles.png')}
                alt={''}
              />
            </S.Image>
            <S.Input>
              <InputDefault
                position={EInputPosition.center}
                type={EInputType.cpf}
                isLowerCase={true}
                name={'cpf'}
                placeholder={'000.000.000-00'}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                position={EInputPosition.center}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={'************'}
              />
            </S.Input>
            <S.Forgot>
              <LinkLabel label={'esqueci minha senha'} />
            </S.Forgot>
            <S.Buttons>
              <S.Button>
                <ButtonGo label={'Entrar'} onClick={() => navigate('/home')} />
              </S.Button>
            </S.Buttons>
            <S.Registers>
              <S.Or>ou</S.Or>
              <S.LinkLabel>
                <LinkLabel label={'Cadastre-se'} />
              </S.LinkLabel>
            </S.Registers>
          </S.Form>
        </FormProvider>
      </S.Body>
    </S.Container>
  );
};

export default ViewLogin;
