import styled from "styled-components";
import { Text, Flex, Space } from "~/@components/atoms";
import Image from "next/image";
import palette from "~/@styles/colors";

export const Section8 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start" align="flex-start" height="">
            <Text text="쉽고 편하게," color={palette.Navy200} size={36} weight={600} height={160} />
            <Text text="간단한 베니즈 복지 설정 방법" color={palette.Navy200} size={36} weight={600} height={160} />
            <Space margin="46px 0px 0px 0px" />
          </Flex>
          <Flex justify="flex-start" align="center" height="">
            <MockupContainer url="/mockup-view.svg">
              <Space margin="36px 0px 0px 0px" />
              <Image src="/step01.svg" alt="step 1" width={70.88} height={29.25} />
              <Space margin="13.5px 0px 0px 0px" />
              <Text text="선택 가능한" color={palette.Navy200} size={29.25} weight={600} height={140} />
              <Text text="복지 종류를 확인해요" color={palette.Navy200} size={29.25} weight={600} height={140} />
            </MockupContainer>
            <MockupContainer url="/mockup-emp.svg">
              <Space margin="36px 0px 0px 0px" />
              <Image src="/step02.svg" alt="step 2" width={70.88} height={29.25} />
              <Space margin="13.5px 0px 0px 0px" />
              <Text text="복지를 받을" color={palette.Navy200} size={29.25} weight={600} height={140} />
              <Text text="직원을 선택해요" color={palette.Navy200} size={29.25} weight={600} height={140} />
            </MockupContainer>
            <MockupContainer url="/mockup-pay.svg">
              <Space margin="36px 0px 0px 0px" />
              <Image src="/step03.svg" alt="step 3" width={70.88} height={29.25} />
              <Space margin="13.5px 0px 0px 0px" />
              <Text text="예산 확인 후 결제해서" color={palette.Navy200} size={29.25} weight={600} height={140} />
              <Text text="링크를 받아요" color={palette.Navy200} size={29.25} weight={600} height={140} />
            </MockupContainer>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 300vh;
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

const MockupContainer = styled.div<{ url: string }>`
  width: 62.5vw;
  min-width: 800px;
  max-width: 1000px;
  aspect-ratio: 25/14;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: cover;
  resize: both;
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 27px;
`;
