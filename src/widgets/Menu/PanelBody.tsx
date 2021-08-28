import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import { Heading } from "../../components/Heading/index";
import { Text } from "../../components/Text/index";
import { Button } from "../../components/Button";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding-top:30px;
`;

const Divider = styled.div`
//  border:solid 1px rgba(133, 133, 133, 0.1);
 background:rgba(133, 133, 133, 0.1);
 width: 100%;
 height: 1px;`; 

const WalletSection = styled.div`
  padding: 12px;
  margin-left:18px;
  `;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >  
              {isPushed && 
                   entry.items.map((item) => (   
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}  
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {/* {iconElement} */}
              <LinkLabel isActive={entry.href === location.pathname} isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
      {/* <Divider /> */}
     {/* {isPushed && <WalletSection> */}
        {/* <div> */}
        {/* <Text bold style={{textAlign:"center"}}>My Guava Wallet</Text> */}
        {/* <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text>LEAF :</Text><Text bold>0</Text></div>
        </div>
        <div>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text style={{width:"100%", background:"#faf9fa"}}> <img src="https://seeder.finance/images/ic_lock_black.svg" alt="lock" /> Locked <img style={{clear:"both", float:"right", verticalAlign:"middle"}} src="https://seeder.finance/images/ic_wallet_arrow_black.svg" alt="greaterarrow" /></Text></div>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"0.7rem"}}><Text>Rewards:</Text><Text bold >0</Text></div>
        </div>
      </WalletSection>}  */}
    </Container>
  );
};

export default PanelBody;
