import React, { useState, useEffect } from 'react'
import { Container, FlatList, ViewItem, ViewItemTitle, ViewItemDescription } from './styles'
import PropTypes from 'prop-types'

const renderItem = (item) => (
  <ViewItem>
    <ViewItemTitle>Name</ViewItemTitle>
    <ViewItemDescription>Description</ViewItemDescription>
  </ViewItem>
)

const ViewComponent = ({title}) => {
  return (
    <Container>
      <FlatList
        data={[1,2,3,4,5]}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default ViewComponent