import { Flex, Text, Space } from "~/@components/atoms";
import styled from "styled-components";
import palette from "~/@styles/colors";

export const Section2 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Space margin="103.5px 0px 0px 0px" />
            <Text text="정답이 없는 직원 복지.." color={palette.Navy200} weight={600} size={36} height={160} />
            <Text text="이런 고민 해본 적 있으신가요?" color={palette.Navy200} weight={600} size={36} height={160} />
            <Space margin="29.13px 0px 0px 0px" />
            <Flex direction="row" gap={185} height="108px">
              <Flex align="flex-start">
                <Text text="직원들이" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="만족할 만한 복지가" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray700} weight={400} size={22} height={160} />
              </Flex>
              <Flex align="flex-start">
                <Text text="직원들이" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="만족할 만한 복지가" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray700} weight={400} size={22} height={160} />
              </Flex>
              <Flex align="flex-start">
                <Text text="직원들이" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="만족할 만한 복지가" color={palette.Gray700} weight={400} size={22} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray700} weight={400} size={22} height={160} />
              </Flex>
            </Flex>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 77vh;
  min-height: 482px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 62.5vw;
  min-width: 800px;
  height: 100%;
`;
