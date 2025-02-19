import LoginForm from './components/LoginForm/index';
import CadastroForm from './components/CadastroForm/index';
import PasswdRecoveryForm from './components/PasswdRecoveryForm';
import Home from './components/Home';
import imagem1 from './imagens/peep-sitting-4.png';
import imagem2 from './imagens/peep-sitting-7.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/"
              element={
                <LoginForm title="Sistema de Organização Pessoal com recomendações"
                  formTitle="Bem-vindo Persona"
                  subTitle="Preencha os dados do login para acessar"
                  imageSrc1={imagem1}
                  imageSrc2={imagem2}
                />} />
            <Route path="/cadastro"
              element={
                <CadastroForm title="Sistema de Organização Pessoal com recomendações"
                  formTitle="Cadastro de Usuário"
                  imageSrc1={imagem1}
                  imageSrc2={imagem2}
                />} />
            <Route path="/recuperacao" element={<PasswdRecoveryForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
