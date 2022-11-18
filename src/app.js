import { toggleMenu } from './components/menu.js';
import { primary, secondary } from './components/card-1-2.js';
import { divider } from './components/divider.js';
import { dataArr } from './components/dataArr.js';
import { createArr } from './components/card-2-6.js';
import { popup } from './components/popup.js';

toggleMenu();
divider();
primary();
secondary();

dataArr.forEach((e) => {
  createArr(e.title, e.description, e.image, e.tags);
});

popup();
