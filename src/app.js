import { createArr } from './components/createArr.js';
import { dataArr } from './components/dataArr.js';
import { primary } from './components/createFirst.js';
import { toggleMenu } from './components/menu.js';

toggleMenu();
primary();

dataArr.forEach((e) => {
  createArr(e.title, e.description, e.image, e.tags);
});
