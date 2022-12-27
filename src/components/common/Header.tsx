import styled from '@emotion/styled';
import { icLogo } from '../../assets/icons';

function Header() {
  return (
    <StHeader>
      <object type="image/svg+xml" data={icLogo}>
        <img src={icLogo} alt="딜리버블" />
      </object>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  height: 5.4rem;
  padding: 1.2rem 0;

  & > object {
    position: relative;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > img {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
