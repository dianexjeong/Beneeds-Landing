import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import { HTMLAttributes } from "react";
import palette from "~/@styles/colors";

export interface BenefitProps extends HTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
  provide_com?: string;
  summary1: string;
  summary2?: string;
  bg_img?: string;
  detail_info_img?: string;
}

export const Benefit = ({ subtitle, title, provide_com, summary1, summary2, bg_img }: BenefitProps) => {
  return (
    <>
      <Card>
        <Flex align="center" justify="space-between" width="100%">
          <Space margin="32px 0px 0px 0px" />
          <Text text={`${subtitle}`} size={14} weight={500} spacing={-0.4} height={140} color="#7A7CEA" />
          <Space margin="11.75px 0px 0px 0px" />
          <Text text={`${title}`} size={24} weight={600} spacing={-0.3} color={palette.Black} />
          <Space margin="24px 0px 0px 0px" />
          <Flex>
            <Line />
            <DetailContainer src={`${bg_img}`}>
              <Flex direction="column" justify="flex-start" align="flex-start" gap={15} height="">
                <Space margin="10px 0px 0px 0px" />
                {provide_com ? (
                  <Flex direction="row" gap={40} width="" height="">
                    <Text text="제공업체" size={12} weight={600} spacing={-0.4} height={140} color={palette.Gray600} />
                    <Text
                      text={`${provide_com}`}
                      size={12}
                      weight={400}
                      height={140}
                      spacing={-0.4}
                      color={palette.Gray800}
                    />
                  </Flex>
                ) : (
                  <></>
                )}
                <Flex direction="row" gap={40} width="" height="" justify="flex-start" align="flex-start">
                  <Text text="상세정보" size={12} weight={600} spacing={-0.4} height={140} color={palette.Gray600} />
                  <Flex height="" width="" justify="flex-start" align="flex-start">
                    <Text
                      text={`${summary1}`}
                      size={12}
                      weight={400}
                      height={140}
                      spacing={-0.4}
                      color={palette.Gray800}
                    />
                    {summary2 ? (
                      <Text
                        text={`${summary2}`}
                        size={12}
                        weight={400}
                        height={140}
                        spacing={-0.4}
                        color={palette.Gray800}
                      />
                    ) : (
                      <></>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </DetailContainer>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

const Card = styled.div`
  aspect-ratio: 394/249;
  width: 394px;
  background: white;
  box-shadow: 0px 2.25px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
`;

const Line = styled.div`
  width: 346px;
  height: 0px;
  border: 0.6px solid rgba(208, 208, 208, 0.4);
`;

const DetailContainer = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 27px;
  background: linear-gradient(
      74.83deg,
      #ffffff 62.69%,
      rgba(255, 255, 255, 0.901596) 84.02%,
      rgba(255, 255, 255, 0) 136.23%
    ),
    url(${({ src }) => src}) no-repeat top right;
  border-radius: 0px 0px 12px 0px;
`;
