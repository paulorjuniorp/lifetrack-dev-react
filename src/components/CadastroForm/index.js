import React, { useState } from 'react';
import Container from '../Container';
import LogoSection from '../LogSection';
import Title from '../Title';
import ImagesDiv from '../ImagesDiv';
import Image from '../Image';
import Form from '../Form';
import FormTitle from '../FormTitle';
import Fieldset from '../FieldSet';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const CadastroForm = ({ title, imageSrc1, imageSrc2, formTitle }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroConfirmacao, setErroConfirmacao] = useState('');

  const validarSenha = () => {
    let mensagemErro = "";

    if (!/[A-Z]/.test(senha)) mensagemErro += "Inclua pelo menos uma letra maiúscula. ";
    if (!/[a-z]/.test(senha)) mensagemErro += "Inclua pelo menos uma letra minúscula. ";
    if (!/\d/.test(senha)) mensagemErro += "Inclua pelo menos um número. ";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) mensagemErro += "Inclua pelo menos um caractere especial. ";
    if (senha.length < 8) mensagemErro += "A senha deve ter pelo menos 8 caracteres.";

    setErroSenha(mensagemErro);
    return mensagemErro === "";
  };

  const validarConfirmacao = () => {
    if (senha !== confirmSenha) {
      setErroConfirmacao("As senhas não coincidem.");
      return false;
    }
    setErroConfirmacao("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarSenha() && validarConfirmacao()) {
      const dadosCadastro = { nome, email, telefone, nascimento, passwdForm: senha };
      localStorage.setItem("cadastro", JSON.stringify(dadosCadastro));
      window.location.href = "./index.html";
    }
  };

  return (
    <Container>
      <LogoSection>
        <Title>{title}</Title>
        <ImagesDiv>
          <Image src={imageSrc1} alt="Personagem masculino sentado" />
          <Image src={imageSrc2} alt="Personagem feminina sentada" />
        </ImagesDiv>
      </LogoSection>
      <Form onSubmit={handleSubmit}>
        <FormTitle>{formTitle}</FormTitle>
        <Fieldset>
          <Label>Nome</Label>
          <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </Fieldset>
        <Fieldset>
          <Label>E-mail</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Fieldset>
        <Fieldset>
          <Label>Telefone</Label>
          <Input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </Fieldset>
        <Fieldset>
          <Label>Data de Nascimento</Label>
          <Input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} required />
        </Fieldset>
        <Fieldset>
          <Label>Senha</Label>
          <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <span className="mensagem-erro">{erroSenha}</span>
        </Fieldset>
        <Fieldset>
          <Label>Confirmar Senha</Label>
          <Input type="password" value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} required />
          <span className="mensagem-erro">{erroConfirmacao}</span>
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default CadastroForm;
