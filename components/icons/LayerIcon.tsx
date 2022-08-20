import { IconSvg, IconSvgProps } from "./IconSvg";

export const LayerIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    width="30"
    height="26"
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Stack</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6984 3.36026C13.0273 3.00999 12.1179 3.00459 11.4415 3.35396C8.84845 4.6931 6.49658 6.22853 4.43561 7.93154C4.1169 8.19489 3.89072 8.57758 3.89458 9.02802C3.89842 9.47662 4.1292 9.85419 4.44598 10.1132C6.48983 11.7843 8.84364 13.3212 11.3892 14.6497C12.0603 15 12.9697 15.0054 13.6462 14.656C16.2391 13.3169 18.591 11.7814 20.652 10.0784C20.9707 9.81511 21.1969 9.43242 21.193 8.98197C21.1891 8.53338 20.9584 8.1558 20.6416 7.89679C18.5977 6.22562 16.2439 4.6888 13.6984 3.36026ZM12.1298 4.68671C12.3694 4.56294 12.7631 4.56411 13.0044 4.69004C15.4337 5.95796 17.6721 7.41666 19.6114 8.99223C17.6606 10.5931 15.4288 12.0471 12.9579 13.3232C12.7182 13.447 12.3245 13.4458 12.0832 13.3199C9.65383 12.052 7.41542 10.5933 5.47619 9.01777C7.427 7.41684 9.65875 5.96285 12.1298 4.68671Z"
      fill={iconColor ? iconColor : "white"}
    />
    <path
      d="M21.7413 12.6982C21.9607 13.0495 21.8537 13.5122 21.5023 13.7316L15.3951 17.5445C14.5664 18.0619 13.5382 18.3011 12.5442 18.3011C11.5503 18.3012 10.522 18.0621 9.69315 17.5448L3.65282 13.7751C3.30142 13.5558 3.19434 13.0931 3.41365 12.7417C3.63295 12.3903 4.0956 12.2832 4.44699 12.5025L10.4873 16.2723C11.0315 16.6119 11.7707 16.8012 12.5441 16.8011C13.3176 16.8011 14.0567 16.6117 14.6007 16.2721L20.708 12.4592C21.0593 12.2398 21.522 12.3468 21.7413 12.6982Z"
      fill={iconColor ? iconColor : "white"}
    />
    <path
      d="M21.7413 16.4526C21.9607 16.804 21.8537 17.2666 21.5024 17.486L16.2135 20.7889C15.1559 21.4494 13.8329 21.7601 12.5442 21.7602C11.2555 21.7603 9.93239 21.4497 8.87461 20.7894L3.65274 17.5295C3.30137 17.3102 3.19435 16.8475 3.4137 16.4962C3.63304 16.1448 4.0957 16.0378 4.44707 16.2571L9.66893 19.5169C10.4419 19.9995 11.4759 20.2603 12.5441 20.2602C13.6123 20.2601 14.6461 19.9993 15.419 19.5166L20.7079 16.2138C21.0592 15.9944 21.5219 16.1013 21.7413 16.4526Z"
      fill={iconColor ? iconColor : "white"}
    />
  </IconSvg>
);
