import React, { useState } from "react";
import Container from "../Container";
import Form from "../Form";
import Button from "../Button";
import Link from "../Link";
import Input from "../Input";

const PasswdRecoveryForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosCadastro = JSON.parse(localStorage.getItem("cadastro"));
    
    if (dadosCadastro && email === dadosCadastro.email) {
      alert("Um e-mail de recuperação foi enviado.");
    } else {
      alert("E-mail não cadastrado.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Recuperação de Senha</h2>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Digite seu e-mail" 
          required 
        />
        <Button type="submit">Enviar Link de Recuperação</Button>

      </Form>
    </Container>
  );
};

export default PasswdRecoveryForm;
