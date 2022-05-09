import {hues, white} from '@sanity/color'
import React, {forwardRef} from 'react'

/**
 * @public
 */
export interface SanityLogoProps {
  dark?: boolean
}

const schemes = {
  light: [hues.red[200].hex, hues.red[300].hex, hues.red[500].hex],
  dark: [hues.gray[500].hex, hues.gray[300].hex, white.hex],
}

/**
 * @public
 */
export const SanityLogo = forwardRef(function SanityLogo(
  props: SanityLogoProps & React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>
) {
  const {dark, ...svgProps} = props
  const scheme = schemes[dark ? 'dark' : 'light']

  return (
    <svg
      data-sanity-icon="sanity-logo"
      height="1em"
      viewBox="0 0 352 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      ref={ref}
    >
      <path d="M311.14 57.234V80.0016H298.499V57.234" fill={scheme[1]} />
      <path d="M298.499 57.2341L319.889 20.0017H333.316L311.14 57.2341H298.499Z" fill={scheme[2]} />
      <path
        d="M298.499 57.2341L276.515 20.0017H290.345L305.239 45.5161L298.499 57.2341Z"
        fill={scheme[1]}
      />
      <path d="M253.839 40.9625V80.0017H241.007V47.6275L253.839 40.9625Z" fill={scheme[1]} />
      <path
        d="M241.007 47.5944L273.538 30.9469L268.042 21.6519L241.007 34.8633V47.5944Z"
        fill={scheme[0]}
      />
      <path
        d="M241.007 30.9469H221.404V20.0017H267.064L273.538 30.9469H253.839H241.007Z"
        fill={scheme[2]}
      />
      <path d="M214.047 20.0017H201.311V80.0121H214.047V20.0017Z" fill={scheme[2]} />
      <path d="M149.39 37.8712V80.0017H137.153V20.0017L149.39 37.8712Z" fill={scheme[1]} />
      <path
        d="M151.282 20.0017L178.231 60.9939V80.0017L137.153 20.0017H151.282Z"
        fill={scheme[2]}
      />
      <path d="M178.231 57.9129V20.0017H190.467V80.0017H178.231V57.9129Z" fill={scheme[1]} />
      <path
        d="M82.1168 80.9834L112.102 65.3053L108.405 55.7303L88.6644 64.9362L82.1168 80.9834Z"
        fill={scheme[0]}
      />
      <path
        d="M100.657 35.5422L82.1167 80.9834L72.5807 72.7745L94.6719 20.0017L100.657 35.5422Z"
        fill={scheme[1]}
      />
      <path d="M94.672 20.0017H107.312L130.69 80.0017H117.752L94.672 20.0017Z" fill={scheme[2]} />
      <path
        d="M25.1347 26.926C25.1347 35.2811 30.3864 40.2524 40.9004 42.8738L52.0417 45.4117C61.9923 47.6571 68.0519 53.2341 68.0519 62.3203C68.1293 66.2787 66.8194 70.1429 64.3417 73.2654C64.3417 64.2002 59.5684 59.302 48.0551 56.3568L37.1158 53.913C28.3559 51.9495 21.5946 47.3647 21.5946 37.4952C21.5485 33.6839 22.7939 29.9658 25.1347 26.926"
        fill={scheme[2]}
      />
      <path
        d="M57.4954 60.0957C62.2475 63.0827 64.3311 67.2602 64.3311 73.255C60.3977 78.2054 53.4875 80.9834 45.3655 80.9834C31.6941 80.9834 22.1262 74.3725 20 62.8842H33.1292C34.8196 68.1584 39.2952 70.6022 45.2698 70.6022C52.5626 70.6022 57.4104 66.7798 57.506 60.0748"
        fill={scheme[1]}
      />
      <path
        d="M31.9598 39.3124C29.7898 38.0455 28.0095 36.225 26.8079 34.0442C25.6062 31.8634 25.028 29.4036 25.1347 26.926C28.93 22.0174 35.5318 19.02 43.5794 19.02C57.506 19.02 65.5643 26.2472 67.5523 36.4195H54.9227C53.53 32.409 50.0431 29.2863 43.6858 29.2863C36.8926 29.2863 32.2575 33.1715 31.9917 39.3124"
        fill={scheme[1]}
      />
    </svg>
  )
})
