import React from "react"

// Handles render of Ebook Detail screen
const EbookDetails = ({
  bookDetails: { bookCoverImage, bookTitle, bookDescription },
}) => (
  <div className="ebook_block">
    <div className="ebook_img">
      <figure>
        <img src={bookCoverImage.file.url} className="img_fluid" alt="" />
      </figure>
    </div>
    <div className="ebook_title">
      <h5>{bookTitle}</h5>
    </div>
    <div className="ebook_describtion">
      <p className="ebook_describtion_pre">
        {bookDescription.content[0].content[0].value}
      </p>
    </div>
  </div>
)

export default EbookDetails
