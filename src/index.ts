import { IStyleAPI, IStyleItem } from 'import-sort-style';

import { ModuleGroupsConfiguration } from './module-groups-configuration';
import { moduleNameMatches } from './utils';

export default function (styleApi: IStyleAPI, _file: string, options: ModuleGroupsConfiguration): IStyleItem[] {
  if (!options || !options.moduleGroups || options.moduleGroups.length === 0) {
    throw new Error("Module group configuration options are required to se this sort stle function. See import-sort-style-module-groups README.md for more details.");
  }

  const styleItems: IStyleItem[] = [];

  options.moduleGroups.forEach((moduleGroup) => {
    const matcherFunctions = moduleGroup.modules.map((moduleName) => styleApi.moduleName(moduleNameMatches(moduleName)));

    const styleItem: IStyleItem = {
      separator: false,
      match: styleApi.or(...matcherFunctions),
      sort: styleApi.member()

    };


    styleItems.push();
  });

  return [];
}
