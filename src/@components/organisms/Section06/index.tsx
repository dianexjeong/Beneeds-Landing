import { Text, Flex, Space } from "~/@components/atoms";
import styled from "styled-components";
import palette from "~/@styles/colors";
import Image from "next/image";

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
            <Space margin="50px 0px 0px 0px" />
            <Image src="/benefit-monthly.svg" alt="monthly benefits" height={464} width={902} />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 915px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;
