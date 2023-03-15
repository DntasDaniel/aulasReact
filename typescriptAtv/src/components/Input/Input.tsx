import { InputLog, BtnBuscar, DivInputBtn } from "./styles";

type PropsInput = {
  onchange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onclick: () => void;
  theme?: string;
};

export default function Input({ onchange, onclick }: PropsInput) {
  return (
    <DivInputBtn>
      <InputLog onChange={onchange} placeholder="Pesquise por usuário" />
      <BtnBuscar onClick={onclick}>Pesquisar</BtnBuscar>
    </DivInputBtn>
  );
}
