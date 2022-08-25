import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/divyansh-1611/Website/main/Assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 380px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" Divyansh "}
          <a
            href="https://github.com/divyansh-1611/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @divyansh-1611
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
