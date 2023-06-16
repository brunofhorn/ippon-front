import React from "react";

import { ISvgIcon } from "../interfaces/icons";

export default function Home({ color = "#34495E", width = 14, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 14">
            <path
                fill={color}
                fillRule="evenodd"
                d="M7.818 1.122a1.345 1.345 0 00-1.577 0L.96 4.929l-.002.001C.613 5.183.38 5.572.4 6.028a1.351 1.351 0 001.24 1.337v4.01c0 .947.765 1.737 1.736 1.737H10.629c.946 0 1.735-.766 1.735-1.736V7.369a1.351 1.351 0 001.294-1.35c0-.423-.188-.841-.562-1.093L7.82 1.123l-.002-.001zm-.394.538a.679.679 0 00-.789 0l-.003.002L1.35 5.469c-.2.146-.293.337-.282.532v.019c0 .554.626.877 1.074.55l.001-.001 4.098-2.951a1.345 1.345 0 011.577 0l4.098 2.95.002.002a.676.676 0 001.073-.55c0-.232-.101-.43-.27-.543l-.005-.004L7.424 1.66zM8.94 12.445h1.69a1.07 1.07 0 001.069-1.07V7.218a1.413 1.413 0 01-.172-.108h-.001l-4.1-2.953a.679.679 0 00-.79 0l-.003.002-4.097 2.95-.001.001c-.074.054-.15.098-.227.135v4.132c0 .584.473 1.07 1.07 1.07h1.98V9.243c0-.986.805-1.79 1.791-1.79.986 0 1.791.804 1.791 1.79v3.201zm-.667 0H6.024v-3.2c0-.618.507-1.125 1.124-1.125.618 0 1.124.507 1.124 1.124v3.201z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}