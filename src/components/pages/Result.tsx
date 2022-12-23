import styled from '@emotion/styled';
import { icCopy, icDownload } from '../../assets/icons';
import { COLOR } from '../../styles/color';
import { FONT_STYLES } from '../../styles/font';

function Result() {
  const name = 'test';

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
        <StImageWrapper />
        <p>
          2023년 나에게 주는 첫번째 선물,
          <br />
          딜리버블이 예약되었습니다.
        </p>
        <h1>
          달라질 {name}님의 목소리를
          <br />
          응원합니다!
        </h1>
      </StContent>
      <StButtonContainer>
        <StDownloadButton>
          <img src={icDownload} alt="" />
          이미지 저장
        </StDownloadButton>
        <StCopyButton onClick={handleCopy}>
          <img src={icCopy} alt="" />
          링크 복사
        </StCopyButton>
      </StButtonContainer>
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
  margin-top: 1.2rem;
`;

const StContent = styled.div`
  text-align: center;
  flex: 1;

  p {
    ${FONT_STYLES.M_18}
  }

  h1 {
    margin-top: 1.6rem;
    ${FONT_STYLES.SB_25}
  }
`;

const StImageWrapper = styled.div`
  width: 36rem;
  height: 36rem;
  margin: 0 auto;
`;

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 8rem 2.8rem;
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;

  & > img {
    margin-right: 0.8rem;
  }
`;

const StDownloadButton = styled(StButton)`
  background-color: ${COLOR.GRAY_80};
`;

const StCopyButton = styled(StButton)`
  background-color: ${COLOR.MAIN_BLUE};
`;
