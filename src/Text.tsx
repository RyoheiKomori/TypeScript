import { FC } from "react";

type props = {
  color: string;
  fontSize: string;
};
//ver.18以前の場合は、FCは暗黙的にchildren を受け取っているため、VFCにする
export const Text: FC<props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです。</p>;
};
