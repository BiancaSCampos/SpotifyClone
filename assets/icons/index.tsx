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
