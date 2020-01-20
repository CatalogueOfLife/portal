'use strict';

const e = React.createElement;

class PublicTree extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Tree,
        { catalogueKey: 3 , pathToTaxon: "/data/taxon/"}
      );
    }
  }

const domContainer = document.querySelector('#tree');
ReactDOM.render(e(PublicTree), domContainer);