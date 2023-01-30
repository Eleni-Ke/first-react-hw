// const ImageComponent = (props) => {
//   return <img src={props.imagesource} alt={props.imagealternative} />;
// };

import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.imagesource} alt={this.props.imagealternative} />
    );
  }
}

export default ImageComponent;
