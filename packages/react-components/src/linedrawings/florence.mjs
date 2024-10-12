import React from 'react'
import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.6

export const Florence = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 243 184" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const FlorenceFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 243 184" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="M 33.30917,60.639709 V 122.2474 m 177.62499,0 V 60.639709 M 122.02857,24.386872 V 181.88215 m 91.3556,-119.488248 h -7.1246 c -1.1662,0.1078 -10.1479,-0.9947 -11.4954,-1.47 -9.7118,-3.4202 -20.09,-9.309998 -20.09,-9.309998 -19.9822,-11.3435 -32.4674,-18.1986 -38.71,-21.56 -2.9302,-1.5778 -5.8065,-3.0478 -9.8,-3.43 -0.9555,-0.0931 -1.8571,-0.1078 -2.695,-0.0784 h -2.695 c -0.8379,-0.0294 -1.7395,-0.0147 -2.695,0.0784 -3.9935,0.3822 -6.8698,1.8522 -9.8,3.43 -6.2426,3.3614 -18.727803,10.2165 -38.710003,21.56 0,0 -10.3782,5.889798 -20.09,9.309998 -1.3475,0.4753 -10.329204,1.5778 -11.495404,1.47 h -7.1246 m 182.525007,6.86 h -7.1246 c -1.1662,0.1078 -10.1479,-0.9947 -11.4954,-1.47 -9.7118,-3.4202 -20.09,-9.31 -20.09,-9.31 -19.9822,-11.343498 -32.4674,-18.198598 -38.71,-21.559998 -2.9302,-1.5778 -5.8065,-3.0478 -9.8,-3.43 -0.9555,-0.0931 -1.8571,-0.1078 -2.695,-0.0784 h -2.695 c -0.8379,-0.0294 -1.7395,-0.0147 -2.695,0.0784 -3.9935,0.3822 -6.8698,1.8522 -9.8,3.43 -6.2426,3.3614 -18.727803,10.2165 -38.710003,21.559998 0,0 -10.3782,5.8898 -20.09,9.31 -1.3475,0.4753 -10.329204,1.5778 -11.495404,1.47 h -7.1246 m 0,47.951398 9.8,11.4219 c 1.5631,1.9012 3.969,4.7334 7.085404,8.0213 4.8559,5.1254 7.7812,7.4921 17.4146,15.9887 12.6665,11.1671 25.9602,18.9287 31.85,21.56 4.782403,2.1364 19.585303,5.488 23.750303,5.1401 h 2.7195 c 4.165,0.3479 18.9728,-3.0037 23.7503,-5.1401 5.8898,-2.6313 19.1835,-10.3929 31.85,-21.56 9.6334,-8.4966 12.5587,-10.8633 17.4146,-15.9887 3.1115,-3.2879 5.5223,-6.1201 7.0854,-8.0213 l 9.8,-11.4219"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 174.60067,78.230702 -25.8524,-14.0189 c -4.3169,-2.3177 -8.5995,-4.6991 -12.8968,-7.0511 -2.1511,-1.161298 -4.3169,-2.258898 -6.6346,-2.871398 -1.1564,-0.3136 -2.3373,-0.5096 -3.5329,-0.5978 -0.5978,-0.0441 -1.1956,-0.0637 -1.7934,-0.0539 -0.6027,0.0245 -1.2299,0.0098 -1.8424,0.0196 -0.6125,0 -1.2397,0.0049 -1.8424,-0.0147 -0.5978,-0.0098 -1.1956,0.0098 -1.7934,0.0539 -1.1956,0.0931 -2.3765,0.2842 -3.5329,0.5978 -2.3177,0.6125 -4.4835,1.7101 -6.6346,2.871398 -4.3022,2.3471 -8.584803,4.7236 -12.906603,7.0413 -4.3071,2.3324 -8.6387,4.6354 -12.9213,7.0168 -4.3071,2.3373 -8.5995,4.704 -12.9262,7.0168 4.214,-2.5039 8.4623,-4.9539 12.691,-7.4333 4.2336,-2.4696 8.526,-4.8461 12.789,-7.2618 4.263,-2.4206 8.565203,-4.7775 12.847803,-7.163798 2.1462,-1.176 4.3806,-2.3324 6.811,-2.989 1.2103,-0.3381 2.4549,-0.5488 3.7044,-0.6517 0.6272,-0.049 1.2544,-0.0735 1.8816,-0.0637 0.6223,0.0196 1.2201,0 1.8326,0.0098 0.6125,0 1.2103,0.0147 1.8326,-0.0049 0.6272,-0.0049 1.2544,0.0147 1.8816,0.0637 1.2495,0.1029 2.4941,0.3136 3.7044,0.6517 2.4304,0.6566 4.6648,1.813 6.811,2.989 4.2777,2.391198 8.575,4.752998 12.838,7.178498 l 12.8037,7.2373 c 4.2287,2.4794 8.4721,4.9343 12.6861,7.4382 z m -33.0897,79.291798 c 2.793,-2.6754 5.733,-5.2038 8.771,-7.5999 3.0478,-2.3863 6.2034,-4.6403 9.4472,-6.7571 3.2585,-2.0972 6.5954,-4.0719 10.0205,-5.88 1.715,-0.8967 3.4447,-1.7689 5.194,-2.597 1.7591,-0.8134 3.5231,-1.6072 5.3116,-2.3373 -3.4937,1.6562 -6.9482,3.3957 -10.3292,5.2675 -3.3761,1.8718 -6.7032,3.8367 -9.9323,5.9584 -3.2536,2.0776 -6.3945,4.3267 -9.4864,6.6444 -3.0821,2.3275 -6.076,4.7775 -9.0013,7.301 z m -85.019903,-29.596 c 4.2924,2.0776 8.6191,4.1111 12.7939,6.4239 4.1944,2.2834 8.3006,4.7236 12.3431,7.2667 4.018,2.5774 7.9772,5.2479 11.8384,8.0654 3.8514,2.8175 7.619503,5.7575 11.270003,8.8298 -1.8963,-1.4455 -3.7779,-2.9106 -5.703603,-4.3218 -1.9061,-1.4308 -3.8416,-2.8224 -5.7869,-4.1993 -3.8955,-2.744 -7.8449,-5.4145 -11.8776,-7.9576 -4.0131,-2.5725 -8.1144,-4.998 -12.2647,-7.35 -1.0339,-0.5929 -2.0727,-1.176 -3.1213,-1.7444 -1.0388,-0.5831 -2.0972,-1.1319 -3.1605,-1.6758 l -6.3308,-3.332 z m 0,-12.4803 c 5.4243,-1.2691 10.8241,-2.6558 16.1896,-4.1601 5.3753,-1.4749 10.7065,-3.0821 16.0181,-4.7677 2.6558,-0.833 5.3263,-1.6513 8.0262,-2.3618 2.695,-0.7154 5.424303,-1.3083 8.143803,-1.911 5.4341,-1.1809 10.9319,-2.425499 16.5571,-2.400999 2.7979,-0.0147 5.6105,0.303799 8.3447,0.886899 2.7391,0.5782 5.4243,1.3475 8.0948,2.156 2.6705,0.8085 5.3214,1.666 7.9723,2.5235 2.6509,0.8526 5.3067,1.715 7.9331,2.6411 l 7.8694,2.8126 c 2.6264,0.9261 5.2773,1.764 7.9527,2.5382 5.341,1.5729 10.7555,2.9106 16.2141,4.018 -5.4782,-1.029 -10.9123,-2.2932 -16.2827,-3.7877 -2.6852,-0.7546 -5.3459,-1.5876 -7.9821,-2.499 l -7.8841,-2.7734 c -2.6313,-0.9114 -5.2822,-1.7542 -7.938,-2.597 -2.6558,-0.8428 -5.3116,-1.6856 -7.9772,-2.4794 -2.6656,-0.7938 -5.3459,-1.5484 -8.0654,-2.107 -2.7195,-0.5635 -5.4782,-0.8575 -8.2516,-0.8379 -5.5566,-0.0539 -11.0299,1.1515 -16.4689,2.3079 -2.7244,0.588 -5.443903,1.1662 -8.138903,1.8669 -2.695,0.6909 -5.3606,1.4945 -8.0213,2.3177 -5.3214,1.6562 -10.6673,3.2487 -16.0524,4.6844 -5.39,1.4259 -10.8045,2.7391 -16.2484,3.9298 z"
    />
    <path
      key="outline"
      d="m 123.39077,182.0225 c 4.165,0.3479 18.9728,-3.0037 23.7503,-5.1401 5.8898,-2.6313 19.1835,-10.3929 31.85,-21.56 9.6334,-8.4966 12.5587,-10.8633 17.4146,-15.9887 3.1115,-3.2879 5.5223,-6.1201 7.0854,-8.0213 l 9.8,-11.4219 V 60.262402 h -7.1246 c -1.1662,0.1078 -10.1479,-0.9947 -11.4954,-1.47 -9.7118,-3.420198 -20.09,-9.309998 -20.09,-9.309998 -19.9822,-11.3435 -32.4674,-18.1986 -38.71,-21.56 -2.9302,-1.5778 -5.8065,-3.047801 -9.8,-3.430001 -0.9555,-0.0931 -1.8571,-0.1078 -2.695,-0.0784 h -2.695 c -0.8379,-0.0294 -1.7395,-0.0147 -2.695,0.0784 -3.9935,0.3822 -6.8698,1.852201 -9.8,3.430001 -6.2426,3.3614 -18.727803,10.2165 -38.710003,21.56 0,0 -10.3782,5.8898 -20.09,9.309998 -1.3475,0.4753 -10.329204,1.5778 -11.495404,1.47 h -7.1246 V 119.8905 l 9.8,11.4219 c 1.5631,1.9012 3.969,4.7334 7.085404,8.0213 4.8559,5.1254 7.7812,7.4921 17.4146,15.9887 12.6665,11.1671 25.9602,18.9287 31.85,21.56 4.782403,2.1364 19.585303,5.488 23.750303,5.1401 h 2.7195 z m 89.7974,-61.7351 c 0,0 19.5412,-33.466998 23.2064,-46.667598 0,0 4.0719,-14.6559 5.2234,-30.458398 0.1176,-1.6366 0.392,-5.978 -1.3083,-10.8094 -0.7889,-2.2393 -1.7885,-4.9686 -4.3512,-6.879601 -0.2254,-0.1666 -4.0474,-2.9155 -8.2712,-1.4749 -3.3614,1.1466 -5.2528,4.356101 -6.9629,7.859601 -2.4598,5.0323 -6.13445,15.738362 -8.46685,28.24316 M 30.766063,120.2874 c 0,0 -19.5412,-33.466998 -23.2063997,-46.667598 0,0 -4.071901,-14.6559 -5.223401,-30.458398 -0.1176,-1.6366 -0.392,-5.978 1.3083,-10.8094 0.7889,-2.2393 1.7885,-4.9686 4.351201,-6.879601 0.2254,-0.1666 4.0473997,-2.9155 8.2711997,-1.4749 3.3614,1.1466 5.2528,4.356101 6.9629,7.859601 2.4598,5.0323 6.427924,15.885099 8.760324,28.389897 m -1.331392,56.955879 c 0,0 -17.690603,-30.620338 -21.0086937,-42.69811 0,0 -4.792809,-16.2582 -5.835263,-30.716554 -0.106463,-1.497393 -0.648347,-5.420605 0.890932,-9.841053 0.714189,-2.048828 1.716953,-5.230751 4.036956,-6.979204 0.204057,-0.15243 3.6641007,-2.667511 7.4878927,-1.349447 3.043075,1.049071 4.657527,4.67035 6.205675,7.875847 2.226854,4.604258 6.218254,15.326888 8.329769,26.768043 M 213.39834,117.20288 c 0,0 17.6906,-30.620338 21.00869,-42.69811 0,0 4.79281,-16.2582 5.83526,-30.716555 0.10647,-1.497394 0.64835,-5.420606 -0.89093,-9.841053 -0.71419,-2.048828 -1.71695,-5.230751 -4.03695,-6.979204 -0.20406,-0.15243 -3.6641,-2.667512 -7.4879,-1.349447 -3.04307,1.049071 -4.65752,4.67035 -6.20567,7.875847 -2.22686,4.604258 -6.21826,15.326888 -8.32977,26.768044"
    />
  </>
)
