import Image from "next/image";
import styled from "styled-components";
import { Text, Flex, Space } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section8 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start" align="flex-start">
            <Space margin="119px 0px 0px 0px" />
            <span>
              <Image src="/logoBlue.svg" alt="Beneeds logo" width={136.72} height={24} />
              <Text text="는" color="#767DEE" weight={600} size={32} height={140} />
            </span>
            <Text text="이런 기업에게 좋아요!" color="#767DEE" weight={600} size={32} height={140} />
            <Space margin="83px 0px 0px 0px" />
            <Flex height="" align="flex-end">
              <Container>
                <Flex direction="row" align="flex-start" height="" width="" gap={32}>
                  <Space margin="0px 91px 0px 0px" />
                  <Text text="01." font="Montserrat Alternates" weight={800} size={30} height={140} color="#7A7CEA" />
                  <Flex justify="flex-start" align="flex-start" height="">
                    <Text text="직원이 만족할 수 있는" weight={600} size={26} height={160} color={palette.Navy200} />
                    <Text
                      text="복지를 제공하고 싶은 회사"
                      weight={400}
                      size={26}
                      height={160}
                      color={palette.Navy200}
                    />
                  </Flex>
                </Flex>
                <Space margin="84px 0px 0px 0px" />
                <Line />
                <Space margin="32px 0px 0px 0px" />
                <Flex direction="row" align="flex-start" height="" width="" gap={32}>
                  <Text text="02." font="Montserrat Alternates" weight={800} size={30} height={140} color="#7A7CEA" />
                  <span>
                    <Text text="새롭게 복지를 도입" weight={600} size={26} height={160} color={palette.Navy200} />
                    <Text text="하고 싶은 회사" weight={400} size={26} height={160} color={palette.Navy200} />
                  </span>
                </Flex>
                <Space margin="116px 0px 0px 0px" />
                <Line />
                <Space margin="32px 0px 0px 0px" />
                <Flex direction="row" align="flex-start" height="" width="" gap={32}>
                  <Space margin="0px 91px 0px 0px" />
                  <Text text="03." font="Montserrat Alternates" weight={800} size={30} height={140} color="#7A7CEA" />
                  <Flex justify="flex-start" align="flex-start" height="">
                    <Text
                      text="어떤 복지가 우리 직원들에게"
                      weight={600}
                      size={26}
                      height={160}
                      color={palette.Navy200}
                    />
                    <span>
                      <Text text="맞는지 고민" weight={600} size={26} height={160} color={palette.Navy200} />
                      <Text text="이 되는 회사" weight={400} size={26} height={160} color={palette.Navy200} />
                    </span>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 985px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 663px;
  height: 1px;
  background: linear-gradient(270deg, rgba(126, 124, 230, 0.5) 0%, rgba(126, 124, 230, 0) 100%);
`;

const Container = styled.div``;
