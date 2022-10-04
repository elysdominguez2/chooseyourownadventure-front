import styled from "styled-components";
import City from "../components/City";
import Start from "../components/Start";

export const Homepage = () => {
  return (
    <Container>
      <Start />
      <City />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
