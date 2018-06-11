import React from 'react'
const Context = React.createContext(null)

export class Container {
  constructor(state = {}) {
    this.state = state
    this.subscribers = []
  }
  subscribe(sub) {
    return this.subscribers.push(sub)
  }

  unsubscribe(sub) {
    return this.subscribers.filter(f => f !== sub)
  }
}

export class Subscribe extends React.Component {
  constructor(props) {
    super(props)
  }

  createInstances(map, containers) {
    let instancees = containers.map((Container) => {
      let newInstance = new Container()
      map.set(Container, newInstance)
      return newInstance
    })
  }
  render() {
    return (
      <Context.Consumer>
        {map =>
          this.props.children.apply(
            null,
            this.createInstances(map, this.props.to)
          )
        }
      </Context.Consumer>
    )
  }
}
