import { Text, Flex, Space } from "~/@components/atoms";
import Image from "next/image";
import styled from "styled-components";
import palette from "~/@styles/colors";

export const Section6 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start">
            <Space margin="146px 0px 0px 0px" />
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
                  <Text text="지난달에는" size={20} weight={500} height={160} />
                  <Text text="전화영어" size={20} weight={700} height={160} />
                </Flex>
                <Flex direction="row" width="" height="">
                  <Space margin="0px 36px 0px 0px" />
                  <Image src="/benefit-eng.svg" alt="전화영어" width={165} height={155.6} />
                </Flex>
              </Card>
              <Card>
                <Flex justify="flex-start" align="flex-start" height="">
                  <Text text="이번달에는" size={20} weight={500} height={160} />
                  <Text text="집 청소" size={20} weight={700} height={160} />
                </Flex>
                <Image src="/benefit-clean.svg" alt="집 청소" width={239} height={189} />
              </Card>
              <Card>
                <Flex justify="flex-start" align="flex-start" height="">
                  <Text text="다음달에는" size={20} weight={500} height={160} />
                  <Text text="과일 배송" size={20} weight={700} height={160} />
                </Flex>
                <Image src="/benefit-fruit.svg" alt="과일 배송" width={241} height={228} />
              </Card>
            </Flex>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 730px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const Card = styled.div`
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 259px;
  height: 312px;
  background: #ffffff;
  box-shadow: 0px 2.25px 18px rgba(0, 0, 0, 0.08);
  border-radius: 13.5px;
`;
