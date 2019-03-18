import React from 'react'
import ActionableList from '../../atoms/ActionableList';

const ActionableCard = ({
  index,
  wrapperClass,
  listItems,
  actionType,
  actionText,
  to,
  title,
  subTitle,
}) => (
  <section className="section_wrapper">
    <section>
      <div className="container">
        <div className={`blockWrapper ${(index % 2 !== 0) && 'd-flex_reverse'}`}>
          <ActionableList
            wrapperClass="leftBlock block_contentWrap"
            listItems={listItems}
            actionType={actionType}
            actionText={actionText}
            to={to}
            title={title}
            subTitle={subTitle}
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