import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sticky from 'react-sticky-el';
import { withPrefix } from "gatsby-link";

import Navbar from '../components/Navbar'
import HomeHeader from '../components/HomeHeader'
import '../stylesheets/all.scss'
import 'prismjs/themes/prism-tomorrow.css'

const TemplateWrapper = ({ children }) => {
  const isHomepage = location.pathname === withPrefix("/");
  return (
    <div>
      <Helmet title="𝖈𝖍𝖗𝖎𝖘𝖈𝖗𝖊𝖆𝖙.𝖊𝖘" />
      { isHomepage && <HomeHeader />}
      <Sticky className="sticky-nav">
        <Navbar />
      </Sticky>
      <div>{children()}</div>
    </div>
  )
  }

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
