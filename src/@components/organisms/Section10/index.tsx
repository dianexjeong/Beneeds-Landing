import styled from "styled-components";
import { Space, Text } from "~/@components/atoms";
import { NotifyButton } from "~/@components/molecules";
import palette from "~/@styles/colors";

export const Section10 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Space margin="140px 0px 0px 0px" />
          <span>
            <Text text="우리 회사" weight={600} color={palette.Black} size={38} height={160} />
            <Text text=" 복지의 만족도" weight={600} color="#7A7CEA" size={38} height={160} />
            <Text text="를" weight={600} color={palette.Black} size={38} height={160} />
          </span>
          <Text text="올리고 싶다면?" weight={600} color={palette.Black} size={38} height={160} />
          <Space margin="42px 0px 0px 0px" />
          <NotifyButton
            background="linear-gradient(232.65deg, #6D7BFF -7.36%, #81CFD8 112.81%)"
            textColor={palette.White}
          />
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 620px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
