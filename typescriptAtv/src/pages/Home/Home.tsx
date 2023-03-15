import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input";
import instance from "../../utilities/instanceAxios";
import {
  Container,
  DivLogInput,
  Card,
  DivNameImgLogin,
  BtnVerMais,
} from "./styles";
import { GoMarkGithub } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface Users {
  name: string;
  avatar_url: string;
  id: string;
  login: string;
  bio: string;
}

export function Home() {
  const [users, setUsers] = useState<Users | null>(null);
  const [busca, setBusca] = useState<string>("");
  const navigate = useNavigate();

  console.log(users);

  const getUsers = () => {
    instance
      .get(`users/${busca}`)
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };

  const handleBusca = (event: ChangeEvent<HTMLInputElement>) => {
    setBusca(event.target.value);
  };

  return (
    <Container>
      <DivLogInput>
        <GoMarkGithub size={100} />
        <Input onchange={handleBusca} onclick={getUsers} />
      </DivLogInput>

      {users && (
        <Card>
          <DivNameImgLogin>
            <h3>{users.name}</h3>

            <img src={users.avatar_url} style={{ width: "100px" }} />
          </DivNameImgLogin>
          <div>
            <BtnVerMais onClick={() => navigate(`/details/${users.login}`)}>
              Ver mais
            </BtnVerMais>
          </div>
        </Card>
      )}
    </Container>
  );
}
