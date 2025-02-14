import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  font-family: "Akaya Kanadaka", system-ui;
  margin: 8%;
  color: ${props => props.cor || '#FFF'};

  @media (max-width: 1200px) {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
  }
`;

export default Title;