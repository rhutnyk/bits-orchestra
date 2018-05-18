import * as React from 'react';
import { Testimonial } from '../../ContentTypes/Testimonial';

class TliProps {
    data: Testimonial;
}

export class TestimonialListItem extends React.Component<TliProps>{

    public render() {
        return (
            <li >
                <h4>{this.props.data.name.value}</h4> <h5>at {this.props.data.company.value}</h5>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: this.props.data.feedback.value }} />
            </li>
        );
    }
}

