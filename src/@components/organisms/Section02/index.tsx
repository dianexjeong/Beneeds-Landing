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
            <Space margin="29.13px 0px 0px 0px" />
          </Flex>
        </InnerContainer>
        <Flex direction="row" justify="center" height="">
          <Flex justify="flex-start" width="">
            <QuoteContainer>
              <Flex width="">
                <Text text="직원들이 만족할 만한 복지가" color={palette.Gray800} weight={400} size={16} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray800} weight={400} size={16} height={160} />
              </Flex>
            </QuoteContainer>
          </Flex>
          <Flex justify="flex-start" width="">
            <Space margin="100px 0px 0px 0px" />
            <QuoteContainer>
              <Flex width="">
                <Text text="직원들이 만족할 만한 복지가" color={palette.Gray800} weight={400} size={16} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray800} weight={400} size={16} height={160} />
              </Flex>
            </QuoteContainer>
          </Flex>
          <Flex justify="flex-start" width="">
            <Space margin="20px 0px 0px 0px" />
            <QuoteContainer>
              <Flex width="">
                <Text text="직원들이 만족할 만한 복지가" color={palette.Gray800} weight={400} size={16} height={160} />
                <Text text="무엇인지 모르겠어요" color={palette.Gray800} weight={400} size={16} height={160} />
              </Flex>
            </QuoteContainer>
          </Flex>
        </Flex>
        <Space height="90px" />
      </Flex>
    </Bg>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const QuoteContainer = styled.div`
  background: url("/quote.svg") no-repeat center;
  width: 295px;
  height: 133px;
`;
