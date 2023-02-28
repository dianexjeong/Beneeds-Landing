import styled from "styled-components";
import { Space, Text, Flex } from "~/@components/atoms";
import { NotifyButton } from "~/@components/molecules";
import palette from "~/@styles/colors";

export const Section1 = () => {
  return (
    <Bg>
      <InnerContainer>
        <Space margin="171px 0px 0px 0px" />
        <Flex direction="column" align="flex-start" justify="center" height="">
          <Text text="새로운 복지의 시작" size={12} weight={500} color="#767DEE" height={160} />
          <Space margin="8px 0px 0px 0px" />
          <span>
            <Text
              background="linear-gradient(322.21deg, #767DEE 51.03%, #81CFD8 129.43%)"
              text="원하는 복지"
              size={38}
              height={150}
              gradient={true}
              weight={700}
            />
            <Text text={"를 고르는"} size={38} height={150} weight={700} />
          </span>
          <Text text={"새로운 복지 관리의 시작"} size={38} height={150} weight={700} />
          <Space margin="20.5px 0px 0px 0px" />
          <Text
            text="직원이 원하는 복지를 받아볼 수 있도록"
            size={16}
            weight={500}
            height={160}
            color={palette.Gray800}
          />
          <Text
            text="새로운 복지 관리의 첫 걸음"
            size={16}
            weight={500}
            height={160}
            color={palette.Gray800}
            spacing={-0.5}
          />
        </Flex>
      </InnerContainer>
    </Bg>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 588px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7ff 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
