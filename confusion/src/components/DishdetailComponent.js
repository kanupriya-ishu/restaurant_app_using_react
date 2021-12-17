import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );}
        else
            return(
                <div></div>
            );
    }

    renderCommentsDish(dish){
        if (dish!=null){
            const comments = dish.comments;
            if (comments!=null){
                const comments_arr = comments.map((comment) => {
                    return(
                        <ul class="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    );
                });

                return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments_arr}
                    </div>
                );
            }

            else{
                return(
                    <div></div>
                );
            }
        }
        else{
            return(
                <div></div>
            );
        }
    }

    

    render(){
        return(
        <div className="container">
            <div className="row">
            
                {this.renderDish(this.props.dish)}
            
                {this.renderCommentsDish(this.props.dish)}
            </div>
        </div>
        );
        
        
    }
}

export default Dishdetail;