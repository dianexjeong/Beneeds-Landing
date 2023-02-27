import styled from "styled-components";
import Image from "next/image";
import { Flex, Text, Space } from "~/@components/atoms";
import palette from "../../../@styles/colors";

export const Section3 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex direction="column" justify="center" align="center" gap={14}>
            <Flex direction="row" justify="center" align="flex-end" gap={8} height="">
              <Flex justify="center" align="center" width="" height="">
                <Image src="/phone.svg" alt="phone" width={34} height={54} />
                <Text text="전화영어부터" size={18} weight={500} height={160} color={palette.White} />
              </Flex>
              <Flex justify="center" align="center" width="" height="">
                <Line />
                <Space height="14px" />
              </Flex>
              <Flex justify="center" align="center" width="" height="">
                <Image src="/watermelon.svg" alt="watermelon" width={34} height={54} />
                <Text text="과일배송까지" size={18} weight={500} height={160} color={palette.White} />
              </Flex>
            </Flex>
            <span>
              <Text text="같은 일을 해도 " size={28} color={palette.White} weight={600} height={160} />
              <Text text="좋아하는건 " size={28} color="#666EF0" weight={600} height={160} />
              <Text text="다르니까!" size={28} color={palette.White} weight={600} height={160} />
            </span>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 369px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(102.17deg, rgba(144, 146, 254, 0.65) 37.87%, rgba(145, 166, 255, 0.65) 72.69%);
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const Line = styled.div`
  width: 87.75px;
  height: 0px;
  border: 1px solid white;
`;
