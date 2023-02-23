import { useRouter } from "next/router";
import styled from "styled-components";
import { Flex, Text, LinkBox } from "~/@components/atoms";

export const Navigation = ({ companyName }: { companyName: string }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const linkList = [
    {
      id: 1,
      text: "직원설정",
      href: "/employee-list",
    },
    {
      id: 2,
      text: "복지 시작하기",
      href: "/start",
    },
    {
      id: 3,
      text: "복지관리",
      href: "/manage",
    },
    {
      id: 4,
      text: "결제내역",
      href: "/payment",
    },
  ];

  return (
    <Bar>
      <Flex justify="center">
        <InnerContainer>
          <Flex direction="row" justify="space-between" align="center">
            <LinkBox src={"/logo.svg"} alt={"benefit logo"} href={"/"} width={60} height={13} />
            <ButtonContainer>
              <Flex direction="row" gap={24}>
                {linkList.map((el) => (
                  <LinkBox
                    key={el.id}
                    href={el.href}
                    text={el.text}
                    size={14}
                    weight={500}
                    cursor={"pointer"}
                    isClicked={currentPath.startsWith(el.href)}
                  />
                ))}
              </Flex>
            </ButtonContainer>
            <LoginInfo>
              <Text text={companyName} size={12} color="#727EF2" weight={600} />
              <Text text="의 베네핏" size={12} weight={600} />
            </LoginInfo>
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

const LoginInfo = styled.span``;
