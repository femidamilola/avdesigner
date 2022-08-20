import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArchiveIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    width="30"
    height="26"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Archive</title>
    <g clipPath="url(#clip0_228_812)">
      <path
        d="M28.8335 10.6666V28H4.8335V10.6666"
        stroke="#3DBF91"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5003 4H2.16699V10.6667H31.5003V4Z"
        stroke="#3DBF91"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.167 16H19.5003"
        stroke="#3DBF91"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_228_812">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.833496)"
        />
      </clipPath>
    </defs>
  </IconSvg>
);
