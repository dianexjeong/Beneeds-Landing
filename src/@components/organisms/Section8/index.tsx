import styled from "styled-components";
import { Text, Flex, Space } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section8 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start" align="flex-start">
            <Text text="쉽고 편하게," color={palette.Navy200} size={36} weight={600} height={160} />
            <Text text="간단한 베니즈 복지 설정 방법" color={palette.Navy200} size={36} weight={600} height={160} />
            <Space margin="46px 0px 0px 0px" />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 284vh;
  min-height: 1778px;
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
