import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #6A636A;
    min-height: 100vh;
    color: #FFF;
`;

export const Sidebar = styled.nav`
    background-color: #031C30;
    display: flex;
    width: 18.75rem;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    padding: 2% 0;
    overflow: hidden;
`;

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin: 0 8px;
`;

export const SidebarItem = styled.a`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 1.375rem;
    text-decoration: none;
    color: #FEF5FF;
    padding: 10px 15px;
    border-radius: 10px;
    transition: background 0.3s;
    width: calc(100% - 16px);
    box-sizing: border-box;

    &:hover {
        background-color: #888;
    }

    &.active {
        background-color: #667A8A;
        margin-top: auto; 
        width: 100%;
    }

    &.logout {
        background-color: #667A8A;
        margin-top: auto; 
        width: 100%;
    }
`;


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    width: 100%;
`;

export const MainContent = styled.main`
    background-color: #FEF5FF;
    color: #6A636A;
    width: 80vw;
    height: 80vh;
    padding: 3.75rem 1.56rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConstructionContainer = styled.div`
    text-align: center;

    h1 {
        font-size: 2rem;
    }

    img {
        width: 200px;
        margin-top: 10px;
    }
`;
