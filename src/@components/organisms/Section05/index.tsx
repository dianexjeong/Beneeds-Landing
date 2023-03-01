import Image from "next/image";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import palette from "~/@styles/colors";

export const Section5 = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Flex>
            <Flex height="" align="flex-start" justify="flex-start">
              <Text text="모든 직원들이 만족하는" size={32} color={palette.Navy200} weight={600} height={160} />
              <Text text="효율적인 복지를 위해" size={32} color={palette.Navy200} weight={600} height={160} />
              <Space margin="24px 0px 0px 0px" />
            </Flex>
            <Flex height="">
              <Flex direction="row" width="" height="" gap={12} justify="center">
                <CardVertical>
                  <PriceTagContainer>
                    <Image src="/card-pricetag.svg" alt="price tag" width={272.31} height={266.19} />
                  </PriceTagContainer>
                  <Flex height="" justify="flex-start" align="flex-start">
                    <Text text="부담없이 무료로" color={palette.White} size={14} height={160} weight={400} />
                    <Text
                      text="직원들의 복지를 관리할 수 있도록"
                      color={palette.White}
                      size={14}
                      height={160}
                      weight={400}
                    />
                    <Space margin="11px 0px 0px 0px" />
                    <Text text="별도의 비용 없이" color={palette.White} size={24} height={160} weight={600} />
                    <Text text="직원별 복지 제공" color={palette.White} size={24} height={160} weight={600} />
                  </Flex>
                </CardVertical>
                <div>
                  <Flex gap={12}>
                    <CardHorizontalUp>
                      <ProfileContainer>
                        <Image src="/card-profile.svg" alt="profile" width={200.51} height={196} />
                      </ProfileContainer>
                      <Flex height="" justify="flex-end" align="flex-start">
                        <Text
                          text="직원이 만족해야 진짜 복지니까"
                          color={palette.White}
                          size={14}
                          height={160}
                          weight={400}
                        />
                        <Space margin="11px 0px 0px 0px" />
                        <Text text="간편하게 직원이" color={palette.White} size={24} height={160} weight={600} />
                        <Text text="선택하는 복리후생" color={palette.White} size={24} height={160} weight={600} />
                      </Flex>
                    </CardHorizontalUp>
                    <CardHorizontalDown>
                      <PieChartContainer>
                        <Image src="/card-piechart.svg" alt="pie chart" width={216.87} height={212} />
                      </PieChartContainer>
                      <Flex height="" justify="flex-end" align="flex-end">
                        <Text
                          text="복지는 한번만 이용하는게 아니니까"
                          color={palette.White}
                          size={14}
                          height={160}
                          weight={400}
                        />
                        <Space margin="53px 0px 0px 0px" />
                        <Text
                          text="직원 복지 통계 자료 제공"
                          color={palette.White}
                          size={24}
                          height={160}
                          weight={600}
                        />
                        <Text
                          text="추가 멘트 어쩌고 저쩌고"
                          color={palette.White}
                          size={24}
                          height={160}
                          weight={600}
                        />
                      </Flex>
                    </CardHorizontalDown>
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
          </Flex>
        </InnerContainer>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 1158px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const CardVertical = styled.div`
  background: #96a6ff;
  border-radius: 24px;
  width: 321px;
  height: 452px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 35px 40px;
  position: relative;
`;

const CardHorizontalUp = styled.div`
  background: #5c77e5;
  border-radius: 24px;
  width: 467px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 37px 36px;
  position: relative;
`;

const CardHorizontalDown = styled.div`
  background: #86afff;
  border-radius: 24px;
  width: 467px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 37px 36px;
  position: relative;
`;

const PriceTagContainer = styled.div`
  position: absolute;
  left: 84.22px;
  top: -20px;
  transform: rotate(17.42deg);
`;

const ProfileContainer = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`;

const PieChartContainer = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
`;

const Line = styled.div`
  width: 2px;
  height: 148px;
  background: linear-gradient(180deg, #7e7ce6 34.5%, rgba(126, 124, 230, 0) 100%);
`;
