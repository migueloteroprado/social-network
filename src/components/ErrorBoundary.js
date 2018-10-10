import { Component }  from 'react';

class ErrorBoundary extends Component {
  state = {}
  componentDidCatch(error) {
    this.setState({error})
  }
  render() {
    return this.state.error ? this.props.onError(this.state.error)
                            : this.props.children
  }
}

export default ErrorBoundary;