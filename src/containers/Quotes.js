import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';


class Quotes extends Component {

  render() {
    console.log(this.props)

    const {quote} = this.props
    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">

              {
                quote.map(quote => {
                  return <QuoteCard 
                  quote={quote}
                  key={quote.id}
                  />
                })
              }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return{
    quote: state.quotes
  }
}


export default connect(mapStateToProps)(Quotes);
