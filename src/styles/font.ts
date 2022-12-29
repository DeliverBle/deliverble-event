import { css } from '@emotion/react';

type Font = {
  size: number;
  weight: 'R' | 'SB' | 'M' | 'B';
  height: number;
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
    case 'R':
    default:
      return 400;
  }
};

export const FONT = ({ size, weight, height }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  letter-spacing: -0.01em;
  line-height: ${height}%;
`;

export const FONT_STYLES = {
  M_14: FONT({ size: 14, weight: 'M', height: 140 }),
  M_16: FONT({ size: 16, weight: 'M', height: 140 }),
  SB_17: FONT({ size: 17, weight: 'SB', height: 140 }),
  B_17: FONT({ size: 17, weight: 'B', height: 140 }),
  R_18: FONT({ size: 18, weight: 'R', height: 150 }),
  M_18: FONT({ size: 18, weight: 'M', height: 140 }),
  B_20: FONT({ size: 20, weight: 'B', height: 140 }),
  SB_25: FONT({ size: 25, weight: 'SB', height: 140 }),
  SB_28: FONT({ size: 25, weight: 'SB', height: 140 }),
};
