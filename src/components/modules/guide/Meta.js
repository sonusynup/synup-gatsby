import React from 'react'

import Button from '../../atoms/Buttons'

const Meta = ({ meta }) => {
  if (meta === null) return null;
  const metaData = meta.meta[0];
  console.log('metaData ', metaData)
  switch(metaData.type) {
    case 'tip': 
      return (
        <div class="secoundaryColor_block">
          <h6>{metaData.label}</h6>
          <p>{metaData.value}</p>
        </div>
      )
      break;
    case 'alert':
      return (
        <div class="primaryColor_block">
          <h6>{metaData.label}</h6>
          <p>{metaData.value}</p>
          <Button
            type="secondary"
            text="LEARN MORE"
          />
        </div>
      )
  }
}

export default Meta;