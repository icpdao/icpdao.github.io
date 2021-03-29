import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as headerStyles from "./header.module.css"

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      <StaticImage
        src="../images/gatsby-icon.png"
        width={32}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="logo"
      />
      <StaticImage
        style={{
          marginLeft: 10
        }}
        src="../images/icpdao.png"
        height={18}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="icpdao"
      />
    </div>
  </header>
)

export default Header
