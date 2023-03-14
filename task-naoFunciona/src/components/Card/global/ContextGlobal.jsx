import React, { useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import { useNavigate } from "react-router-dom";

export const ContextGlobal = React.createContext();

export const EstadoGlobal = ({ children }) => {
  const [dayTask, setDayTask] = useState("Segunda-Feira");
  const navigate = useNavigate()

  const [data, loading] = useRequestData({
    method: "get",
    path: "/tasks",
    param: {
      params: 
      {
        workspace: '100000000000000', 
        assignee: '100000000000000',
        opt_fields: 'completed, date, gid, name, notes, due_at, due_on'
      },
    }
  })


  const [listTask, setListTask] = useState([
    { day: "Segunda-Feira", tasks: [] },
    { day: "Terça-Feira", tasks: [] },
    { day: "Quarta-Feira", tasks: [] },
    { day: "Quinta-Feira", tasks: [] },
    { day: "Sexta-Feira", tasks: [] },
  ]);

  function groupTaskByDay(){
    const diasDaSemana = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
    }

    const result = data?.data.data.reduce((acc, item) => {
      const day = item.due_on;
      if(day){
        const dayOfWeek = new Date(day).toLocaleDateString('en-US', {weekday: "long", timeZone: 'UTC'});
        acc[dayOfWeek].push(item)
      }

      return acc

    },diasDaSemana )


    const diasDaSemanaArr = Object.entries(result? result : 0).map(([day, tasks]) => {
      return{
        day,
        tasks,
      }
    })

    setListTask(diasDaSemanaArr)
  }

  function removerItem(tarefa) {
    console.log(tarefa)
    instanceAxios.delete(`/tasks/${tarefa.gid}`)
    .then(()=>{alert("Task Removida com sucesso"); location.reload(); navigate("/board"); })
    .catch((error) => {console.log(error)})


  }

  
  
  useEffect(() => {
    {!loading ? groupTaskByDay() : null}

  }, [loading])

 

  return (
    <ContextGlobal.Provider
      value={{ listTask, setListTask, dayTask, setDayTask, removerItem, loading, groupTaskByDay }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
