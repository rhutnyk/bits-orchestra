import * as React from 'react';
import { Testimonial } from '../../ContentTypes/Testimonial';

class TliProps {
    data: Testimonial;
}

export class TestimonialListItem extends React.Component<TliProps>{

    public render() {
        return (
            <li >
                <h2>{this.props.data.name.value}</h2> <h3>at {this.props.data.company.value}</h3>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: this.props.data.feedback.value }} />
            </li>
        );
    }
    
}

