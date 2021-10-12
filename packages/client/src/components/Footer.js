import styled from "styled-components";
import { DiscordLogo, TwitchLogo, TwitterLogo } from "phosphor-react";
import TextLink from "./TextLink";
import { useState } from "react";

// once ticket-23-auth is merged into main:
// import user and logout from AuthContext
// add admin check functionality in a useEffect
// Create logout function that uses the logout from AuthContext to delete tokens and clear the object held in user

const Footer = (props) => {
  // only here for testing visual logic

  const FooterDiv = styled.footer`
    background-color: #e5e5e5;
    padding: 4.5rem 1.5rem 1.5rem;
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
          <TextLink text="Log out" link="/" />
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

// const FooterDiv = styled.footer`
//     background-color: #e5e5e5;
//     padding: 4.5rem;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     .socialsDiv, .iconDiv, .copyright, .subDiv {
//         display: flex;
//     }
//     .socialsDiv span {
//         margin-right: 1rem;
//     }
//     .copyright, .socialsDiv {
//         align-items: flex-end;
//     }
//     .copyright{
//         justify-content: flex-end;
//     }
//     .iconDiv {
//         justify-content: space-evenly;
//     }
//     span{
//         font-size: 1rem;
//     }
//     .subDiv{
//         width:100%;
//         justify-content: space-between;
//     }
//     @media (max-width: 900px){
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;
//         .iconDiv, .copyright{
//             margin-top: 1.5rem;
//         }
//         .iconDiv{
//             width: 90%;
//             justify-content: flex-start;
//             margin: 0 0 1.5rem 0;
//         }
//         .socialsDiv{
//             flex-direction: column;
//             justify-content: space-between;
//             align-items: flex-start;
//         }
//         .socialsDiv span {
//             margin: 0 0 1.5rem;
//         }
//     }
//     @media (max-width: 550px){
//         .iconDiv{
//             width: 100%;
//         }
//     };
//     @media (max-width: 500px){
//         padding: 2.5rem;
//         .iconDiv{
//            justify-content: space-between;
//         }
//     };
//     `
//     const IconAnchor = styled.a`
//         background: #fff;
//         border-radius: 50%;
//         width: 5rem;
//         height: 5rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: black;
//         @media (max-width: 900px){
//             margin-right: 1.5rem;
//         };
//         @media (max-width: 600px){
//             svg{
//                 width: 2rem;
//                 height: 2rem;
//             }
//             width: 3.5rem;
//             height: 3.5rem;
//         };
//         @media (max-width: 500px){
//             margin-right: 0;
//         };
//     }
//     `
