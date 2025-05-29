import {
  colorWhiteSmoke,
  colorGraniteGrey,
  colorDarkGray,
  colorDefaultWhite,
  veryLightGrey,
  lima,
  chartreuse,
} from '@/const/const-colors';

export const lightTheme = {
  backgroundColor: colorWhiteSmoke,
  textColor: colorGraniteGrey,
  iconThemeButton: 'url(/theme-moon.svg) center no-repeat',
  backgroundTtask: colorDefaultWhite,
  colorPlaceholder: colorDarkGray,
  colorAddButton: chartreuse,
};

export const darkTheme = {
  backgroundColor: colorGraniteGrey,
  textColor: colorWhiteSmoke,
  iconThemeButton: 'url(/theme-sun.svg) center no-repeat',
  backgroundTtask: colorDarkGray,
  colorPlaceholder: veryLightGrey,
  colorAddButton: lima,
};
