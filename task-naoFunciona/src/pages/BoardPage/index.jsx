import React, { useContext} from "react";
import { ContextGlobal } from "../../components/Card/global/ContextGlobal";
import Input from "../../components/Input";
import Card from "../../components/Card";


export default function BoardPage() {
  const { listTask, setListTask,} = useContext(ContextGlobal);
  

  function appendTask() {
    const objTask = {
      day: `Exemplo-${listTask.length + 1}: Domingo`,
      tasks: [],
    };

    setListTask([...listTask, objTask]);
  }


  return (
    <div className="flex flex-wrap bg-blue-400 min-h-screen p-2 w-full md:w-700 overflow-auto ">
      <Input />
      <div className="flex w-full justify-evenly gap-6 flex-wrap md:flex-col md:items-center md:w-700 ">
        {listTask.length > 0 ? (
          <>
            {listTask.map((item, index) => (
              <Card key={index} name={item.day} list={item.tasks}  />
            ))}
            <div className="h-15 flex justify-center items-center" >
              <PlusCircleIcon
                onClick={appendTask}
                className="h-12 w-12 cursor-pointer text-black-700 transition-all hover:text-black"
              />
            </div>
          </>
        ) : (
          <div className="h-16 flex justify-center items-center" id={`${localStorage.getItem("idDescription") ? localStorage.getItem("idDescription") : "false"}`}>
            <h1>Loading</h1>
          </div>
        )}
      </div>
    </div>
  );
}
