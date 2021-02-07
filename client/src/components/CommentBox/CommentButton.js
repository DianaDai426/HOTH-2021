import React from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import CommentBox from './CommentBox'

class CommentButton extends React.Component{

    state = {
        showComment:false,
      };
  
    Handler = () => {
      const isVisible = this.state.showComment;
      this.setState({
        showComment: !isVisible
        });
      }
      

    render() {
      let comment = null;
      if (this.state.showComment) {
        comment = (
        <div className="CommentBox">
          <CommentBox/>
        </div>
        );
      }  
      return (
        <div className="container">
          <button 
            className="cbtn"
            onClick={this.Handler}>
              <CommentIcon 
                style={{ 
                    color: "black",
                    border:'none',
                    background:'none',
                    padding:0  
                 }}
            />
          </button>
          <div>{comment}</div>
        </div>
      );        
    }
}

export default CommentButton;