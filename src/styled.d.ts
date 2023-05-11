// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bp: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tabletS: string;
      tabletL: string;
      desktopXS: string;
      desktopS: string;
      desktopM: string;
      desktopL: string;
    };

    mixins: {
      flexCenter: FlattenSimpleInterpolation;
      flexBetween: FlattenSimpleInterpolation;
      link: FlattenSimpleInterpolation;
      inlineLink: FlattenSimpleInterpolation;
      button: FlattenSimpleInterpolation;
      smallButton: FlattenSimpleInterpolation;
      bigButton: FlattenSimpleInterpolation;
      boxShadow: FlattenSimpleInterpolation;
      fancyList: FlattenSimpleInterpolation;
      resetList: FlattenSimpleInterpolation;
    };
  }
}
