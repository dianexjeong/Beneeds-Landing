import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import { Benefit } from "~/@components/molecules";

export const Section9 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex height="">
            <Space margin="126px 0px 0px 0px" />
            <Text text="직원들은 복지를" weight={600} size={32} color="black" height={140} />
            <Text text="달마다 선택해서 받아요" weight={600} size={32} color="black" height={140} />
            <Space margin="20px 0px 0px 0px" />
            <span>
              <Text text="직원 한 명당 5만원의 금액으로 " weight={500} size={18} color="black" height={140} />
              <Text text="각자 원하는 복지" weight={600} size={18} color="#767DEE" height={140} />
              <Text text="를 누릴 수 있도록" weight={500} size={18} color="black" height={140} />
            </span>
            <Space margin="58px 0px 0px 0px" />
          </Flex>
          <Flex direction="row" justify="center" align="center" wrap="wrap" gap={10} height="" width="">
            <Benefit
              subtitle="퇴근 후에도 깨끗한 환경을 위해"
              title="집 청소 이용권"
              provide_com="청소연구소"
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
              bg_img="/bg-drink.svg"
            />
            <Benefit
              subtitle="다양한 취향과 취미를 가진 직원들을 위해"
              title="OTT/음악 구독권"
              provide_com="왓챠 / 웨이브 / 티빙 / 멜론"
              summary1="플랫폼 별로 다르기 때문에 상세정보 확인"
              bg_img="/bg-ott.svg"
            />
            <Benefit
              subtitle="직원이 원하는 선물을 직접 고르는"
              title="이달의 선물"
              summary1="선물 리스트 중"
              summary2="원하는 선물을 하나 선택 후 수령"
              bg_img="/bg-gift.svg"
            />
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 1227px;
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
