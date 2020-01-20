'use strict';

const e = React.createElement;

class PublicSearch extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Search,
        { catalogueKey: 3 , pathToTaxon: "/data/taxon/"}
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(PublicSearch), domContainer);