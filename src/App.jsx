import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //[]の一つ目にStateの変数名、２つ目はStateを変更する関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceSHowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceSHowFlag(!faceShowFlag);
  };

  //stateが変更されると走る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceSHowFlag(true);
      } else {
        faceShowFlag && setFaceSHowFlag(false);
      }
    }
  }, [num, faceShowFlag]);

  //タグの中にJavaScriptを書くときは{}の中に記述する
  //{{}}外側がJavaScript書く意味、内側がJavaScriptのオブジェクトを書く意味
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ;∀;)</p>}
    </>
  );
};
//Appとして、このファイルを他のファイルでも使えるようにエクスポートする
export default App;
