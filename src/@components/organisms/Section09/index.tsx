
import styled from "styled-components";
import { Text, Flex, Space } from "~/@components/atoms";
import Image from "next/image";
import palette from "~/@styles/colors";

export const Section9 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex justify="flex-start" align="flex-start" height="">
            <Space margin="132px 0px 0px 0px" />
            <Text text="쉽고 편하게," color={palette.Navy200} size={36} weight={600} height={160} />
            <Text text="간단한 베니즈 복지 설정 방법" color={palette.Navy200} size={36} weight={600} height={160} />
            <Space margin="46px 0px 0px 0px" />
          </Flex>
          <Flex justify="flex-start" align="center" height="">
            <MockupContainer url="/mockup-view.svg">
              <Space margin="32px 0px 0px 0px" />
              <Image src="/step01.svg" alt="step 1" width={64} height={26} />
              <Space margin="12px 0px 0px 0px" />
              <Text text="선택 가능한" color={palette.Navy200} size={26} weight={600} height={140} />
              <Text text="복지 종류를 확인해요" color={palette.Navy200} size={26} weight={600} height={140} />
            </MockupContainer>
            <MockupContainer url="/mockup-emp.svg">
              <Space margin="32px 0px 0px 0px" />
              <Image src="/step02.svg" alt="step 2" width={64} height={26} />
              <Space margin="12px 0px 0px 0px" />
              <Text text="복지를 받을" color={palette.Navy200} size={26} weight={600} height={140} />
              <Text text="직원을 선택해요" color={palette.Navy200} size={26} weight={600} height={140} />
            </MockupContainer>
            <MockupContainer url="/mockup-pay.svg">
              <Space margin="32px 0px 0px 0px" />
              <Image src="/step03.svg" alt="step 3" width={64} height={26} />
              <Space margin="12px 0px 0px 0px" />
              <Text text="예산 확인 후 결제해서" color={palette.Navy200} size={26} weight={600} height={140} />
              <Text text="링크를 받아요" color={palette.Navy200} size={26} weight={600} height={140} />
            </MockupContainer>
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 1778px;
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
  justify-content: flex-start;
`;

const MockupContainer = styled.div<{ url: string }>`
  width: 800px;
  aspect-ratio: 25/14;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: cover;
  resize: both;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 27px;
`;
