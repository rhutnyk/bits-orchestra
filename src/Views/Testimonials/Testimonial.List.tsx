import * as React from 'react';
import { Testimonial } from '../../ContentTypes/Testimonial';
import { Client } from '../../Client';
import { TestimonialListItem } from './Testimonial.ListItem';
import './Testimonial.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestiomonial } from '../../Actions/actions';
// import { store } from '../../index';

class Testimonials extends React.Component<any, any> {

    // constructor(props: React.ReactPropTypes) {
    //     super(props);
    //     // this.state = {
    //     //     testimonials: new Array<Testimonial>()
    //     // };

    // }
    
    testimonialListItems() {
        return this.props.testimonials.map((x: Testimonial, index: number) =>
            <TestimonialListItem key={index} data={x}/>
        );
    }

    // componentDidMount() {
    //     store.subscribe(() => this.forceUpdate());
    // }

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
            <ul className="test-ul">
                {this.testimonialListItems() }
            </ul>
        );
    }
}

const putStateToProps = (state: any) => {
    console.log(state);
    
    return {
        testimonials: state.testemonials,
    }
}

const putActionsToProps = (dispatch: any) => {
    return {
        getTestomonials: bindActionCreators(getTestiomonial, dispatch),
    }
}


export default connect(putStateToProps, putActionsToProps)(Testimonials);