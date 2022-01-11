import React, { Component } from "react";
import { ReactComponent as ArrowDown } from "./assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "./assets/arrowUp.svg";

import "./global.sass";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { title, list } = this.props;

    this.state = {
      isListOpen: false,
      title,
      selectedItem: null,
      keyword: "",
      list,
    };

    this.searchField = React.createRef();
  }

  componentDidMount() {
    const { select } = this.props;

    if (select) {
      this.selectSingleItem(select);
    }
  }

  componentDidUpdate() {
    const { isListOpen } = this.state;

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { list } = nextProps;

    if (JSON.stringify(list) !== JSON.stringify(prevState.list)) {
      return { list };
    }

    return null;
  }

  close = () => {
    this.setState({
      isListOpen: false,
    });
  };

  clearSelection = () => {
    const { name, title, onChange } = this.props;

    this.setState(
      {
        selectedItem: null,
        title,
      },
      () => {
        onChange(null, name);
      }
    );
  };

  selectSingleItem = (item) => {
    const { list } = this.props;

    const selectedItem = list.find((i) => i.value === item.value);
    this.selectItem(selectedItem);
  };

  selectItem = (item) => {
    const { label, value } = item;
    const { list, selectedItem } = this.state;
    const { name, onChange } = this.props;

    let foundItem;

    if (!label) {
      foundItem = list.find((i) => i.value === item.value);
    }

    this.setState(
      {
        title: label || foundItem.label,
        isListOpen: false,
        selectedItem: item,
      },
      () => selectedItem?.value !== value && onChange(item, name)
    );
  };

  toggleList = () => {
    this.setState(
      (prevState) => ({
        isListOpen: !prevState.isListOpen,
        keyword: "",
      }),
      () => {
        if (this.state.isListOpen && this.searchField.current) {
          this.searchField.current.focus();
          this.setState({
            keyword: "",
          });
        }
      }
    );
  };

  listItems = () => {
    const { id, styles } = this.props;
    const { listItem } = styles;
    const { keyword, list } = this.state;
    let tempList = [...list];

    if (keyword.length) {
      tempList = list.filter((item) =>
        item.label.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (tempList.length) {
      return tempList.map((item) => (
        <button
          type="button"
          className={`dd-list-item ${id}`}
          style={listItem}
          key={item.value}
          onClick={() => this.selectItem(item)}
        >
          {item.label}{" "}
        </button>
      ));
    }
  };

  render() {
    const { id, styles } = this.props;
    const { isListOpen, title } = this.state;

    const {
      wrapper,
      header,
      headerTitle,
      headerArrowUpIcon,
      headerArrowDownIcon,
      list,

      scrollList,
    } = styles;

    return (
      <div className={`dd-wrapper ${id}`} style={wrapper}>
        <button
          type="button"
          className={`dd-header ${id}`}
          style={header}
          onClick={this.toggleList}
        >
          <div className={`dd-header-title ${id}`} style={headerTitle}>
            {title}
          </div>
          {isListOpen ? (
            <span style={headerArrowUpIcon}>
              <ArrowUp />
            </span>
          ) : (
            <span style={headerArrowDownIcon}>
              <ArrowDown />
            </span>
          )}
        </button>
        {isListOpen && (
          <div className={`dd-list ${id}`} style={list}>
            <div className={`dd-scroll-list ${id}`} style={scrollList}>
              {this.listItems()}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  id: "",
  select: undefined,
  styles: {},
};

export default Dropdown;
