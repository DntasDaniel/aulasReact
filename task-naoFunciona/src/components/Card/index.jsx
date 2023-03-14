import { EyeIcon } from "@heroicons/react/20/solid";
import { useState, useContext, useEffect } from "react";
import { ContextGlobal } from "../Card/global/ContextGlobal";
import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Card({ name, list }) {
  const { listTask, setListTask, removerItem } = useContext(ContextGlobal);
  const [dayTask, setDayTask] = useState(name);
  const styleCardTask = "flex justify-center items-center gap-2 shadow-xl";

  const navigate = useNavigate();

  const changeStatus = (e, item) => {

    const dayOfWeek = new Date(item.due_on).toLocaleDateString('en-US', {weekday: "long", timeZone: 'UTC'});

    const mapDay = listTask.map((task) => {
      if (task.day === dayOfWeek) {
        const upDateStatus = task.tasks.map((stat) => {
          if (e) {
            if (stat.gid === item.gid) {
              return {
                ...stat,
                completed: true,
              };
            }
          } else {
            if (stat.gid === item.gid) {
              return {
                ...stat,
                completed: false,
              };
            }
          }

          return stat;
        });

        return { ...task, tasks: upDateStatus };
      }
      return task;
    });
    setListTask(mapDay);
  };



  function editarDia(e, name) {
    
    const editarDayTask = listTask.find((item) => item.day === name);
    console.log(editarDayTask);

    const editarDayTaskIndex = listTask.findIndex((item) => item.day === name);
    console.log(editarDayTaskIndex);

    if (editarDayTask) {
      document.getElementsByClassName(`inputDay`)[editarDayTaskIndex].disabled = false;
      const editar = document.getElementsByClassName("inputDay")[editarDayTaskIndex];
      console.log(editar);

      const edit = listTask.map((item) => {
        if (item.day === name) {
          const tasksAtualizadas = item.tasks.map((task) => {
            return {
              ...task,
              day: dayTask,
            };
          });

          return {
            ...item,
            day: dayTask,
            tasks: tasksAtualizadas,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      setListTask(edit);
    }
    e.stopPropagation();
  }


  function removeDay(name){

    const listRemoveDay = listTask.find(item => item.day === name)

    if(listRemoveDay){
      const listaFiltrada = listTask.filter(item => item.day !== name)
      setListTask(listaFiltrada)
    }
  }


  return (
    <div>
      <h2
        className="w-80 bg-yellow-600 h-16 flex  justify-center items-center rounded-md flex-col text-white totalH2" >
        <div className="flex items-center justify-between w-4/5">
          <input
            type="text"
            value={dayTask}
            onChange={(e) => setDayTask(e.target.value)}
            className=" bg-yellow-600 border-solid border rounded inputDay"
            name="inputDay"
            disabled
          />
          <div className="flex gap-2">
            <PencilIcon
              onClick={(e) => editarDia(e, name)}
              className="h-5 w-5 cursor-pointer transition-all hover:text-black"
            />
            <TrashIcon onClick={() => removeDay(name)}  className="h-5 w-5 cursor-pointer transition-all hover:text-black" />
          </div>
        </div>
        <hr className="bg-gray-100 w-4/5 mt-1" />
      </h2>

      {list &&
        list.map((item, index) => (
          <div
            key={index}
            className={
              item.completed === true
                ? `bg-yellow-500 ${styleCardTask}`
                : `bg-blue-500 ${styleCardTask} transition-all hover:bg-blue-600`
            }
          >
            <input
              onChange={(e) => changeStatus(e.target.checked, item)}
              type="checkbox"
            />
            <h5 className="w-60">{item.name}</h5>
            <button onClick={() => navigate(`/details/${name}/${item.gid}`)} >
              <EyeIcon className="w-5 text-black-600 transition-all hover:text-black" />
            </button>
            <button onClick={() => removerItem(item)}>
              <TrashIcon className="w-5 text-black-600 transition-all hover:text-black" />
            </button>
          </div>
        ))}
    </div>
  );
}
