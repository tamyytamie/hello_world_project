import React, { Component } from 'react';

class LikeButton extends Component {

constructor(props) {
   super(props);
   this.state = {
     likes: 0,
   };
}

handleLikeClick = () => {
  this.setState({ likes: this.state.likes + 1 });
};

render() {
return (
 <div>
  <p>Likes: {this.state.likes}</p>
  <button onClick={this.handleLikeClick}>Like</button>
 </div>
);
}
}

export default LikeButton;