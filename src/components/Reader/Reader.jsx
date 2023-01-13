import { Component } from 'react';
import { Controls } from './Controls';
import { Progres } from './Progres';
import { Publication } from './Publications';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeValue = value => {
    this.setState(state => ({ index: state.index + value }));
  };
  componentDidMount() {
    const savedIndex = localStorage.getItem(LS_KEY);
    if (savedIndex) {
      const index = Number(savedIndex);
      this.setState({ index });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;

    const totalItems = items.length;
    const curentItem = items[index];
    return (
      <div>
        <Controls
          currentItem={index + 1}
          onChange={this.changeValue}
          totalItems={totalItems}
        />
        <Progres currentItem={index + 1} totalItems={totalItems} />
        <Publication title={curentItem.title} text={curentItem.text} />
      </div>
    );
  }
}
