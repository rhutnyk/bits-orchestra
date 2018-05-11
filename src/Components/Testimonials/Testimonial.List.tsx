import * as React from 'react';
import { Testimonial } from '../../ContentTypes/Testimonial';
import { Client } from '../../Client';
import { TestimonialListItem } from './Testimonial.ListItem';
import './Testimonial.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestiomonial, getData } from '../../Actions/actions';
import { store } from '../../index';


class Testimonials extends React.Component<any, any> {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    testimonialListItems() {
        return this.props.testimonials.map((x: Testimonial, index: number) =>
            <TestimonialListItem key={index} data={x} />
        );
    }

    public componentWillMount() {
        const { getTestomonials } = this.props;

        Client.items<Testimonial>()
            .equalsFilter('system.type', 'testimonial')
            .get()
            .subscribe((response) => {
                getTestomonials(response.items);
                // this.setState({ testimonials: response.items });
            });
    }

    public render() {
        return (
            <div>
                <ul className="test-ul">
                    {this.testimonialListItems()}
                </ul>
            </div>
        );
    }
}

const putStateToProps = (state: any) => {
    return {
        data: state.data,
        testimonials: state.testemonials,
    }
}

const putActionsToProps = (dispatch: any) => {
    return {
        getDataProp: bindActionCreators(getData, dispatch),
        getTestomonials: bindActionCreators(getTestiomonial, dispatch),
    }
}


export default connect(putStateToProps, putActionsToProps)(Testimonials);