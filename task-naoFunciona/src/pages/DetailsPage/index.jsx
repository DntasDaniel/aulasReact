import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../components/Card/global/ContextGlobal";
import {ArrowLeftCircleIcon} from "@heroicons/react/24/solid";

export default function DetailsPage() {
  const { listTask} = useContext(ContextGlobal);
  const navigate = useNavigate();
  const { day} = useParams();
  const [showtask] = useState("");


  function clickStatus() {
    let dia = listTask.find((item) => item.day === day);

    if (dia) {
      dia.tasks.forEach((item) => {
        console.log(item);
        if (item.completed === true) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      });

    }

  }

  function addDescription() {
 
  }

  function removeTask() {
 
  }

  useEffect(() => {
      navigate("/board");
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-3 w-full md:w-767 overflow-auto ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-850 h-36 gap-y-5">
          <ArrowLeftCircleIcon
            onClick={() => navigate("/board")}
            className="h-11 w-11 cursor-pointer transition-all hover:text-black"
          />
          <div className="flex gap-3">
            <h1 className="text-black text-3xl font-bold">{showtask.name}</h1>
            <div
              onClick={clickStatus}
              className={
                showtask.completed === true
                  ? "flex justify-center items-center  text-black transition-all hover:bg-black"
                  : "flex justify-center items-center text-black transition-all hover:bg-black"
              }
            >
              {showtask.completed === true ? "Done" : "Open"}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
