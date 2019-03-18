import React from 'react'

import Button from '../../atoms/Buttons'

const Meta = ({ meta }) => {
  console.log('meta ', meta)
  if (meta === null) return null;
  switch(meta.type) {
    case 'tip': 
      return (
        <div class="secoundaryColor_block">
          <h6>{meta.title}</h6>
          <p dangerouslySetInnerHTML={{ __html: meta.description.childContentfulRichText.html }} />
        </div>
      )
      break;
    case 'alert':
      return (
        <div class="primaryColor_block">
          <h6>{meta.title}</h6>
          <p dangerouslySetInnerHTML={{ __html: meta.description.childContentfulRichText.html }} />
          <Button
            type="secondary"
            text="LEARN MORE"
          />
        </div>
      )
  }
}

export default Meta;