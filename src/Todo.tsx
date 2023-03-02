import { FC } from "react";
import { TodoType } from "./types/todo";

//Omit<TodoType, "id"は、"id"を省きその他の情報を取得する
export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
