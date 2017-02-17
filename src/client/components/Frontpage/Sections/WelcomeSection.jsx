import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import Slider from 'react-slick';
import {showItems} from '../../../actions';
//import './Styles/CarouselSection.css';

const propTypes = {
    title: PropTypes.string
};

const defaultProps = {
    title: 'WelcomeSection',
    message: 'Message'
};

const section = {
    height: '150px',
    textAlign: 'center',
}

class WelcomeSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-12" style={section}>
                <h2>{this.props.title}</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

WelcomeSection.propTypes = propTypes;
WelcomeSection.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps)(WelcomeSection);