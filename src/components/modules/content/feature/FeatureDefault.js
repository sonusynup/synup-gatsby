import React from 'react'

const FeatureDefault = ({
  actionType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureDescription,
}) => (
  <div className="leftBlock block_contentWrap">
    <h3 className="block_contentWrap">{featureTitle}</h3>
    <p className="block_contentText">{featureName}</p>
    {
      featureDescription !== null && (
        <ul
          className="list_unstyled"
          dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }} 
        />
      )
    }
    <Link to={to}>
      <Button
        type={actionType}
        text={featureButton}
      />
    </Link>
  </div>
)

export default FeatureDefault