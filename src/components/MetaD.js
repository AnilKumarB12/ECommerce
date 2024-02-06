import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
const Meta = (props) => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet='utf-8'></meta>
          <title>{props.title}</title>
        </Helmet>
      </div>
    </HelmetProvider>

  )
}

export default Meta