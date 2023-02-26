import styled from "styled-components";

export const Section9 = () => {
  return (
    <>
      <Bg>
        <InnerContainer></InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 200vh;
  min-height: 1228px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 163.25px 0px;
`;

const InnerContainer = styled.div`
  width: 62.5vw;
  min-width: 800px;
  height: 100%;
`;
