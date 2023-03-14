import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Card/global/ContextGlobal";
import { instanceAxios } from "../Card/global/ContextGlobal";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";



export default function Input() {
  const { listTask, setDayTask, removerItem, groupTaskByDay } =
    useContext(ContextGlobal);

  const [nameTask, setNameTask] = useState("");

  function addNewTask() {
    let dataDeHoje = new Date()
    let dia = String(dataDeHoje.getDate()).padStart(2, '0');
    var mes = String(dataDeHoje.getMonth() + 1).padStart(2, '0');
    var ano = dataDeHoje.getFullYear();

    let diaAtual = ano + "-" + mes + "-" + dia;
    console.log(diaAtual)



    console.log(dataDeHoje)
    const dataTask = {
      data: {
        name: nameTask,
        completed: false,
        due_on: diaAtual,
        notes: "",
        assignee:"1203990077602562",
        workspace: "1203990002370988",
      }
    }
    
    instanceAxios.post(`/tasks`, dataTask)
    .then(function (response){
      console.log(response?.data); groupTaskByDay()
      location.reload()
    })

    .catch(function(error){
      console.error(error.response.data); 
    })

   
  }

 
  function sair() {
    let relembrar = localStorage.getItem("remember");
    console.log(relembrar);
    if (relembrar === "true") {
      localStorage.removeItem("autorizacao");
      window.location.reload();
      console.log("entrou");
    } else {
      localStorage.clear();
      window.location.reload();
    }
  }

  function atualizarDia() {
    setDayTask();
  }

  useEffect(() => {
    const teste = document.getElementById("teste");
    setDayTask(teste.value);
  }, [removerItem]);



  return (
    <div className="flex w-full justify-center m-auto rounded gap-2">
      <div className="">
        <ArrowLeftOnRectangleIcon
          onClick={sair}
          className="h-12 w-12 cursor-pointer absolute -ml-24 lg:static lg:ml-0 text-violet-600 transition-all hover:text-black"
        />
      </div>

      <input
        onChange={() => setNameTask()}
        type="text"
        value={nameTask}
        placeholder="New Taks"
        className="rounded-md border-inherit w-96 shadow-md"
      />
      <select
        onChange={(e) => atualizarDia(e)}
        className="border-inherit rounded-md shadow-md"
        id="teste"
      >
        {listTask.map((item, index) => (
          <option key={index}>{item.day}</option>
        ))}
      </select>
      <button
        onClick={addNewTask}
        className="w-10 bg-yellow-200 rounded-lg text-black shadow-md transition-all hover:bg-black"
      >
        Add
      </button>
    </div>
  );
}
