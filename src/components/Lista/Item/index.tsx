import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

export default function Item(item: ITarefa) {
  console.log('item atual:', {
    item
  })
  return (
    <li className={style.item}>
      <h3>{item.tarefa}</h3>
      <span>{item.tempo}</span>
    </li>
  );
}
