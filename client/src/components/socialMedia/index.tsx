import svg from 'assets/svg';
import * as S from './styles';

const SocialMedia = () => {
  return (
    <S.Container>
      <S.Facebook>
        <svg.Facebook />
      </S.Facebook>
      <S.Instagram>
        <svg.Instagram />
      </S.Instagram>
      <S.Youtube>
        <svg.Linkedin />
      </S.Youtube>
    </S.Container>
  );
};

export default SocialMedia;
