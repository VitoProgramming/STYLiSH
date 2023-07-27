import React from "react";
import styled from "styled-components";
import LineIcon from "../../assets/images/social-media-line.png";
import TwitterIcon from "../../assets/images/social-media-twitter.png";
import FacebookIcon from "../../assets/images/social-media-facebook.png";
import { devices } from "../../utils/constants";

const MainFooter = styled.footer`
  background-color: #313538;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1160px;
  margin: 0 auto;
  @media screen and ${devices.lg} {
    height: 206px;
    justify-content: center;
    position: relative;
    align-items: flex-start;
  }
`;

const FooterList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 46px;
  padding-bottom: 47px;
  margin-right: auto;
  @media screen and ${devices.lg} {
    margin-right: 0;
    align-items: flex-start;
    column-gap: 36px;
    margin-right: 31px;
    padding: 0;
    margin-top: 23px;
  }
`;

const FooterSubContainer1 = styled.div`
  display: flex;
  @media screen and ${devices.lg} {
    flex-direction: column;
    row-gap: 8px;
  }
`;

const FooterSubContainer2 = styled.div`
  display: flex;
  @media screen and ${devices.lg} {
    flex-direction: column;
    row-gap: 8px;
  }
`;

const FooterMenuItem = styled.li`
  width: 134px;
  white-space: nowrap;
  border-right: 1px solid #b2b2b2;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  height: 22px;
  color: #f5f5f5;
  &:last-child {
    border-right: none;
  }
  @media screen and ${devices.lg} {
    border-right: none;
    text-align: start;
    width: unset;
  }
`;

const FooterMenuLink = styled.a`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #f5f5f5;
  }
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 20px;
    color: #d3d3d3;
  }
`;

const FooterMenuLinkSpan = styled.span`
  margin-left: 5px;
  @media screen and ${devices.lg} {
    display: inline-block;
  }
`;

const FooterContact = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding-top: 33px;
  padding-bottom: 32px;
  @media screen and ${devices.lg} {
    column-gap: 14px;
    padding: 0;
    margin-top: 41px;
  }
`;

const FooterContactMenuItem = styled.li``;

const FooterContactMenuLink = styled.a``;

const FooterContactImage = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  width: 50px;
  height: 50px;
  @media screen and ${devices.lg} {
    width: 20px;
    height: 20px;
  }
`;

const FooterCopyright = styled.small`
  color: #828282;
  font-size: 12px;
  line-height: 17px;
  padding-top: 50px;
  padding-bottom: 48px;
  margin-left: 30px;
  @media screen and ${devices.lg} {
    margin-left: 0;
    padding: 0;
    font-size: 10px;
    line-height: 14px;
    position: absolute;
    top: 112px;
    transform: scale(0.83333333);
  }
`;

const Footer = () => {
  return (
    <MainFooter>
      <FooterContainer>
        <FooterList>
          <FooterSubContainer1>
            <FooterMenuItem>
              <FooterMenuLink href="#">
                關於<FooterMenuLinkSpan>STYLISH</FooterMenuLinkSpan>
              </FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href="#">服務條款</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href="#">隱私政策</FooterMenuLink>
            </FooterMenuItem>
          </FooterSubContainer1>
          <FooterSubContainer2>
            <FooterMenuItem>
              <FooterMenuLink href="#">聯絡我們</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href="#">FAQ</FooterMenuLink>
            </FooterMenuItem>
          </FooterSubContainer2>
        </FooterList>
        <FooterContact>
          <FooterContactMenuItem>
            <FooterContactMenuLink>
              <FooterContactImage src={LineIcon} />
            </FooterContactMenuLink>
          </FooterContactMenuItem>
          <FooterContactMenuItem>
            <FooterContactMenuLink>
              <FooterContactImage src={TwitterIcon} />
            </FooterContactMenuLink>
          </FooterContactMenuItem>
          <FooterContactMenuItem>
            <FooterContactMenuLink>
              <FooterContactImage src={FacebookIcon} />
            </FooterContactMenuLink>
          </FooterContactMenuItem>
        </FooterContact>
        <FooterCopyright>© 2018. All rights reserved.</FooterCopyright>
      </FooterContainer>
    </MainFooter>
  );
};

export default Footer;
