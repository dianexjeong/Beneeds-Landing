import Image from "next/image";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section5 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex height="" align="flex-start" justify="flex-start">
            <Space margin="88px 0px 0px 0px" />
            <Text text="모든 직원들이 만족하는" size={32} color={palette.Navy200} weight={600} height={160} />
            <Text text="효율적인 복지를 위해" size={32} color={palette.Navy200} weight={600} height={160} />
            <Space margin="24px 0px 0px 0px" />
          </Flex>
          <Flex height="">
            <Flex direction="row" width="" height="" gap={12} justify="center">
              <CardVertical>
                <div style={{ width: "100%", height: "100%" }}>관련 아이콘/사진/목업</div>
                <Flex height="" justify="flex-start" align="flex-start">
                  <Text text="별도의 비용 없이" color="#7A7CEA" size={24} height={160} weight={600} />
                  <Text text="직원별 복지 제공" color="#7A7CEA" size={24} height={160} weight={600} />
                </Flex>
              </CardVertical>
              <div>
                <Flex gap={12}>
                  <CardHorizontal>
                    <div style={{ width: "100%", height: "100%" }}>관련 아이콘/사진/목업</div>
                    <Flex height="" justify="flex-end" align="flex-end">
                      <Text text="간편하게 직원이 만족하는" color="#7A7CEA" size={24} height={160} weight={600} />
                      <Text text="복리후생 선택" color="#7A7CEA" size={24} height={160} weight={600} />
                    </Flex>
                  </CardHorizontal>
                  <CardHorizontal>
                    <div style={{ width: "100%", height: "100%" }}>관련 아이콘/사진/목업</div>
                    <Flex height="" justify="flex-end" align="flex-end">
                      <Text text="간편하게 직원이 만족하는" color="#7A7CEA" size={24} height={160} weight={600} />
                      <Text text="복리후생 선택" color="#7A7CEA" size={24} height={160} weight={600} />
                    </Flex>
                  </CardHorizontal>
                </Flex>
              </div>
            </Flex>
            <Space margin="51.75px 0px 0px 0px" />
            <Line />
            <Space margin="33.75px 0px 0px 0px" />
            <span>
              <Image src="/logoBlue.svg" alt="Beneeds logo" width={136.72} height={24} />
              <Text text="가 " color={palette.Navy200} size={28} height={160} weight={500} />
              <Text text="직원 만족도" color={palette.Navy200} size={28} height={160} weight={700} />
              <Text text="를" color={palette.Navy200} size={28} height={160} weight={500} />
            </span>
            <span>
              <Text text="확실하게 올릴 수 있는 " color={palette.Navy200} size={28} height={160} weight={500} />
              <Text text="다양한 복지" color={palette.Navy200} size={28} height={160} weight={700} />
              <Text text="를 준비했어요" color={palette.Navy200} size={28} height={160} weight={500} />
            </span>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 1111px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const CardVertical = styled.div`
  background: rgba(122, 124, 234, 0.1);
  border-radius: 27px;
  width: 321px;
  height: 452px;
  display: flex;
  flex-direction: column;
  justify: space-between;
  padding: 35px 40px;
`;

const CardHorizontal = styled.div`
  background: rgba(122, 124, 234, 0.1);
  border-radius: 27px;
  width: 467px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify: space-between;
  padding: 37px 36px;
`;

const Line = styled.div`
  width: 3px;
  height: 148px;
  background: linear-gradient(180deg, #7e7ce6 34.5%, rgba(126, 124, 230, 0) 100%);
`;
