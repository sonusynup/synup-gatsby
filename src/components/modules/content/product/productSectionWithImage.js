import React from "react"
import PropTypes from "prop-types"

import TransparentCard from "../../../atoms/cardTransparent"

// Product section with image (Example Home page)
const ProductSectionWithImage = ({
  productSectionDescription,
  productFeatures,
  productSectionImage,
}) => (
  <section className="section_product">
    <div className="container">
      <div className="product_wrapper">
        <div className="product_description">
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: productSectionDescription.childContentfulRichText.html,
            }}
          />
          <figure className="floatingCard_img">
            <img
              src={productSectionImage.file.url}
              className="img_fluid"
              alt=""
            />
          </figure>
        </div>
        <div className="popCard_wrapper">
          {productFeatures.map(feature => (
            <TransparentCard
              title={feature.featureTitle}
              description={feature.featureDescription}
              image={feature.featureIcon.file.url}
              isDescriptionRichText
              action="SEE ALL FEATURES"
              to={feature.featureLink}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

ProductSectionWithImage.propTypes = {
  productSectionDescription: PropTypes.string.isRequired,
  productFeatures: PropTypes.string.isRequired,
}

export default ProductSectionWithImage
