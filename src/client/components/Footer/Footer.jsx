import React from 'react';

var footer = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '1rem',
    backgroundColor: '#efefef',
    textAlign: 'center',
    height: '100px',
};

const Footer = React.createClass({
    render: function() {
        return (
        <div style={footer}>
                <div className="container">
                    Hello
                </div>
            </div>
        );
    }
});

export default Footer;