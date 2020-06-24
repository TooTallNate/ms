import * as msImpl from './mod';

function ms(val: string, options?: ms.ParseOptions): number;
function ms(val: number, options?: ms.FormatOptions): string;
function ms(
  val: string | number,
  options?: ms.ParseOptions | ms.FormatOptions
): string | number {
  // @ts-ignore
  return msImpl.default(val, options);
}

namespace ms {
  export type ParseOptions = msImpl.ParseOptions;
  export type FormatOptions = msImpl.FormatOptions;
  export const ms = msImpl.ms;
  export const parse = msImpl.parse;
  export const format = msImpl.format;
}

export = ms;
