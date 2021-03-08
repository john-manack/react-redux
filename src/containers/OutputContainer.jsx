// This is a 'smart container' meaning it talks to redux and contains the logic for our 'dumb' components;

import Output from '../components/Output';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // Translate the Redux State into React Props
    return {
        amount: state.count
    }
}

export default connect(mapStateToProps)(Output);