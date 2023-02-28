import styled from "styled-components";
import { Text, Flex } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section4 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="center" align="center">
            <span>
              <Text
                text="취향이 다양한 직원들"
                gradient={true}
                background="linear-gradient(100.98deg, #C579DB 0.89%, #7C83E9 38.04%)"
                weight={700}
                size={32}
                height={160}
              />
              <Text text="을 위해," weight={700} size={32} height={160} color={palette.Navy200} />
            </span>
            <Text text="직접 선택하는 개인화 복지 제공" weight={700} size={32} height={160} color={palette.Navy200} />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 459px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;
