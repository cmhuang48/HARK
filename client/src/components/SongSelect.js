import React from "react";
import { connect } from "react-redux";
import { loadCurrentSong } from "../store";
import { Link } from "react-router-dom";

class SongSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSong: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidUpdate(prevprops) {
    if (!prevprops.songs.length && this.props.songs.length) {
      this.setState({ selectedSong: this.props.songs[0].name });
    }
  }

  handleSelect(song) {
    console.log(song);
    this.props.loadCurrentSong(song.id);
    this.setState({ selectedSong: song.name });
  }

  render() {
    return (
      <div>
        current song: {this.state.selectedSong}
        <p> select a song below:</p>
        <ul>
          {this.props.songs?.map((song) => (
            <Link to={`/preview/${song.id}`}>
              <li
                key={song.id}
                style={{ margin: "1rem" }}
                onClick={() => this.handleSelect(song)}
              >
                {song.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCurrentSong: (id) => dispatch(loadCurrentSong(id)),
  };
};

export default connect((state) => state, mapDispatch)(SongSelect);
