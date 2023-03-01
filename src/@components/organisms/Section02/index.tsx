import { Flex, Text, Space } from "~/@components/atoms";
import styled from "styled-components";
import palette from "~/@styles/colors";

export const Section2 = () => {
  return (
    <Bg>
      <Flex justify="flex-start">
        <InnerContainer>
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Space margin="92px 0px 0px 0px" />
            <Text text="정답이 없는 직원 복지.." color={palette.Navy200} weight={600} size={30} height={160} />
            <Text text="이런 고민 해본 적 있으신가요?" color={palette.Navy200} weight={600} size={30} height={160} />
          </Flex>
        </InnerContainer>
        <Space margin="24px 0px 0px 0px" />
        <Flex direction="row" justify="space-between" height="">
          <Speech1Container>
            <Flex width="">
              <Text text="직원들이 만족할 만한 복지가" color={palette.Blue500} weight={500} size={16} height={160} />
              <Text text="무엇인지 모르겠어요" color={palette.Blue500} weight={500} size={16} height={160} />
            </Flex>
          </Speech1Container>
          <Speech3Container>
            <Flex width="">
              <Text text="처음 도입하는 복지," color={palette.Blue500} weight={500} size={16} height={160} />
              <Text text="어디서부터 시작해야하나요?" color={palette.Blue500} weight={500} size={16} height={160} />
            </Flex>
          </Speech3Container>
        </Flex>
        <Flex direction="row" justify="flex-start" height="">
          <Space margin="0px 250px 0px 0px" />
          <Speech2Container>
            <Flex width="">
              <Text text="비용을 지출해 준비했는데," color={palette.Blue500} weight={500} size={16} height={160} />
              <Text text="정작 쓰이지 않는 복지가 있어요" color={palette.Blue500} weight={500} size={16} height={160} />
            </Flex>
          </Speech2Container>
        </Flex>
      </Flex>
      <Space height="90px" />
    </Bg>
  );
};

const Bg = styled.div`
  width: 100;
  height: 533px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
`;

const Speech1Container = styled.div`
  background: url("/speech1.svg") no-repeat center;
  width: 310px;
  height: 130px;
`;

const Speech2Container = styled.div`
  background: url("/speech2.svg") no-repeat center;
  width: 310px;
  height: 130px;
`;

const Speech3Container = styled.div`
  background: url("/speech3.svg") no-repeat center;
  width: 310px;
  height: 130px;
`;
