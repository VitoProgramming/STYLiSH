import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import StylishLogo from "../../assets/images/stylish-logo.png";
import SearchIcon from "../../assets/images/search-icon.png";
import CartImage from "../../assets/images/cart.png";
import CartHoverImage from "../../assets/images/cart-hover.png";
import MemberImage from "../../assets/images/member.png";
import MemberHoverImage from "../../assets/images/member-hover.png";
import { devices } from "../../utils/constants";

const MainHeader = styled.header`
  display: flex;
  height: 140px;
  align-items: center;
  width: 100%;
  padding: 28px 54px 28px 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 40px solid var(--color-black);
  background-color: var(--color-white);
  font-weight: 400;
  @media all and ${devices.lg} {
    border-bottom: none;
    padding: 0;
    flex-direction: column;
    gap: 0;
    height: 102px;
  }
`;

const LogoNavContainer = styled.div`
  display: flex;
  column-gap: 57px;
  align-items: flex-end;
  margin-right: auto;
  @media all and ${devices.lg} {
    flex-direction: column;
    margin-right: 0;
    column-gap: 0;
    align-items: initial;
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
`;
const LogoImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Stylish Logo",
}))`
  width: 258px;
  height: 48px;
  margin: 2px 0;
  @media screen and ${devices.lg} {
    margin: 2px 0;
    display: block;
    width: 129px;
    height: 24px;
    margin: 14px auto;
  }
`;

const MainHeaderNav = styled.nav`
  @media all and ${devices.lg} {
    width: 100vw;
    background-color: var(--color-black);
    height: 50px;
    display: flex;
    align-items: center;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and ${devices.lg} {
    width: 100%;
    justify-content: space-evenly;
  }
`;
const MenuItem = styled.li`
  padding-left: 30px;
  letter-spacing: 30px;
  width: 150px;
  white-space: nowrap;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  color: #3f3a3a;

  &:hover {
    color: #8b572a;
  }

  @media screen and ${devices.lg} {
    letter-spacing: initial;
    padding-left: 0;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    flex: 0 1 auto;
    color: var(--color-grey);

    &:hover {
      color: #fff;
    }
  }
`;
const MenuSeparator = styled.span`
  display: inline-block;
  border-left: 1px solid var(--color-black);
  background-color: var(--color-black);
  height: 20px;
  padding-top: 5px;
  @media screen and ${devices.lg} {
    border-color: #808080;
    height: 16px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 42px;
`;

const Form = styled.form`
  outline: 1px solid #979797;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  @media screen and ${devices.lg} {
    position: fixed;
    justify-content: space-between;
    top: 6px;
    left: 2.77777778%;
    width: 94.44444444%;
    padding: 0 6px 0 20px;
    padding-left: 20px;
    height: 40px;
    display: none;
    background-color: #fff;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  height: 24px;
  line-height: 24px;
  width: 140px;
  color: #8b572a;

  &:focus,
  &::placeholder {
    color: #8b572a;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
  @media screen and ${devices.lg} {
    background-color: transparent;
    width: 87%;
  }
`;

const SearchBtn1 = styled.button`
  background-image: url(${SearchIcon});
  width: 44px;
  height: 44px;
  @media screen and ${devices.lg} {
    width: 40px;
    height: 40px;
  }
`;

const SearchBtn2 = styled.button`
  display: none;
  @media screen and ${devices.lg} {
    width: 40px;
    height: 40px;
    display: initial;
    background-image: url(${SearchIcon});
    position: absolute;
    z-index: 2;
    top: 6px;
    right: calc(6px + 2.77777778%);
  }
`;

const CartMemberContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${devices.lg} {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--color-black);
    height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const CartSeparator = styled.span`
  @media screen and ${devices.lg} {
    border-left: 1px solid var(--color-grey);
    height: 24px;
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CartContainer = styled.div`
  @media screen and ${devices.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3.125%;
    padding-top: 3px;
  }
  @media screen and ${devices.md} {
    padding-left: 4%;
  }
`;

const MainHeaderCart = styled.div`
  position: relative;
  @media screen and ${devices.lg} {
    display: flex;
  }
`;

const CartIcon = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "cart",
}))`
  cursor: pointer;
  @media screen and ${devices.lg} {
    filter: brightness(5);
  }
`;

const CartNumber = styled.span`
  content: "1";
  position: absolute;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: inline-block;
  width: 24px;
  height: 24px;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

const CartName = styled.span`
  display: none;
  @media screen and ${devices.lg} {
    display: initial;
    color: var(--color-white);
    font-size: 16px;
    line-height: 16px;
    height: 16px;
  }
`;

const MainHeaderProfile = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${devices.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5.1%;
  }
  @media screen and ${devices.md} {
    padding-right: 6.7%;
  }
`;

const MemberIcon = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "member",
}))`
  cursor: pointer;
  margin-left: 42px;
  @media screen and ${devices.lg} {
    filter: brightness(5);
  }
`;

const MemberName = styled.span`
  display: none;
  @media screen and ${devices.lg} {
    display: initial;
    color: var(--color-white);
    font-size: 16px;
    line-height: 16px;
    height: 16px;
  }
`;

const Header = ({ cartQuantity }) => {
  const [inputText, setInputText] = useState("");
  const formRef = useRef(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInputText(event.target.value);
      window.location.assign(`/?q=${inputText}`);
    }
  };

  const searchButton1HandleClick = (event) => {
    event.preventDefault();
    window.location.assign(`/?q=${inputText}`);
  };

  const searchButton2HandleClick = (e) => {
    e.target.style.display = "none";
    formRef.current.style.display = "flex";
  };

  const cartHandleMouseOver = (e) => {
    e.target.src = CartHoverImage;
  };

  const cartHandleMouseOut = (e) => {
    e.target.src = CartImage;
  };

  const memberHandleMouseOver = (e) => {
    e.target.src = MemberHoverImage;
  };

  const memberHandleMouseOut = (e) => {
    e.target.src = MemberImage;
  };
  return (
    <MainHeader>
      <LogoNavContainer>
        <LogoLink href="/home.html">
          <LogoImage src={StylishLogo} />
        </LogoLink>
        <MainHeaderNav>
          <NavMenu>
            <MenuItem
              onClick={() => {
                window.location.assign("/home?category=women");
              }}
            >
              女裝
            </MenuItem>
            <MenuSeparator />
            <MenuItem
              onClick={() => {
                window.location.assign("/home?category=men");
              }}
            >
              男裝
            </MenuItem>
            <MenuSeparator />
            <MenuItem
              onClick={() => {
                window.location.assign("/home?category=accessories");
              }}
            >
              配件
            </MenuItem>
          </NavMenu>
        </MainHeaderNav>
      </LogoNavContainer>
      <ProfileContainer>
        <Form ref={formRef}>
          <SearchInput
            type="text"
            name="inputText"
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <SearchBtn1 onClick={searchButton1HandleClick} />
        </Form>
        <SearchBtn2 onClick={searchButton2HandleClick} />
        <CartMemberContainer>
          <CartSeparator />
          <CartContainer>
            <MainHeaderCart>
              <Link to="/cart">
                <CartIcon
                  src={CartImage}
                  onMouseOver={cartHandleMouseOver}
                  onMouseOut={cartHandleMouseOut}
                />
              </Link>
              <CartNumber>{cartQuantity}</CartNumber>
            </MainHeaderCart>
            <CartName>購物車</CartName>
          </CartContainer>
          <MainHeaderProfile>
            <Link to="/profile">
              <MemberIcon
                src={MemberImage}
                onMouseOver={memberHandleMouseOver}
                onMouseOut={memberHandleMouseOut}
              />
            </Link>
            <MemberName>會員</MemberName>
          </MainHeaderProfile>
        </CartMemberContainer>
      </ProfileContainer>
    </MainHeader>
  );
};

export default Header;
