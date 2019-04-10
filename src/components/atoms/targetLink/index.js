import React from "react"

import { Link } from "gatsby"

const linkType = to => {
  var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
  return re.test(to) === true ? "external" : "internal"
}

const TargetLink = ({ children, to, ...props }) => {
  if (linkType(to) === "external") {
    if (to[0] !== "h") {
      to = `https://${to}`
    }
    return (
      <a href={to} {...props}>
        {children}
      </a>
    )
  } else {
    if (to[0] !== "/") {
      to = `/${to}`
    }
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    )
  }
}

export default TargetLink
