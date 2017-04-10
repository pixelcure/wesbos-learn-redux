import React from 'react';
import { Link } from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({


	render() {
		
		const { post, i, comments } = this.props;

		// you can't access KEY once you are in the component, if you need
		// the index of the actual element, you need to pass it along as it's own prop
		// we are also passing down "post" to pass down the specific post info

		return (
				<figure className="grid-figure">
					<div className={"grid-photo-wrap"}>
						<Link to={`/view/post:${post.code}`}>
							<img src={post.display_src} alt={post.caption} className="grid-photo" />
						</Link>

						<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
							<span key={post.likes} className="likes-heart">
								{post.likes}
							</span>
						</CSSTransitionGroup>

					</div>
				
					<figcaption>
						<p>{post.caption}</p>
						<div className="control-buttons">
							<button onClick={this.props.increment.bind(null, i)}className="likes">&hearts; {post.likes}</button>
							<Link className="button" to={`/view/post:${post.code}`}>
								<span className="comment-count">
									<span className="speech-bubble"></span>
									{comments[post.code] ? ' ' + comments[post.code].length : ' ' + 0}
								</span>
							</Link>
						</div>
					</figcaption>

				</figure>


			);
	} 

});

export default Photo;