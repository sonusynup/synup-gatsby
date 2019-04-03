import React from "react"

import LinkedEbook from "../../molecules/linkedEbook"
import Button from "../../atoms/button"
import TargetLink from "../../atoms/targetLink"

// Component which handles other ebooks
const OtherEbooks = ({ latestBooksLimited }) => (
  <section className="ebook">
    <div className="container">
      <div className="ebook_other">
        <h3>Other Ebooks</h3>
        <div className="ebook_wrapper">
          <div className="ebook_lists">
            {// Latest 4 ebooks (order is reversed from graphql query)
            // Count of 4 is limited from the query itself
            latestBooksLimited.reverse().map(ebook => (
              <LinkedEbook
                to={`/resources/ebook/${ebook.node.id} `}
                thumbnail={ebook.node.bookCoverImage.file.url}
              />
            ))}
          </div>
          <TargetLink to={"/resources/ebooks"}>
            <Button type="secondary" text="VIEW ALL EBOOKS" />
          </TargetLink>
        </div>
      </div>
    </div>
  </section>
)

export default OtherEbooks
