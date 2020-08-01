import React from 'react';
import { fetchDetailDrink } from '../redux/action';
import { connect } from 'react-redux';


class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      data: {},
    };
  }

  componentDidUpdate(nextProps) {

   if (nextProps.url !== this.props.url) {
     this.props.fetchDetailDrink();
     console.log(this.props.fetchDetailDrink());
   }

  }

  componentDidMount() {
    console.log('URL:', this.props.url);
    this.props.fetchDetailDrink();
  }




  render() {
    // console.log('URL:',this.props.url);
    console.log('DATA:', this.props.data);
    return (
      <React.Fragment>
        {/* {this.state.data.strDrink} */}
        <div>Details</div>
        <div>name: {this.state.data.strDrink} </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
});

const mapDispatchToProps = { fetchDetailDrink };

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
