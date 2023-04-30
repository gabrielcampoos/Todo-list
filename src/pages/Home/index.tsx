import React, { useEffect, useMemo, useState } from "react";
import ButtonStyled from "../../components/Button/styles";
import Card from "../../components/Card";

import Container from "../../components/Container/styles";
import TitleDefault from "../../components/Heading";
import {
  default as Input,
  default as InputValor,
} from "../../components/Input";
import { Tarefa } from "../../types";
import { gerarData, gerarId } from "../../utils/geradorData";
// import listaTarefas from '../../database';

const Home: React.FC = () => {
  // estados de um componente
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);

  // 1 - quando o componente monta

  useEffect(() => {
    setListaTarefas(JSON.parse(localStorage.getItem("tarefas") ?? "[]"));
    console.log("Executou o render uma vez");

    // 3 - quando o componente desmonta
    return () => {
      localStorage.removeItem("usuarioLogado");
    };
  }, []);

  // 2 - quando o componente atualiza - re-renderizou

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
    console.log("Lista tarefas atualizou - componente renderizou novamente");
  }, [listaTarefas]);

  // 4 - toda e qualquer alteração que tiver - SEMPRE

  useEffect(() => {
    console.log("SEM DEPENDENCIAS");
  });

  const TitleMemo = useMemo(() => {
    return <TitleDefault title="Lista de Professores" />;
  }, []);

  // 1 - se uma função não precisa de parametros, dai chama no evento sem a necessidade da arrow function e abre e fecha parenteses da função

  // 2- Sempre que tiver parametros a rotina/função a gente monta uma () => que aponta para execução desta rotina
  const addNewCard = () => {
    const novaTarefa: Tarefa = {
      id: gerarId(),
      titulo: titulo,
      valor: valor,
      criadoEm: gerarData(),
      onClick: del,
    };

    setListaTarefas((prevState) => [novaTarefa, ...prevState]);
    setTitulo("");
    setValor("");
  };

  const handleReset = () => {
    setListaTarefas([]);
  };

  function del() {
    console.log("oi");
  }

  return (
    <Container display="flex" alignItems="center" flexDirection="column">
      {TitleMemo}

      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        width="50%"
      >
        <p>
          <button style={{ width: "3rem" }} onClick={() => handleReset()}>
            Reset
          </button>
        </p>
        <Input
          valor={titulo}
          handleChange={setTitulo}
          id="nome"
          name="nome"
          placeholder="Digite o nome..."
          type="text"
        />
        <InputValor
          valor={valor}
          handleChange={setValor}
          id="valor"
          name="valor"
          placeholder="Digite o valor..."
          type="number"
        />
      </Container>
      <ButtonStyled onClick={addNewCard}>Adicionar</ButtonStyled>
      {/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros) OK
				2 - Criar componente do Card - OK
				3 - Renderizar um Card para cada tarefa da lista - OK
				4 - Criar o Componente Button do App - OK

			*/}
      {listaTarefas.map(({ id, criadoEm, titulo, valor }) => {
        return (
          <Card
            key={id}
            id={id}
            titulo={titulo}
            valor={valor}
            criadoEm={criadoEm}
            onClick={() => del()}
          />
        );
      })}
    </Container>
  );
};

export default Home;

// main > App > AppRoutes > Home
