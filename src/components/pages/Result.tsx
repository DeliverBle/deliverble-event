import styled from '@emotion/styled';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { icCopy, icDownload } from '../../assets/icons';
import { imgTest } from '../../assets/images';
import { COLOR } from '../../styles/color';
import { FONT_STYLES } from '../../styles/font';

function Result() {
  const location = useLocation();
  const name = location.state ? `${location.state.name}님` : '당신';
  const downloadRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (downloadRef.current) {
      html2canvas(downloadRef.current, { backgroundColor: COLOR.BLACK })
        .then((canvas) => {
          const link = document.createElement('a');
          document.body.appendChild(link);
          link.href = canvas.toDataURL('image/png');
          link.download = '딜리버블.png';
          link.click();
          document.body.removeChild(link);
          alert('이미지를 저장했어요.');
        })
        .catch((e) => {
          console.error(e);
          alert('다시 한번 시도해 보세요.');
        });
    }
  };

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
      <StContent ref={downloadRef}>
        <StImageWrapper>
          <img src={imgTest} alt="" />
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
      <StButtonContainer>
        <StDownloadButton onClick={handleDownload}>
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
`;

const StContent = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  text-align: center;
  flex: 1;
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
    aspect-ratio: 1 / 1;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 0 2.8rem 8rem 2.8rem;
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
