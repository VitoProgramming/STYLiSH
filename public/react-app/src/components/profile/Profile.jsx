import { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "../../assets/images/avatar.png";
import { devices } from "../../utils/constants";

const Container = styled.div`
  min-height: calc(100vh - 140px - 115px);
  position: relative;
  @media screen and ${devices.lg} {
    min-height: calc(100vh - 102px - 206px);
  }
`;

const FacebookLoginBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px 20px;
`;

const AvatarIcon = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "avatar",
}))`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: auto;
  cursor: pointer;
`;

const NameContainer = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const NameText = styled.span``;

const NameResult = styled.span`
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px #ccc;
`;

const EmailContainer = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const EmailText = styled.span``;

const EmailResult = styled.span`
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px #ccc;
`;

const FacebookButton = styled.button`
  width: 100%;
  padding: 15px 25px;
  border-radius: 20px;
  font-size: 18px;
  background-color: #1877f2;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Profile = () => {
  const [FBApiData, setFBApiData] = useState();

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "837689441044747",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });
      window.FB.getLoginStatus(function (response) {
        console.log(response);
      });
      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleFBLogin = () => {
    window.FB.login(
      function (response) {
        if (response.status === "connected") {
          window.FB.api(
            "/me",
            { fields: "id,name,picture,email" },
            function (response) {
              setFBApiData(response);
            }
          );
        }
      },
      {
        scope: "public_profile,email",
      }
    );
  };

  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log(response);
      setFBApiData("");
    });
  };

  return (
    <Container>
      <FacebookLoginBox>
        <AvatarIcon
          src={
            FBApiData && FBApiData.picture?.data.url
              ? FBApiData.picture?.data.url
              : Avatar
          }
        />
        <NameContainer>
          <NameText>Name:</NameText>
          <NameResult>
            {FBApiData && FBApiData.name ? FBApiData.name : "Guest"}
          </NameResult>
        </NameContainer>
        <EmailContainer>
          <EmailText>Email:</EmailText>
          <EmailResult>
            {FBApiData && FBApiData.email ? FBApiData.email : "Guest@email.com"}
          </EmailResult>
        </EmailContainer>
        {!FBApiData && (
          <FacebookButton onClick={handleFBLogin}>
            Login with Facebook
          </FacebookButton>
        )}
        {FBApiData && (
          <FacebookButton onClick={handleFBLogout}>
            Logout with Facebook
          </FacebookButton>
        )}
        <a href="https://www.flaticon.com/free-icons/user" title="user icons">
          User icons created by Becris - Flaticon
        </a>
      </FacebookLoginBox>
    </Container>
  );
};

export default Profile;
