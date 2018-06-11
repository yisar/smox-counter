import React from 'react'
const Context = React.createContext(null)

export class Container {
  constructor(state = {}) {
    this.state = state
    this.subscribers = []
  }
  subscribe(sub) {
    console.log('111')
    return this.subscribers.push(sub)
  }

  unsubscribe(sub) {
    return this.subscribers.filter(f => f !== sub)
  }
  setState() {
    console.log(this.subscribers)
    return this.subscribers.forEach(v => console.log(v))
  }
}

export class Subscribe extends React.Component {
  constructor(props) {
    super(props)
    this.instances = []
  }

  createInstances(map, containers) {
    let instances = containers.map((Container) => {
      let instance = new Container()
      map.set(Container, instance)
      instance.subscribe(instance)

      return instance
    })
    this.instances = instances
    return instances
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

export class Provider extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {parentMap => {
          let childMap = new Map(parentMap)
          return (
            <Context.Provider value={childMap}>
              {this.props.children}
            </Context.Provider>
          )
        }}
      </Context.Consumer>
    )
  }
}