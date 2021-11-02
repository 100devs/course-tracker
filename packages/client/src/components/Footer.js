import { useContext } from "react";
import { DiscordLogo, TwitchLogo, TwitterLogo } from "phosphor-react";
import TextLink from "./TextLink";
import FooterDiv from "./styled/FooterDiv";
import IconAnchor from "./styled/IconAnchor";
import { AuthContext } from "../context/AuthContext";

const Footer = (props) => {
  return (
    <FooterDiv>
      {props.isAdmin && (
        <div className="linkDiv flex">
          <TextLink
            text="Create a post"
            onClickGoTo="/create-post"
            margin="0 0 1rem 0"
          />
          <TextLink text="Log out" onClickGoTo="/" onClick={props.logout} />
        </div>
      )}

      <div className="subDiv flex">
        <div className="copyright">
          <span>©2021 100devs Team</span>
        </div>

        <div className="iconDiv flex">
          <IconAnchor
            href="https://leonnoel.com/blog/100devs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href="https://www.twitch.tv/learnwithleon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitchLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href="https://twitter.com/leonnoel"
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
