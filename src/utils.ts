import { IPredicateFunction } from 'import-sort-style';

export function moduleNameMatches(regExp: string): IPredicateFunction {
  const re = new RegExp(`^${regExp}(\/|$)`);

  return (text) => {
    return re.test(text);
  };
}

export function sortCaseInsensitiveComparator(first: string, second: string): number {
  const firstLowerCase = first.toLowerCase();
  const secondLowerCase = second.toLowerCase();

  if (firstLowerCase < secondLowerCase) {
    return -1;
  } else if (firstLowerCase > secondLowerCase) {
    return 1;
  }

  return 0;
}
