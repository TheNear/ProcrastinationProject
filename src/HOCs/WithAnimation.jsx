import React from "react";

export default function WithAnimation(Component) {
  return class WithAnimationWrap extends React.Component {
    state = {
      mounted: false,
    }

    componentDidUpdate() {

      if(this.state.mounted !== this.props.show) {
        setTimeout(() => {
          this.setState({
            ...this.state,
            mounted: this.props.show,
          })
        }, this.props.duration)
      }
    }

    render() {
     if(this.props.show) {
       return <Component {...this.props} show={this.state.mounted}/>
     } else {
       return this.state.mounted && <Component {...this.props}/>
     }
    }
  }
}
