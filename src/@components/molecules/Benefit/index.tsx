import styled from "styled-components";
import { Space } from "~/@components/atoms";
import { HTMLAttributes } from "react";

export interface BenefitProps extends HTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
  provide_com: string;
  summary: string;
  bg_img: string;
  detail_info_img: string;
}

export const Benefit = ({ subtitle, title, provide_com, summary, bg_img, detail_info_img }: BenefitProps) => {
  return (
    <>
      <Card>
        <Space margin="36px 0px 0px 0px" />
      </Card>
    </>
  );
};

const Card = styled.div`
  aspect-ratio: 394/249;
  min-width: 394px;
  max-width: 500px;
`;
