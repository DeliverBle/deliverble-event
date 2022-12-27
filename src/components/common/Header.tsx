import styled from '@emotion/styled';
import { imgLogo } from '../../assets/images';

function Header() {
  return (
    <StHeader>
      <img src={imgLogo} alt="딜리버블" />
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  height: 5.4rem;
  padding: 1.2rem 0;

  & > img {
    display: block;
    margin: 0 auto;
    width: 9.6rem;
    height: 3rem;
  }
`;
