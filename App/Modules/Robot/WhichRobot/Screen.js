import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, List, Footer, Card, CardListItem } from 'App/Components'
import { Images } from 'App/Themes'

export default class WhichRobotScreen extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { onPress } = this.props
    return (
      <Container>
        <List linedRows scrollable>
          <CardListItem
            image={Images.robots.plus}
            title='Otto DIY'
            text='The truly open source biped robot that you can build'
            onPress={() => { onPress('otto') }} />
             <CardListItem
            image={Images.robots.eyes}
            title='Eyes'
            text='Otto with LED eyes and emotions'
            onPress={() => { onPress('eyes') }} />
          <CardListItem
            image={Images.robots.humanoid}
            title='Humanoid'
            text='Otto with arms, LED mouth and more sensors'
            onPress={() => { onPress('humanoid') }} />
        </List>
        <Footer>
          <Card theme='light' text='Choose which Otto robot you want to play with' />
        </Footer>
      </Container>
    )
  }
}
