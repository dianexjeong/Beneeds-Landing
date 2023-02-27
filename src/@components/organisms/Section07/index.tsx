import Image from "next/image";
import styled from "styled-components";
import { Text, Flex, Space } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section7 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start">
            <Space margin="119px 0px 0px 0px" />
            <span>
              <Image src="/logoBlue.svg" alt="Beneeds logo" width={136.72} height={24} />
              <Text text="는" color="#767DEE" weight={600} size={32} height={140} />
            </span>
            <Text text="이런 기업에게 좋아요!" color="#767DEE" weight={600} size={32} height={140} />
            <Space margin="81px 0px 0px 0px" />
            <Flex justify="flex-start" align="flex-start" height="">
              <Text text="직원이 만족할 수 있는" weight={600} size={26} height={160} color={palette.Navy200} />
              <Text text="복지를 제공하고 싶은 회사" weight={600} size={26} height={160} color={palette.Navy200} />
            </Flex>
            <Space margin="44px 0px 0px 0px" />
            <Line />
            <Space margin="61px 0px 0px 0px" />
            <Flex justify="flex-end" align="flex-end" height="">
              <Text
                text="새롭게 복지를 도입하고 싶은 회사"
                weight={600}
                size={26}
                height={160}
                color={palette.Navy200}
              />
            </Flex>
            <Space margin="61px 0px 0px 0px" />
            <Line />
            <Space margin="44px 0px 0px 0px" />
            <Flex justify="flex-start" align="flex-start" height="">
              <Text
                text="어떤 복지가 우리 직원들에게 맞는지"
                weight={600}
                size={26}
                height={160}
                color={palette.Navy200}
              />
              <Text text="고민이 되는 회사" weight={600} size={26} height={160} color={palette.Navy200} />
            </Flex>
            <Space margin="118px 0px 0px 0px" />
            <Text text="레이아웃 및 문구 고민중~ 윤선언니 최고" color="#DADADA" size={28} height={160} weight={600} />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 1187px;
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
  width: 100%;
  border: 0.9px solid rgba(126, 124, 230, 0.5);
`;
