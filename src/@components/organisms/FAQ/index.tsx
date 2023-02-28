import { Text, Space, Flex } from "~/@components/atoms";
import palette from "~/@styles/colors";
import styled from "styled-components";

export const FAQ = () => {
  return (
    <>
      <Bg>
        <InnerContainer>
          <Space margin="120px 0px 0px 0px" />
          <Text text="베니즈 FAQ" size={14} height={140} weight={500} color="#7A7CEA" spacing={-0.5} />
          <Space margin="4px 0px 0px 0px" />
          <Text text="베니즈 복지에 대해" color={palette.Navy200} weight={600} size={32} height={160} />
          <Text text="궁금한 게 있으신가요?" color={palette.Navy200} weight={600} size={32} height={160} />
          <Space margin="50px 0px 0px 0px" />
          <Text text="결제는 어떤 방식으로 진행되나요?" weight={500} size={24} height={160} color={palette.Navy200} />
          <Space margin="16px 0px 0px 0px" />
          <Line />
          <Space margin="16px 0px 0px 0px" />
          <Text text="답변 내용" size={18} weight={400} height={160} color={palette.Navy200} />
          <Space margin="129px 0px 0px 0px" />
          <Text
            text="베니즈에 정기 결제 시스템이 있나요?"
            weight={500}
            size={24}
            height={160}
            color={palette.Navy200}
          />
          <Space margin="16px 0px 0px 0px" />
          <Line />
          <Space margin="16px 0px 0px 0px" />
          <Text text="답변 내용" size={18} weight={400} height={160} color={palette.Navy200} />
        </InnerContainer>
      </Bg>
    </>
  );
};
const Bg = styled.div`
  width: 100%;
  height: 710px;
  background: rgba(122, 124, 234, 0.08);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Line = styled.div`
  width: 100%;
  border: 0.8px solid #7e7ce6;
`;
