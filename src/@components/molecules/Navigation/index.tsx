import styled from "styled-components";
import { Flex, Text, LinkBox } from "~/@components/atoms";

export const Navigation = () => {
  const comingSoon = () => {
    alert("서비스 준비 중입니다.");
  };

  return (
    <Bar>
      <Flex justify="center">
        <InnerContainer>
          <Flex direction="row" justify="space-between">
            <LinkBox src={"/logo.svg"} alt={"benefit logo"} href={"/"} width={60} height={13} />
            <Flex direction="row" gap={16} justify="flex-end">
              <Text
                text="로그인"
                size={14}
                weight={500}
                color="#4E5059"
                cursor="pointer"
                onClick={() => comingSoon()}
              />
              <Text
                text="회원가입"
                size={14}
                weight={500}
                color="#4E5059"
                cursor="pointer"
                onClick={() => comingSoon()}
              />
            </Flex>
          </Flex>
        </InnerContainer>
      </Flex>
    </Bar>
  );
};

const Bar = styled.header`
  width: 100%;
  height: 53.33px;
  box-shadow: 0px 2.66667px 8px rgba(0, 0, 0, 0.08);
`;

const InnerContainer = styled.div`
  position: relative;
  width: 800px;
  height: 100%;
`;

const ButtonContainer = styled.div``;

const LoginContainer = styled.span``;
