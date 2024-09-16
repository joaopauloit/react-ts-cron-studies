import React, { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  // const [tarefas, setTarefas] = useState([
  //   { tarefa: "React", tempo: "02:00:00" },
  //   { tarefa: "JavaScript", tempo: "01:00:00" },
  //   { tarefa: "TypeScript", tempo: "03:00:00" },
  // ]);

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tempo={item.tempo}
            tarefa={item.tarefa}
            selecionado={item.selecionado}
            completado={item.completado}
            id={item.id}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
