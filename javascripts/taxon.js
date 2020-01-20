'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Taxon,
        { catalogueKey: 3 , pathToTree: "/data/browse.html"}
      );
    }
  }

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);