import { css, keyframes } from 'styled-components'

const bounce = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(200px) scale(1, 0.7);
  }
`;

const animation = props =>
  css`${bounce} 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite`

export default animation;