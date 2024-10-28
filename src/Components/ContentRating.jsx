
import { Component } from 'react';
import './ContentRating.css'

class ContentRating extends Component {
  constructor() {
    super();
    this.state={
        likes:0,
        dislikes:0,
        totalRating:0,
        handlelike:()=>{
        this.setState((prevState)=>({
            likes:prevState.likes+1,
            totalRating:prevState.totalRating+1

        }));
        },
        handledislike:()=>{
            this.setState((prevState)=>({
                dislikes:prevState.dislikes+1,
                totalRating:prevState.totalRating+1
            }));

        },


    }

    
  }
  render() {
    return (
     
     <div className='content-rating'>
        <p>Hello This is Saban Ali Azhar. Im a student
            of software engineering at capital university of
            science and technology. Im a passionate learner and
            a tech enthusiast. I love to learn new things and
            share my knowledge with others.
            </p>
            <div className='rating-buttons'>
                <button className='like-button' onClick={this.state.handlelike}>Likes: {this.state.likes}</button>
                <button className='dislike-button' onClick={this.state.handledislike}>Dislikes: {this.state.dislikes}</button>
                <div className='totallikes'>Total Rating: {this.state.totalRating}</div>
            </div>
        
     </div>

    
    );
  }
}

export default ContentRating;
