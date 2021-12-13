import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DiscordLogo, TwitchLogo, TwitterLogo } from "phosphor-react";
import TextLink from "./TextLink";
import FooterDiv from "./styled/FooterDiv";
import IconAnchor from "./styled/IconAnchor";

const Footer = () => {
  const { isAdmin, logout } = useContext(AuthContext);

  return (
    <FooterDiv>
      {isAdmin && (
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
            href="https://leonnoel.com/blog/100devs/"
            aria-label="Learn more about how to join us on Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href="https://www.twitch.tv/learnwithleon"
            aria-label="Learn With Leon Twitch Channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitchLogo width="2.5rem" height="2.5rem" weight="duotone" />
          </IconAnchor>

          <IconAnchor
            href="https://twitter.com/leonnoel"
            aria-label="Leon Noel on Twitter"
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
