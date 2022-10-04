import styled from "styled-components";
import City from "../components/City";

export const Homepage = () => {
  return (
    <Container>
      <City />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
