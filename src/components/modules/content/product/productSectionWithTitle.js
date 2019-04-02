import React from "react"
import CardList from "../../../molecules/cardList"

import generateCardItem from "../../../../helpers/generateCardItem"

// Component handling what we do section
const ProductSectionWithTitle = ({
  productFeatures,
  productSectionTitle,
  productSectionDescription,
}) => (
  <section>
    <div className="container">
      <div className="card_block">
        {productSectionTitle !== null ? <h3>{productSectionTitle}</h3> : null}
        {productSectionDescription !== null ? (
          <p
            dangerouslySetInnerHTML={{
              __html: productSectionDescription.childContentfulRichText.html,
            }}
          />
        ) : null}
      </div>
      <CardList
        listItems={productFeatures.map(feature =>
          generateCardItem(
            feature.featureTitle,
            feature.featureDescription.childContentfulRichText.html,
            "LEARN MORE",
            true,
            feature.featureBackgroundImage,
            feature.featureBackgroundHoverImage,
            feature.featureIcon,
            "card_iconBg",
            feature.featureLink
          )
        )}
      />
    </div>
  </section>
)

export default ProductSectionWithTitle
