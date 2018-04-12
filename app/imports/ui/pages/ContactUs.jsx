import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
export default class ContactUs extends React.Component {
  render() {
    return (
        <Grid container columns="four">
          <Grid.Column>
            Kyle Chan
            <hr/>
            <List>
              <a href="https://kyle-chan.github.io/">
                https://kyle-chan.github.io/</a>
            </List>
          </Grid.Column>
          <Grid.Column>
            Jonathan Lau
            <hr/>
            <List>
              <a href="https://jon-lau.github.io/">
                https://jon-lau.github.io/</a>
            </List>
          </Grid.Column>
          <Grid.Column>
            Arnold Shek
            <hr/>
            <List>
              <a href="https://arnoldshek.github.io/">
                https://arnoldshek.github.io/</a>
            </List>
          </Grid.Column>
          <Grid.Column>
            Akira Vernon
            <hr/>
            <List>
              <a href="https://akirav.github.io/">
                https://akirav.github.io/</a>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}
