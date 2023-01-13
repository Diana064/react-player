import { Component } from 'react';
import { Controls } from './Controls';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeValue = value => {
    this.setState(state => ({ index: state.index + value }));
  };
  render() {
    const { index } = this.state;
    const { items } = this.props;

    const totalItems = items.length;
    const curentItem = items[index];
    return (
      <div>
        <Controls index={index} />
        {/* <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeValue(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={index === totalItems}
            onClick={() => this.changeValue(+1)}
          >
            Вперед
          </button>
        </section> */}

        <p>
          {index + 1}/{totalItems}
        </p>

        <article>
          <h2>{curentItem.title}</h2>
          <p>{curentItem.text}</p>
        </article>
      </div>
    );
  }
}
