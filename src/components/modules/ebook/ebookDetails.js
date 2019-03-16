import React from 'react'

const EbookDetails = ({
  bookDetails: {
    bookCoverImage,
    bookTitle,
    bookDescription,
  }
}) => {
  console.log(bookCoverImage, bookTitle, bookDescription)
  return (
    <div className="container">
      <div className="blockWrapper">
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
      </div>
    </div>
  );
}

export default EbookDetails;