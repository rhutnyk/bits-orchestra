import * as React from 'react';
import { Testimonial } from '../../ContentTypes/Testimonial';
import { Client } from '../../Client';
import { TestimonialListItem } from './Testimonial.ListItem';
import './Testimonial.css';

export class Testimonials extends React.Component<any, any> {

    constructor(props: React.ReactPropTypes) {
        super(props);
        this.state = {
            testimonials: new Array<Testimonial>()
        };
    }

    testimonialListItems() {
        return this.state.testimonials.map((x: Testimonial, index: number) =>
            <TestimonialListItem key={index} data={x}/>
        );
    }

    public componentWillMount() {
        Client.items<Testimonial>()
            .equalsFilter('system.type', 'testimonial')
            .get()
            .subscribe((response) => {
                console.log(response);
                this.setState({ testimonials: response.items });
            });
    }


    public render() {
        return (
            <ul className="test-ul">
                {this.testimonialListItems()}
            </ul>
        );
    }
}
