import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Controller, Listen } from './unstated'

class LikeController extends Controller {
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
    <Listen to={[LikeController]}>
        {like => (
            <div>
                <button onClick={() => like.handleClick()}>Click me</button>
                <div>{like.state.isLike ? 'I love you' : 'I hate you'}</div>
            </div>
        )}
    </Listen>
)

ReactDOM.render(
    <Provider>
        <Like />
    </Provider>,
    document.getElementById('root')
)