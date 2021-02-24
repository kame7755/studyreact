import React from "react";
import ReactDom from "react-dom";
//同じ改装にあるApp.jsのAppをインポートする
//コンポーネント化
import App from "./App";

//画面に反映する場合はReactDomのrenderの関数を書く
//1つ目の引数にコンポーネントとしてレンダリングする
//2つ目の引数にどこに反映するかを記述する
ReactDom.render(<App />, document.getElementById("root"));
