import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null){
            const commentDetails = dish.comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <div>{commentDetails}</div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dishdetail;