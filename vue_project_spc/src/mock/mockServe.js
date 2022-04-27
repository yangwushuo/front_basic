import Mock from 'mockjs';

//引入json
import banner from './banner.json';
import floor from './floor.json';

Mock.mock('/mock/banner',{code:200, data: banner});
Mock.mock('/mock/floor',{code:200, data: floor});

