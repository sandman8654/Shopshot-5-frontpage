import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import Slider from 'react-slick';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {showItems} from '../../../actions';
//import './Styles/CarouselSection.css';

const propTypes = {
    title: PropTypes.string
};

const defaultProps = {
    title: 'SubcategoriesSection'
};

const button = {
  margin: 12,
};

class SubcategoriesSection extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.showItems();
    }

    render() {

        let rows = [];
        let lastCat = 'null';

        if(this.props.items != null){
            this.props.items.forEach((item) => {
                if(item.category != lastCat ){
                    rows.push(
                        <div className="col-sm-3" >
                            <Card>
                                <CardMedia
                                overlay={<CardTitle title={item.category} />}
                                >
                                <img src={item.url2} />
                                </CardMedia>
                            </Card>
                        </div>
                        )
                }
            
                lastCat = item.category;
            })
        }
        


        return (
            <section className="col-lg-12">
                <div className="row">
                    <h2>{this.props.title}</h2>
                    {rows}
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <RaisedButton label="More categories" primary={true} style={button} />
                    </div>
                </div>
            </section>
        );
    }
}

SubcategoriesSection.propTypes = propTypes;
SubcategoriesSection.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {items: state.items.list};
}
export default connect(mapStateToProps, {showItems})(SubcategoriesSection);