import PropTypes from 'prop-types';

const propTypes = {
    trail:PropTypes.arrayOf(
        PropTypes.shape({
            label:PropTypes.array.isRequired,
            action:PropTypes.array.isRequired
        })
    ).isRequired

};

export default propTypes;
