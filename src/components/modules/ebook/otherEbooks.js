import React from 'react'
import { Link } from 'gatsby'

import LinkedEbook from '../../molecules/LinkedEbook'
import Button from '../../atoms/Buttons';

// Component which handles other ebooks
const OtherEbooks = ({
  latestBooksLimited
}) => (
  <section className="ebook">
    <div className="container">
      <div className="ebook_other">
        <h3>Other Ebooks</h3>
        <div className="ebook_wrapper">
          <div className="ebook_lists">
            {
              // Latest 4 ebooks (order is reversed from graphql query)
              // Count of 4 is limited from the query itself
              latestBooksLimited
                .reverse()
                .map((ebook) => (
                <LinkedEbook
                  to={`/resources/ebook/${ebook.node.id} `}
                  thumbnail={ebook.node.bookCoverImage.file.url}
                />
              ))
            }  
          </div>
            <Link to={'/resources/ebooks'}>
              <Button
                type="secondary"
                text="VIEW ALL EBOOKS"
              />
            </Link>
        </div>
      </div>
    </div>
  </section>
)

export default OtherEbooks