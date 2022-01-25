import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Home = (props: any) => (
  <Svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M29.38 14.754 15.748.33a1.055 1.055 0 0 0-.344-.244 1.006 1.006 0 0 0-.81 0 1.056 1.056 0 0 0-.342.244L.623 14.754c-.398.42-.623.992-.623 1.588 0 1.237.95 2.243 2.118 2.243h1.436v10.293c0 .62.473 1.122 1.059 1.122h8.27v-7.85h3.706V30h8.8c.585 0 1.058-.501 1.058-1.122V18.585h1.436a2.05 2.05 0 0 0 1.5-.659 2.34 2.34 0 0 0-.004-3.172Z"
      fill="#fff"
    />
  </Svg>
);

export const Heart = (props: any) => (
  <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M5.464 1C3 1 1 3.13 1 5.76c0 2.122.781 7.158 8.471 12.25a.833.833 0 0 0 .915 0c7.69-5.092 8.471-10.128 8.471-12.25 0-2.63-1.999-4.76-4.464-4.76-2.465 0-4.464 2.885-4.464 2.885S7.929 1 5.464 1Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.8}
    />
  </Svg>
);

export const Play = (props: any) => (
  <Svg width={19} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M.848 21.71a.822.822 0 0 1-.6-.265.936.936 0 0 1-.248-.64V.906C0 .746.038.592.112.455a.88.88 0 0 1 .305-.33.809.809 0 0 1 .84-.014l16.964 9.95a.877.877 0 0 1 .322.333.951.951 0 0 1 0 .92.876.876 0 0 1-.322.333l-16.964 9.95a.808.808 0 0 1-.409.112Z"
      fill="#fff"
      opacity={0.8}
    />
  </Svg>
);
