import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';



class LikeButton extends React.Component{
    state = {
        likes: 0
      };

    addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };

    render() {
            
          return (
          <div className='Button'>
            <button onClick={this.addLike}
                    styles={{
                        border:'none',
                        
                    }}
            >
                <FavoriteIcon 
                style={{ 
                    color: "red",
                    border:'none',
                    background:'none',
                    padding:0,
                    
                        
                 }}
            /> {this.state.likes} </button>
        </div>
        )
      }
}

export default LikeButton;