import { 
    Container, 
    Sidebar, 
    SidebarItems, 
    SidebarItem, 
    MainContainer, 
    MainContent, 
    ConstructionContainer 
} from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileText, faPlug, faCog, faSignOut } from "@fortawesome/free-solid-svg-icons";
import ImgConstructor from '../../imagens/constructor.png'

const Home = () => {
    return (
        <Container>
            <Sidebar>
                <SidebarItems>
                    <SidebarItem href="organization.html" className="active">
                        <FontAwesomeIcon icon={faHome} />
                        <p>Home</p>
                    </SidebarItem>
                    <SidebarItem href="perfil.html">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Perfil</p>
                    </SidebarItem>
                    <SidebarItem href="#">
                        <FontAwesomeIcon icon={faFileText} />
                        <p>Relatórios</p>
                    </SidebarItem>
                    <SidebarItem href="#">
                        <FontAwesomeIcon icon={faPlug} />
                        <p>Plugins</p>
                    </SidebarItem>
                </SidebarItems>
                <SidebarItem href="#" className="logout">
                    <FontAwesomeIcon icon={faSignOut} />
                    <p>Sair</p>
                </SidebarItem>
            </Sidebar>

            <MainContainer>
                <MainContent>
                    <ConstructionContainer>
                        <h1>Em construção rs</h1>
                        <img src={ImgConstructor} alt="Página em construção" />
                    </ConstructionContainer>
                </MainContent>
            </MainContainer>
        </Container>
    );
};

export default Home;