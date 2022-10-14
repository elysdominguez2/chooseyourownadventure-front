import styled from "styled-components";

import Start from "../components/Start";

export const Homepage = () => {
  return (
    <Container>
      <Start />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
