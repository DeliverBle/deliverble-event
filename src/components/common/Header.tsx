import styled from '@emotion/styled';
import { icLogo } from '../../assets/icons';

function Header() {
  return (
    <StHeader>
      <img src={icLogo} alt="딜리버블" />
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
  }
`;
