// import * as React from 'react';
// import { Testimonial } from '../../ContentTypes/Testimonial';
// import { Client } from '../../Services/Kentico-cloud/Client';
// import { TestimonialListItem } from './Testimonial.ListItem';
// import './Testimonial.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getTestiomonial } from '../../Actions/actions';
// // import { store } from '../../index';


// class Testimonials extends React.Component<any, any> {

//     componentDidMount() {
//         // store.subscribe(() => this.forceUpdate());
//     }

//     testimonialListItems() {
//         return this.props.testimonials.map((x: Testimonial, index: number) =>
//             <TestimonialListItem key={index} data={x} />
//         );
//     }

//     public componentWillMount() {
//         const { getTestomonials } = this.props;

//         Client.items<Testimonial>()
//             .equalsFilter('system.type', 'testimonial')
//             .get()
//             .subscribe((response) => {
//                 getTestomonials(response.items);
//                 // this.setState({ testimonials: response.items });
//             });
//     }

//     public render() {
//         return (
//             <div>
//                 <ul className="test-ul">
//                     {this.testimonialListItems()}
//                 </ul>
//             </div>
//         );
//     }
// }

// const putStateToProps = (state: any) => {
//     return {
//         testimonials: state.testemonials,
//     }
// }

// const putActionsToProps = (dispatch: any) => {
//     return {
//         getTestomonials: bindActionCreators(getTestiomonial, dispatch),
//     }
// }


// export default connect(putStateToProps, putActionsToProps)(Testimonials);