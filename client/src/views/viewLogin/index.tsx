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
          <S.LogoCine src={require('../../assets/png/logoCine.png')} alt={''} />
        </S.Icon>
        <FormProvider {...methods}>
          <S.Form>
            <S.Input>
              <InputDefault
                label={'email'}
                position={EInputPosition.center}
                type={EInputType.mail}
                isLowerCase={true}
                name={'mail'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
              label={'senha'}
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
