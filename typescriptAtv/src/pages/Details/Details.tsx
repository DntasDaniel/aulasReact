import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../utilities/instanceAxios";
import { CardDetails, DivIconBack } from "./styles";
import { FiCornerUpLeft } from "react-icons/fi";

interface Users {
  avatar_url: string;
  login: string;
  location: string;
  public_repos: number;
  followers: number;
}

export default function Details() {
  const { login } = useParams<string>();
  const [info, setInfo] = useState<Users | null | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`users/${login}`)
      .then((res) => setInfo(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <DivIconBack>
        <div id="icone">
          <FiCornerUpLeft
            size={20}
            color="#000"
            onClick={() => navigate("/")}
          />
        </div>
      </DivIconBack>

      <CardDetails>
        <img src={info?.avatar_url} style={{ width: "110px" }} />
        <div>
          <span>{info?.login}</span>
          <p>Número de repositórios: {info?.public_repos}</p>
          <p>{info?.location}</p>
          <p>Seguidores: {info?.followers}</p>
        </div>
      </CardDetails>
    </div>
  );
}
