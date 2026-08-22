import raw from './my-data.json';

export type MyData = typeof raw;

const data = raw as MyData;

export default data;
