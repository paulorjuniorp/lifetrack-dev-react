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
import Link from '../Link';
import SubTitle from '../SubTitle';

const LoginForm = ({ title, imageSrc1, imageSrc2, formTitle, subTitle }) => {
  const [usuario, setUsuario] = useState('');
  const [passwd, setPasswd] = useState('');
  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosCadastro = JSON.parse(localStorage.getItem("cadastro"));

    setEmailErro("");
    setSenhaErro("");

    if (dadosCadastro) {
      const { email, passwdForm } = dadosCadastro;

      if (usuario === email && passwd === passwdForm) {
        window.location.href = "./organization.html";
      } else {
        if (usuario !== email) setEmailErro("E-mail incorreto.");
        if (passwd !== passwdForm) setSenhaErro("Senha incorreta.");
      }
    } else {
      setEmailErro("Nenhum cadastro encontrado. Cadastre-se primeiro.");
    }
  };

  return (
    <Container>
      <LogoSection>
        <Title cor="green">{title}</Title>
        <ImagesDiv>
          <Image src={imageSrc1} alt="Personagem masculino sentado" />
          <Image src={imageSrc2} alt="Personagem feminina sentada" />
        </ImagesDiv>
      </LogoSection>
      <Form onSubmit={handleSubmit}>
        <FormTitle>{formTitle}</FormTitle>
        <SubTitle>{subTitle}</SubTitle>
        <Fieldset>
          <Label htmlFor="usuario">Usuário</Label>
          <Input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
          <span className="mensagem-erro">{emailErro}</span>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="passwd">Senha</Label>
          <Input type="password" value={passwd} onChange={(e) => setPasswd(e.target.value)} required />
          <span className="mensagem-erro">{senhaErro}</span>
        </Fieldset>
        <Link href="#">Esqueceu a senha?</Link>
        <Button type="submit">Entrar</Button>
        <div>
          <span>Não tem uma conta? <Link href="form.html"><strong>Cadastre-se</strong></Link></span>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
