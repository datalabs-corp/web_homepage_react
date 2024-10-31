import React from "react";
import styled from "styled-components";
import { NoteSansMedium, GmarketBold } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
// 테스트를 위한 주석입니다
// 삭제해도 무방합니다
const BlogContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center; 
`
const BlogSection = styled.section`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    @media (max-width: 720px) {
        flex-direction: column;
        padding: 30%;
    }
`
const BlogTopSection = styled.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const ServiceBlog = () => {
  return (
      <BlogContainer>
          <BlogSection>
            <BlogTopSection>
              <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"0.8vw"} fontWeight={"bold"}>마이 인포 마켓 카테고리 글</GmarketBold>
              <NoteSansMedium>전체 글 보러가기</NoteSansMedium>
            </BlogTopSection>
          </BlogSection>
      </BlogContainer>
  )
}

