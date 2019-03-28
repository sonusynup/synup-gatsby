import React from "react"
import CardList from "../../../molecules/cardList"

import generateCardItem from "../../../../helpers/generateCardItem"

// Component handling what we do section
const Product = ({
  productSectionTitle,
  productSectionDescription,
  productFeatures,
}) => (
  <section>
    <div className="container">
      <div className="card_block">
        <h3>{productSectionTitle}</h3>
        <p>{productSectionDescription}</p>
      </div>
      <CardList
        listItems={productFeatures.map(feature =>
          generateCardItem(
            feature.featureTitle,
            feature.featureDescription.childContentfulRichText.html,
            "LEARN MORE",
            true,
            "card_iconBg"
          )
        )}
      />
    </div>
  </section>
)

export default Product
