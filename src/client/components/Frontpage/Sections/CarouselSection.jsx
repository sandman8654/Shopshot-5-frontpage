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
    title: ''
};

class CarouselSections extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this
            .props
            .showItems()
    }

    renderItemsCarousel() {
        return this
            .props
            .items
            .map((item) => {
                return (
                    //<div key={item.id}>
                        <img key={item.id} className="img-responsive" src={item.url}/>
                    //</div>
                )
            })
    }

    render() {

        var settings = {
            dots: false,
            fade: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            pauseOnHover: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: false,
            swipeToSlide: false
        };

        return (
            <section >
                <div className='slider-container'>
                    <Slider {...settings}>
                        {this.renderItemsCarousel()}
                    </Slider>
                </div>
            </section>
        );
    }
}

CarouselSections.propTypes = propTypes;
CarouselSections.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {items: state.items.list};
}
export default connect(mapStateToProps, {showItems})(CarouselSections);