import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  width: 60px;
  height: 60px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* cursor: pointer; */
  }
`;

const Box = styled.div`
  position: fixed;
  right: 90px;
  top: 110px;
  width: 90px;
  background-color: white;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  margin: 10px 0;
`;

export default function LayoutRecent() {
  // const router = useRouter();
  const [todayList, setTodayList] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const todayFunc = () => {
        let recent = JSON.parse(sessionStorage.getItem("todays") || "null");
        if (recent !== null) setTodayList(recent.slice(0, 3));
      };
      todayFunc();
    }
  }, []);

  return (
    <>
      <Box>
        <Title>최근본상품</Title>
        {todayList?.map((el: { images: any[] }) => (
          <ImgBox>
            <img
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/empty.png"
              }
            />
          </ImgBox>
        ))}
      </Box>
    </>
  );
}
