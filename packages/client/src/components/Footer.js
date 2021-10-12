import { useContext } from "react";
import styled from "styled-components";
import { DiscordLogo, TwitchLogo, TwitterLogo } from "phosphor-react";
import TextLink from "./TextLink";
import { AuthContext } from "../context/AuthContext";

// create post and logout links will be conditionally rendered once isAdmin is being passed in a prop from feed ... being taken care of in task-84-feed-admin-check

const Footer = (props) => {
  const { logout } = useContext(AuthContext);

  const FooterDiv = styled.footer`
    background-color: #e5e5e5;
    padding: 4.5rem 1.5rem 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    .flex {
      display: flex;
    }
    .subDiv,
    .linkDiv {
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
    }
    .linkDiv {
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 1.5rem;
    }
    .copyright {
      span {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 750px) {
      .subDiv {
        flex-direction: column-reverse;
        justify-content: flex-end;
      }
      .iconDiv {
        margin-bottom: 1.5rem;
      }
    }
    @media (max-width: 500px) {
      .iconDiv,
      .copyright {
        width: 100%;
        justify-content: space-between;
      }
      .copyright {
        justify-content: center;
      }
      .linkDiv {
        align-items: center;
        margin-bottom: 3rem;
      }
    }
  `;
  const IconAnchor = styled.a`
    background: #fff;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin-left: 1.5rem;
    @media (max-width: 500px) {
      margin-left: 0;
      width: 4rem;
      height: 4rem;
    }
  `;

  return (
    <FooterDiv>
      {props.isAdmin && (
        <div className="linkDiv flex">
          <TextLink
            text="Create a post"
            link="/create-post"
            margin="0 0 1rem 0"
          />
          <TextLink text="Log out" link="/" onClick={logout} />
        </div>
      )}

      <div className="subDiv flex">
        <div className="copyright">
          <span>©2021 100devs Team</span>
        </div>

        <div className="iconDiv flex">
          <IconAnchor
            href={`https://leonnoel.com/blog/100devs/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href={`https://www.twitch.tv/learnwithleon`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitchLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href={`https://twitter.com/leonnoel`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
