import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import * as contactStyles from "./contact.module.css"


const StyledContactList = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledContactInfoLink = styled.a`
    text-decoration: none;
`

const StyledContactInfo = styled.div`
    border-radius: 17px;
    box-shadow: ${({ theme }) => theme.shadows.huge};
    margin: 0 5px;
    background-color: ${ props => props.theme.cardBG};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 307px;
    height: 307px;
    color: ${ props => {
        if (props.name === 'twitter') {
            return "#2994DA"
        }
        if (props.name === 'discord') {
            return "#7289DA"
        }
        if (props.name === 'gmail') {
            return props.theme.textColor
        }
        if (props.name === 'youtube') {
            return "#FD3832"
        }
    }};
`

const StyledContactInfoName = styled.div`
    margin-top: 30px;
    font-size: 24px;
    font-family: "PingFang SC Regular";
`

const StyledContactInfoDesc = styled.div`
    margin-top: 20px;
    width: 200px;
    font-size: 16px;
    text-align: center;
    font-family: "PingFang SC Regular";
`

const Contact = () => (

    <StyledContactList>

        <StyledContactInfoLink href="https://twitter.com/icpdao" target="_blank">
            <StyledContactInfo name="twitter">
                <StaticImage
                    className={contactStyles.contactInfoIcon}
                    src="../images/twitter.png"
                    width={82}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="twitter"
                />
                <StyledContactInfoName>Twitter</StyledContactInfoName>
                <StyledContactInfoDesc>Follow @ICPDAO for updates and news.</StyledContactInfoDesc>
            </StyledContactInfo>
        </StyledContactInfoLink>

        <StyledContactInfoLink href="https://twitter.com/icpdao" target="_blank">
            <StyledContactInfo name="discord">
            <StaticImage
                className={contactStyles.contactInfoIcon}
                src="../images/discord.png"
                width={82}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Discord"
            />
            <StyledContactInfoName>Discord</StyledContactInfoName>
            <StyledContactInfoDesc>Chat in real time with the ICPDAO community.</StyledContactInfoDesc>
            </StyledContactInfo>
        </StyledContactInfoLink>

        <StyledContactInfoLink href="mailto:icpdao06@gmail.com" target="_blank">
            <StyledContactInfo name="gmail">
            <StaticImage
                className={contactStyles.contactInfoIcon}
                src="../images/gmail.png"
                width={82}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Gmail"
            />
            <StyledContactInfoName>Gmail</StyledContactInfoName>
            <StyledContactInfoDesc>Send email to icpdao06@gmail.com</StyledContactInfoDesc>
            </StyledContactInfo>
        </StyledContactInfoLink>

        <StyledContactInfoLink href="https://www.youtube.com/channel/UC9vo3RcUbA6V4V6ouYR8nqg" target="_blank">
            <StyledContactInfo name="youtube">
                <StaticImage
                    className={contactStyles.contactInfoIcon}
                    src="../images/youtube.png"
                    width={82}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Youtube"
                />
                <StyledContactInfoName>Youtube</StyledContactInfoName>
                <StyledContactInfoDesc>Follow @ICPDAO for videos and news.</StyledContactInfoDesc>
            </StyledContactInfo>
        </StyledContactInfoLink>
    </StyledContactList>

)

export default Contact