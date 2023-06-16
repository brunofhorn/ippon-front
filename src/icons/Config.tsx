import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Config({ color = "#34495E", width = 12, height = 12 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 12 12">
            <path
                fill={color}
                fillRule="evenodd"
                d="M6 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zM8 6a2 2 0 11-4 0 2 2 0 014 0z"
                clipRule="evenodd"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M10.543 4.597l.843.143c.358.06.619.369.614.732v1.056a.74.74 0 01-.62.732l-.841.14c-.086.28-.201.554-.339.817l.496.697c.211.296.176.7-.08.955l-.747.747a.736.736 0 01-.955.08L8.22 10.2a4.75 4.75 0 01-.818.339l-.142.842a.74.74 0 01-.732.619H5.47a.74.74 0 01-.732-.62l-.14-.841a4.744 4.744 0 01-.793-.326l-.704.501a.736.736 0 01-.953-.08l-.747-.747a.74.74 0 01-.08-.955l.494-.687a4.64 4.64 0 01-.344-.815L.62 7.285A.74.74 0 010 6.553V5.497a.74.74 0 01.62-.732l.832-.14c.086-.283.196-.556.334-.82l-.502-.704a.742.742 0 01.08-.955l.75-.747a.736.736 0 01.955-.08l.69.496c.26-.14.534-.256.814-.344L4.718.62A.74.74 0 015.45 0h1.055a.74.74 0 01.732.62l.14.831c.294.088.577.206.848.349l.697-.496a.736.736 0 01.953.08l.746.747c.258.255.291.66.08.955l-.496.694c.138.26.25.534.338.817zm.73 1.996a.065.065 0 00.055-.065h.003V5.472a.065.065 0 00-.056-.065l-1.052-.178a.333.333 0 01-.271-.248 4.013 4.013 0 00-.436-1.05.339.339 0 01.015-.369l.619-.87a.068.068 0 00-.008-.085l-.747-.747a.067.067 0 00-.047-.02.075.075 0 00-.038.013l-.865.621a.339.339 0 01-.368.015A4.069 4.069 0 007 2.05a.339.339 0 01-.25-.274L6.575.729A.065.065 0 006.51.674H5.455A.065.065 0 005.39.73l-.18 1.06a.343.343 0 01-.25.272 3.975 3.975 0 00-1.047.44.343.343 0 01-.371-.014l-.865-.617a.062.062 0 00-.037-.012.064.064 0 00-.048.02l-.747.747a.068.068 0 00-.008.085l.625.877c.077.108.085.25.017.366a4.009 4.009 0 00-.429 1.053.339.339 0 01-.273.25l-1.045.176a.065.065 0 00-.055.065v1.056c0 .032.022.06.055.065l1.06.18c.13.023.236.12.271.249.095.368.246.722.441 1.047a.343.343 0 01-.015.371l-.616.865a.068.068 0 00.007.085l.747.748c.018.017.038.02.048.02a.074.074 0 00.037-.013l.878-.624a.33.33 0 01.195-.063c.058 0 .118.015.17.045.324.186.67.329 1.028.421a.337.337 0 01.249.271l.175 1.053a.065.065 0 00.065.055h1.056c.032 0 .06-.022.065-.055l.178-1.053a.333.333 0 01.248-.27c.368-.096.722-.241 1.05-.437a.339.339 0 01.369.015l.87.62c.01.007.022.012.037.012.013 0 .03-.002.048-.02l.747-.747a.068.068 0 00.007-.085l-.619-.873a.339.339 0 01-.015-.368c.196-.329.341-.682.436-1.05a.337.337 0 01.271-.249l1.053-.175z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}