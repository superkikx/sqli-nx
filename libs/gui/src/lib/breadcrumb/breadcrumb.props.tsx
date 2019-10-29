import PropTypes from 'prop-types';

const propTypes = {
    trail:PropTypes.arrayOf(
        PropTypes.shape({
            label:PropTypes.string.isRequired,
            action:PropTypes.string.isRequired
        })
    ).isRequired

};

export default propTypes;
