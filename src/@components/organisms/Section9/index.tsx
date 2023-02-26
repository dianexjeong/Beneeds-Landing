import styled from "styled-components";
import { Flex } from "~/@components/atoms";
import { Benefit } from "~/@components/molecules";

export const Section9 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex direction="row" justify="flex-start" wrap="wrap" gap={10} height="">
            <Benefit
              subtitle="퇴근 후에도 깨끗한 환경을 위해"
              title="집 청소 이용권"
              provide_com="미소 (miso)"
              summary="월 1회 3시간"
              bg_img="/bg-clean.svg"
            />
            <Benefit
              subtitle="직원들의 건강 밸런스를 위해"
              title="영양제 서비스"
              provide_com="디엘오 (DLO)"
              summary="월 1회 60포 제공"
              bg_img="/bg-clean.svg"
            />
            <Benefit
              subtitle="퇴근 후에도 깨끗한 환경을 위해"
              title="집 청소 이용권"
              provide_com="미소 (miso)"
              summary="월 1회 3시간"
              bg_img="/bg-clean.svg"
            />
            <Benefit
              subtitle="퇴근 후에도 깨끗한 환경을 위해"
              title="집 청소 이용권"
              provide_com="미소 (miso)"
              summary="월 1회 3시간"
              bg_img="/bg-clean.svg"
            />
            <Benefit
              subtitle="퇴근 후에도 깨끗한 환경을 위해"
              title="집 청소 이용권"
              provide_com="미소 (miso)"
              summary="월 1회 3시간"
              bg_img="/bg-clean.svg"
            />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 200vh;
  min-height: 1228px;
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
