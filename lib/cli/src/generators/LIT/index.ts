import { baseGenerator, Generator } from '../baseGenerator';

export const litGenerator: Generator = (packageManager, npmOptions, options) => {
  return baseGenerator(packageManager, npmOptions, options, 'lit', {});
};
