import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';



class LikeButton extends React.Component{
    state = {
        likes: 0,
        liked:false,
      };

 

    changeLike = ()=>{
        if(this.state.liked)
        {
          let newCount = this.state.likes - 1;
          this.setState({
            likes: newCount,
            liked: false,

          });
        }
        else{
          let newCount = this.state.likes + 1;
          this.setState({
            likes: newCount,
            liked: true,
          });
        }
    }


    render() {           
          return (
          <div className='Button'>         
            <button onClick={this.changeLike}>
                <FavoriteIcon 
                style={{ 
                    color: "red",
                    border:'none',
                    background:'none',
                    padding:0
                    
                        
                 }}
            /> {this.state.likes} </button>
        </div>
        )
      }
}

export default LikeButton;