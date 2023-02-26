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
              summary1="월 1회 3시간"
              bg_img="/bg-clean.svg"
            />
            <Benefit
              subtitle="직원들의 건강 밸런스를 위해"
              title="영양제 서비스"
              provide_com="디엘오 (DLO)"
              summary1="월 1회 60포 제공"
              summary2="비타민을 포함한 필수 영양제"
              bg_img="/bg-vitamin.svg"
            />
            <Benefit
              subtitle="지친 직원들의 비타민을 챙겨주는"
              title="과일 정기 배송"
              provide_com="언니의 입맛"
              summary1="월 1회 제공"
              summary2="4-7종류의 과일을 취향에 따라 제공"
              bg_img="/bg-fruit.svg"
            />
            <Benefit
              subtitle="휴식을 즐기며 마시기 좋은"
              title="전통주 서비스"
              provide_com="술마켓"
              summary1="월 1~2회 1~2병씩 제공"
            />
            <Benefit
              subtitle="다양한 취향과 취미를 가진 직원들을 위해"
              title="OTT/음악 구독권"
              provide_com="왓챠 / 웨이브 / 티빙 / 멜론"
              summary1="플랫폼 별로 다르기 때문에 상세정보 확인"
            />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100vw;
  height: 170vh;
  min-height: 901px;
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
