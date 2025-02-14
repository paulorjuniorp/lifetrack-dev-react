import styled from "styled-components";

const ImagesDiv = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    #imagem1,
    #imagem2 {
      display: none;
    }
  }
`;

export default ImagesDiv;