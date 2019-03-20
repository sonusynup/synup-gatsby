import React from 'react'
import ActionableList from '../../atoms/actionableList';

const ActionableCard = ({
  index,
  wrapperClass,
  subListItems,
  actionType,
  actionText,
  to,
  title,
  subTitle,
  inverted
}) => (
  <section className={`section_wrapper ${wrapperClass}`}>
    <section>
      <div className="container">
        <div className={`blockWrapper ${(index % 2 !== 0) && 'd-flex_reverse'}`}>
          <ActionableList
            wrapperClass="leftBlock block_contentWrap"
            listItems={subListItems}
            actionType={actionType}
            actionText={actionText}
            to={to}
            title={title}
            subTitle={subTitle}
            inverted={inverted}
          />
          <div className="rightBlock">
            <img className="img_fluid" alt="BannerImage" />
          </div>
        </div>
      </div>
    </section>
  </section>
)

export default ActionableCard