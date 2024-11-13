// css読み込み
import './css/style.css';
// tsを読み込み
import { exampleFunc } from './models/exampleFunc';
import { HelloWorld } from './models/helloWorld';
let hello = new HelloWorld('test', 33);
console.log(hello.showName());
exampleFunc();
// 全ての画像読み込み
function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}
importAll(require.context('./images', true, /\.(png|jpg|gif)$/));
