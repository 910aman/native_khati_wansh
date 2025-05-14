import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SVGComponent = ({ }) => {
    return (
        <Svg
            width={21}
            height={17}
            viewBox="0 0 21 17"
            fill="none"
        >
            <Path
                d="M17.7917 1.20801H3.20833C2.05774 1.20801 1.125 2.14075 1.125 3.29134V13.708C1.125 14.8586 2.05774 15.7913 3.20833 15.7913H17.7917C18.9423 15.7913 19.875 14.8586 19.875 13.708V3.29134C19.875 2.14075 18.9423 1.20801 17.7917 1.20801Z"
                stroke="#753C42"
                strokeWidth={2}
                strokeLinecap="round" />
        </Svg>
    );
};
export default SVGComponent;
