import { css } from "styled-components";

export const Mobile = (props) => {
  return css`
    @media (max-width: 375px) {
      ${props}
    }
  `;
};
export const ExtraSmall = (props) => {
  return css`
    @media (max-width: 575px) {
      ${props}
    }
  `;
};

export const Small = (props) => {
  return css`
    @media (max-width: 767px) {
      ${props}
    }
  `;
};
export const Medium = (props) => {
  return css`
    @media (max-width: 991px) {
      ${props}
    }
  `;
};
export const Large = (props) => {
  return css`
    @media (max-width: 1199px) {
      ${props}
    }
  `;
};
