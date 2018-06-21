import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Container, Subscribe } from './smox'

class LikeController extends Container {
    state = {
        isLike: false,
        isMount: false
    }

    handleClick = () => {
        this.setState({
            isLike: !this.state.isLike
        })
    }
}
const Like = () => (
    <Subscribe to={[LikeController]}>
        {like => (
            <div>
                <button onClick={() => like.handleClick()}>Click me</button>
                <div>{like.state.isLike ? 'I love you' : 'I hate you'}</div>
            </div>
        )}
    </Subscribe>
)

ReactDOM.render(
    <Provider>
        <Like />
    </Provider>,
    document.getElementById('root')
)