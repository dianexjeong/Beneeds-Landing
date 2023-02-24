import styled from "styled-components";
import { Space, Text, Flex } from "~/@components/atoms";
import { NotifyButton } from "~/@components/molecules";
import palette from "~/@styles/colors";

export const Section1 = () => {
  return (
    <>
      <Space height="54px" />
      <Bg>
        <InnerContainer>
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Space margin="131px 0px 0px 0px" />
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
            <Text text="새로운 복지 관리의 첫 걸음" size={16} weight={500} height={160} color={palette.Gray800} />
            <Space margin="113px 0px 0px 0px" />
            <Flex direction="row" align="flex-start" justify="center">
              <NotifyButton background={`${palette.Navy200}`} textColor={`${palette.White}`} />
            </Flex>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 93vh;
  min-height: 588px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7ff 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 62.5vw;
  min-width: 800px;
  height: 100%;
`;
