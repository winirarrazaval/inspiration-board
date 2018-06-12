import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

static propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
}

  render() {
    let my_emoji = this.props.emoji
    if (my_emoji === null) {
      my_emoji = "";
    }

    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(my_emoji)}</p>
        </section>
      </div>
    )
  }
}


export default Card;
