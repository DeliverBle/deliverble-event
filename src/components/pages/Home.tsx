import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { COLOR } from '../../styles/color';

function Home() {
  const name = '이름';
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/result', { state: { name } });
  };

  return (
    <div>
      home
      <StSubmitButton onClick={handleClick}>제출하기</StSubmitButton>
    </div>
  );
}

export default Home;

const StSubmitButton = styled.button`
  width: 12.3rem;
  background-color: ${COLOR.MAIN_BLUE};
`;
