import { Button } from "~/@components/atoms";

export const NotifyButton = ({ background, textColor }: { background: string; textColor: string }) => {
  return (
    <>
      <a target="_blank" href="https://forms.gle/bBq4nsUNn1VjULNq5" rel="noopener noreferrer">
        <Button
          text="서비스 알림 신청받기"
          textColor={textColor}
          backgroundColor={background}
          textWeight={500}
          textSize={14}
          width="168px"
          height="50px"
          border="none"
          borderRadius="30px"
          cursor="pointer"
        />
      </a>
    </>
  );
};
