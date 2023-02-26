import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import { HTMLAttributes } from "react";
import palette from "~/@styles/colors";

export interface BenefitProps extends HTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
  provide_com: string;
  summary: string;
  bg_img?: string;
  detail_info_img?: string;
}

export const Benefit = ({ subtitle, title, provide_com, summary, bg_img }: BenefitProps) => {
  return (
    <>
      <Card>
        <Flex align="center" justify="space-between" width="100%">
          <Space margin="36px 0px 0px 0px" />
          <Text text={`${subtitle}`} size={15.75} weight={500} spacing={-0.5} height={140} color="#7A7CEA" />
          <Space margin="11.75px 0px 0px 0px" />
          <Text text={`${title}`} size={27} weight={600} spacing={-0.3} color={palette.Black} />
          <Space margin="27px 0px 0px 0px" />
          <Flex>
            <Line />
            <DetailContainer src={`${bg_img}`}>
              <Flex direction="column" justify="flex-start" align="flex-start" gap={17} height="">
                <Space margin="10px 0px 0px 0px" />
                <Flex direction="row" gap={45} width="" height="">
                  <Text text="제공업체" size={13.5} weight={600} spacing={-0.5} height={140} color={palette.Gray600} />
                  <Text
                    text={`${provide_com}`}
                    size={13.5}
                    weight={400}
                    height={140}
                    spacing={-0.5}
                    color={palette.Gray800}
                  />
                </Flex>
                <Flex direction="row" gap={45} width="" height="">
                  <Text text="관리 주기" size={13.5} weight={600} spacing={-0.5} height={140} color={palette.Gray600} />
                  <Text
                    text={`${summary}`}
                    size={13.5}
                    weight={400}
                    height={140}
                    spacing={-0.5}
                    color={palette.Gray800}
                  />
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
  width: 30vw;
  min-width: 394px;
  max-width: 443px;
  background: white;
  box-shadow: 0px 2.25px 13.5px rgba(0, 0, 0, 0.08);
  border-radius: 13.5px;
  overflow: hidden;
`;

const Line = styled.div`
  width: 88%;
  height: 0px;
  border: 0.6px solid rgba(208, 208, 208, 0.5);
`;

const DetailContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 27px;
  background: linear-gradient(
      74.83deg,
      #ffffff 18.69%,
      rgba(255, 255, 255, 0.901596) 65.02%,
      rgba(255, 255, 255, 0) 136.23%
    ),
    url(${({ src }) => src}) no-repeat center right;
  border-radius: 0px 0px 13.5px 0px;
`;

const ImageContainer = styled.div<{ src: string }>`
  aspect-ratio: 223/150;
  height: 145px;
  background: linear-gradient(
      74.83deg,
      #ffffff 18.69%,
      rgba(255, 255, 255, 0.901596) 65.02%,
      rgba(255, 255, 255, 0) 136.23%
    ),
    url(${({ src }) => src}) no-repeat center right;
  border-radius: 0px 0px 13.5px 0px;
`;
