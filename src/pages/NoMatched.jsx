import React from 'react'
import styled from 'styled-components'

const Warning = styled.h2`
  color: #f00;
  padding: 20px;
  text-align: center;
  font-weight: 500;
`;

const NoMatched = () => {
  return (
    <Warning>This page not found</Warning>
  )
}

export default NoMatched