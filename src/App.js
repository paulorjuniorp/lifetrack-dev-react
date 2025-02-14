import LoginForm from './components/LoginForm/index';
import CadastroForm from './components/CadastroForm/index';
import PasswdRecoveryForm from './components/PasswdRecoveryForm';
import imagem1 from './imagens/peep-sitting-4.png';
import imagem2 from './imagens/peep-sitting-7.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*<CadastroForm 
          title="Sistema de Organização Pessoal com recomendações"
          formTitle="Cadastro de Usuário"
          imageSrc1={imagem1}
          imageSrc2={imagem2}
        ></CadastroForm>*/}
        <LoginForm
          title="Sistema de Organização Pessoal com recomendações"
          formTitle="Bem-vindo Persona"
          subTitle="Preencha os dados do login para acessar"
          imageSrc1={imagem1}
          imageSrc2={imagem2}
        >
        
        </LoginForm>
        {/*<PasswdRecoveryForm>

        </PasswdRecoveryForm>*/}
      </header>
    </div>
  );
}

export default App;
