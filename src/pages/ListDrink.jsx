import React from 'react';
import { fetchListDrink } from '../redux/action';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DetailDrink from './DetailDrink';
import {Link} from 'react-router-dom';

class ListDrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    };
  }

  componentDidMount() {
    this.props.fetchListDrink();
  }

  render() {
    return (
      <>
        { console.log('URL:', this.state.currentUrl) }
        {/* <DetailDrink url={this.state.currentUrl} /> */}
        <div>
          {this.props.loading ? (
            <div> Load Data... </div>
          ) : (
            this.props.data.map((drinks) => {
              return (
                <>
                  <div>{drinks.strDrink}</div>
                  <Link to="/detaildrink">
                    <Button
                      variant="contained"
                      onClick={
                        () => <DetailDrink url={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks.strDrink}`} />
                        // this.setState({
                        //   currentUrl: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks.strDrink}`,
                        // })
                      }
                    >
                      Detail Drink
                    </Button>
                  </Link>
                </>
              );
            })
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = { fetchListDrink }

export default connect(mapStateToProps, mapDispatchToProps)(ListDrink);
