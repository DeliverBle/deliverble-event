import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { icCopy } from '../assets/icons';
import { imgLetter } from '../assets/images';
import { COLOR } from '../styles/color';
import { FONT_STYLES } from '../styles/font';

function Result() {
  const location = useLocation();
  const name = location.state ? `${location.state.name}님` : '당신';

  const handleCopy = async () => {
    const link = window.location.href.replace('/result', '');
    try {
      await navigator.clipboard.writeText(link);
      alert('링크를 복사했어요.');
    } catch (e) {
      alert('다시 한번 시도해 보세요.');
    }
  };

  return (
    <StResult>
      <StContent>
        <StImageWrapper>
          <img src={imgLetter} alt="" />
        </StImageWrapper>
        <p>
          2023년 나에게 주는 첫 번째 선물,
          <br />
          딜리버블이 예약되었습니다.
        </p>
        <h1>
          달라질 {name}의 목소리를
          <br />
          응원합니다!
        </h1>
      </StContent>
      <p>본 화면을 캡처해 주세요!</p>
      <StCopyButton onClick={handleCopy}>
        <img src={icCopy} alt="" />
        링크 공유하기
      </StCopyButton>
    </StResult>
  );
}

export default Result;

const StResult = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 3.2rem auto;
    color: ${COLOR.GRAY_60};
    ${FONT_STYLES.M_16}
  }
`;

const StContent = styled.div`
  width: calc(100% + 4rem);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    ${FONT_STYLES.M_18}
  }

  h1 {
    margin-top: 1.6rem;
    ${FONT_STYLES.SB_25}
  }
`;

const StImageWrapper = styled.div`
  margin: 0 auto;

  & > img {
    width: 100%;
  }
`;

const StCopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.8rem;
  margin-bottom: 9rem;
  text-align: center;
  background-color: ${COLOR.GRAY_80};
  color: ${COLOR.GRAY_10};
  ${FONT_STYLES.SB_17}

  & > img {
    margin-right: 0.6rem;
  }
`;
