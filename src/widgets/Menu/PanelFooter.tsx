import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { Heading } from "../../components/Heading/index";

interface Props extends PanelProps, PushedProps { }

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  //flex: none;
 // padding: 8px 4px;
  background: ${({ theme }) => theme.nav.background};
 // border-top: solid 2px rgba(133, 133, 133, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 // background: silver;
  margin-bottom: 9rem;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;

`;

const SocialEntry = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
  flex-direction: column;
  // background: yellow;
 // height: 100%;
`;

const LogoPrice = styled.div`
  display: flex;
 // background: red;
  justify-content: space-between;
  width: 100%;
  padding: 10px`

const Divider = styled.div`
 border:solid 1px rgba(133, 133, 133, 0.1);
 background:rgba(133, 133, 133, 0.1);
 width: 100%;
 height: 1px;
 `;

const WalletSection = styled.div`
  padding: 16px;
 // background: black;
  `;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }
  // href={priceLink} target="_blank"
  return (
    <Container>

      {/* <Divider /> */}
      {/* <WalletSection>
        <div>
        <Heading size="md" style={{textAlign:"center"}}>My Guava Wallet</Heading>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text>LEAF :</Text><Heading size="md">0</Heading></div>
        </div>
        <div>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text>Locked</Text><button></button></div>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text>Rewards:</Text><Heading size="md">0</Heading></div>
        </div>
      </WalletSection>  */}
      <SocialEntry>
        <Divider />
        <Text color="text" style={{ textAlign: "center",fontSize:"15px" }}>
          Where the safegains chatter
        </Text>
        {/* <LogoPrice>
        {cakePriceUsd ? (
          <PriceLink  >
            <img src="/images/logo.png" alt="logo" style={{width:"24px"}}   />
            <Text color="textSubtle" style={{paddingLeft:"2rem", display:"none"}} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>  
            
          </PriceLink >
        ) : (
          <Skeleton width={80} height={24} />
        )} */}
         {/* <Button size="sm" variant="primary">Buy</Button> */}
        {/* </LogoPrice> */}
        {/* <Divider /> */}
        <div>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            if (social.items) {
              {
                social.items.map((item) => {
                  return (
                    <div>
                      <Link external key={item.label} href={item.href} aria-label={item.label} color="text">
                        {item.label}
                      </Link>
                    </div>
                  )
                })
              }
              // return (
              //   <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
              //     {social.items.map((item) => (
              //       <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
              //         {item.label} {item.label}
              //       </Link>
              //     ))}
              //   </Dropdown>
              // );
            }
            return (
              <div>
                <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                  <Icon {...iconProps} /> &nbsp; {social.label}
                </Link>
              </div>
            );
          })}
        </div>
      </SocialEntry>
      <SettingsEntry>
        {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>  */}
        {/* alignItems center is a Safari fix */}
        {/* <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex> */}
        {/* </Button>   */}
        {/* <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
