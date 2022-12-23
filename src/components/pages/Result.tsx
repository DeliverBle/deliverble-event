import styled from '@emotion/styled';
import { icCopy, icDownload } from '../../assets/icons';
import { COLOR } from '../../styles/color';
import { FONT_STYLES } from '../../styles/font';

function Result() {
  const name = 'test';

  return (
    <StResult>
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
      <StButtonContainer>
        <StDownloadButton>
          <img src={icDownload} alt="" />
          이미지 저장
        </StDownloadButton>
        <StCopyButton>
          <img src={icCopy} alt="" />
          링크 복사
        </StCopyButton>
      </StButtonContainer>
    </StResult>
  );
}

export default Result;

const StResult = styled.div`
  text-align: center;

  p {
    ${FONT_STYLES.M_18}
  }

  h1 {
    margin-top: 1.6rem;
    ${FONT_STYLES.SB_25}
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2.8rem;
  position: fixed;
  bottom: 8rem;
  width: min(38rem, calc(100% - 4rem));
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

const StDownloadButton = styled(StButton)`
  background-color: ${COLOR.GRAY_80};
`;

const StCopyButton = styled(StButton)`
  background-color: ${COLOR.MAIN_BLUE};
  margin-left: 1.2rem;
`;
