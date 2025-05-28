declare module '@terradharitri/sdk-dapp' {
    export const GAS_LIMIT: string;
    export const GAS_PRICE: string;
    export const VERSION: string;
  }
  
  declare module '@terradharitri/sdk-dapp/reduxStore/selectors' {
    export const accountSelector: any;
  }
  
  declare module '@terradharitri/sdk-dapp/reduxStore/store' {
    export const store: any;
  }
  
  declare module '@terradharitri/sdk-dapp/utils/decoders/base64Utils' {
    export function isStringBase64(value: string): boolean;
  }
  



























  