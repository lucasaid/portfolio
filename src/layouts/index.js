import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sticky from 'react-sticky-el';

import Navbar from '../components/Navbar'
import '../stylesheets/all.scss'
import 'prismjs/themes/prism-tomorrow.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Sticky className="sticky-nav">
      <Navbar />
    </Sticky>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
