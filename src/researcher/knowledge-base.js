import { APPS_DATA_PART1 } from './knowledge-base-part1.js';
import { APPS_DATA_PART2 } from './knowledge-base-part2.js';
import { APPS_DATA_PART3 } from './knowledge-base-part3.js';
import { APPS_DATA_PART4 } from './knowledge-base-part4.js';
import { APPS_DATA_PART5 } from './knowledge-base-part5.js';

export const ALL_APPS = [
  ...APPS_DATA_PART1,
  ...APPS_DATA_PART2,
  ...APPS_DATA_PART3,
  ...APPS_DATA_PART4,
  ...APPS_DATA_PART5
];

export function getAppByName(name) {
  return ALL_APPS.find(a => a.app.name.toLowerCase() === name.toLowerCase());
}

export function getAppsByCategory(category) {
  return ALL_APPS.filter(a => a.app.category.toLowerCase() === category.toLowerCase());
}
