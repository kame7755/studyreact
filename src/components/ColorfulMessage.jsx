import React from "react";

const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    //オブジェクトのプロパティ名と割り当てる場合値が同じな場合は[color: color,]を省略できる
    color,
    fontSize: "18px"
  };
  //childrenタグで囲った中身
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
