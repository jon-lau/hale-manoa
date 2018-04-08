import React from 'react';
import { Card, Image, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class HousingItem extends React.Component {
  render() {
    return (
        <Card>
          <Image  src={ this.props.house.image } />
          <Card.Content>
            <Card.Header>
              {this.props.house.propertytype} FOR RENT
            </Card.Header>
            <Card.Meta>
              Rent: ${this.props.house.rentprice}
              &nbsp;
              &nbsp;
              Beds: {this.props.house.beds}
              &nbsp;
              &nbsp;
              Baths: {this.props.house.baths}
            </Card.Meta>
            <Card.Description>
              {this.props.house.description}
              <br/>

            </Card.Description>
            <Card.Content extra>
              {this.props.house.streetaddress}
              &nbsp;
              {this.props.house.unitnumber}
            </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
HousingItem.propTypes = {
  house: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(HousingItem);