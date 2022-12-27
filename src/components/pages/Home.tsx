import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgMic } from '../../assets/images';
import { COLOR } from '../../styles/color';
import { FONT_STYLES } from '../../styles/font';
import { createUserData } from '../../utils/api';

export interface UserData {
  nickname: string;
  email?: string;
}

function Home() {
  const MAX_COUNT = 5;
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [nameLength, setNameLength] = useState<number>(0);

  const handleEmailChange = (target: HTMLInputElement) => {
    const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(target.value)) {
      setIsValidEmail(true);
      return;
    }
    setIsValidEmail(false);
  };

  const handleNameChange = () => {
    const nameInput = nameInputRef.current;
    if (nameInput) {
      const text = [...new Intl.Segmenter().segment(nameInput.value)];
      let length = text.length;
      if (length > MAX_COUNT) {
        nameInput.value = text
          .slice(0, MAX_COUNT)
          .map((el) => el.segment)
          .join('');
        length = MAX_COUNT;
      }
      setNameLength(length);
    }
  };

  const handleSubmitClick = async () => {
    if (!isValidEmail) {
      emailInputRef.current?.focus();
      return;
    }

    const nickname = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    if (nickname) {
      const { nickname: name } = await createUserData({
        nickname,
        email,
      });
      name && navigate('/result', { state: { name } });
    }
  };

  return (
    <StHome>
      <StInfo>
        <StMainText>
          <h1>
            아나운서 쉐도잉으로 키우는
            <br />
            스피치 자신감, 딜리버블
          </h1>
          <p>
            스피치 전문가인 아나운서를 따라하며
            <br /> 좋은 발성과 발음을 터득해보세요!
          </p>
        </StMainText>
        <StSubText>
          <h2>출시 알림 받기</h2>
          <p>가장 먼저 딜리버블을 만나보세요!</p>
        </StSubText>
      </StInfo>
      <StForm>
        <StInput>
          <label htmlFor="email">이메일</label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="(필수) 이메일을 입력해주세요."
            onChange={(e) => handleEmailChange(e.target)}
            autoComplete="off"
          />
        </StInput>
        <StInput>
          <label htmlFor="name">이름</label>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="(선택) 이름 또는 닉네임을 입력해주세요."
            onChange={handleNameChange}
            autoComplete="off"
          />
          <div>
            {nameLength}/{MAX_COUNT}
          </div>
        </StInput>
      </StForm>
      <StSubmitButton isValidEmail={isValidEmail} onClick={handleSubmitClick}>
        제출하기
      </StSubmitButton>
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% + 4rem);
  margin-bottom: 2.4rem;
  background: url(${imgMic}) no-repeat center;
  text-align: center;

  p {
    color: ${COLOR.GRAY_45};
    ${FONT_STYLES.R_18};
  }
`;

const StMainText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 6.2rem;

  & > h1 {
    ${FONT_STYLES.SB_28}
  }
`;

const StSubText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  margin-top: 12.5rem;

  & > h2 {
    ${FONT_STYLES.B_20}
  }
`;

const StForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  width: 100%;
  margin-bottom: 1.4rem;
`;

const StInput = styled.div`
  & > label {
    ${FONT_STYLES.M_14};
    color: ${COLOR.GRAY_30};
  }

  & > input {
    width: 100%;
    height: 5.2rem;
    margin-top: 0.8rem;
    padding: 1.5rem 1.6rem;

    background: ${COLOR.BLACK_60};
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.05);

    ${FONT_STYLES.M_16};
    color: ${COLOR.WHITE};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:focus {
      outline: 0.2rem solid ${COLOR.WHITE};
    }
  }

  & > div {
    height: 20px;
    padding-right: 0.4rem;

    text-align: right;
    ${FONT_STYLES.M_14};
    color: ${COLOR.GRAY_60};
  }
`;

const StSubmitButton = styled.button<{ isValidEmail: boolean }>`
  width: 12.3rem;
  margin-bottom: 4.8rem;
  background-color: ${COLOR.MAIN_BLUE};

  ${({ isValidEmail }) =>
    !isValidEmail &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `};
`;
