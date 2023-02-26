import { Text, Flex, Space } from "~/@components/atoms";
import Image from "next/image";
import styled from "styled-components";
import palette from "~/@styles/colors";

export const Section6 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start" align="flex-start" height="">
            <Text text="베니즈에서는" color={palette.Navy200} weight={600} size={36} height={160} />
            <span>
              <Text text="매번 다른 복지" color="#767DEE" weight={600} size={36} height={160} />
              <Text text="를 받을 수 있어요!" color={palette.Navy200} weight={600} size={36} height={160} />
            </span>
          </Flex>
          <Flex direction="row" justify="space-between">
            <Card>
              <Flex justify="flex-start" align="flex-start" height="">
                <Text text="지난달에는" size={22.5} weight={500} height={160} />
                <Text text="전화영어" size={22.5} weight={700} height={160} />
              </Flex>
              <Flex direction="row" width="" height="">
                <Space margin="0px 36px 0px 0px" />
                <Image src="/benefit-eng.svg" alt="전화영어" width={186} height={173} />
              </Flex>
            </Card>
            <Card>
              <Flex justify="flex-start" align="flex-start" height="">
                <Text text="이번달에는" size={22.5} weight={500} height={160} />
                <Text text="집 청소" size={22.5} weight={700} height={160} />
              </Flex>
              <Space margin="42px 0px 0px 0px" />
              <Image src="/benefit-clean.svg" alt="집 청소" width={259} height={209} />
            </Card>
            <Card>
              <Flex justify="flex-start" align="flex-start" height="">
                <Text text="다음달에는" size={22.5} weight={500} height={160} />
                <Text text="과일 배송" size={22.5} weight={700} height={160} />
              </Flex>
              <Image src="/benefit-fruit.svg" alt="과일 배송" width={261} height={248} />
            </Card>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 116vh;
  min-height: 729px;
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

const Card = styled.div`
  padding: 33px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 291.38px;
  height: 351px;
  background: #ffffff;
  box-shadow: 0px 2.25px 18px rgba(0, 0, 0, 0.08);
  border-radius: 13.5px;
`;
