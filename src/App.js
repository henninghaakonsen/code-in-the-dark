import React, { Component } from "react";
import "./app.css";
import { omoss } from "./omoss";

const LOGO_SRC = "logo.svg";
const ILLUSTRASJON_SRC =
    "https://media.giphy.com/media/RjeDmZKj9uHU8zcrk8/giphy.gif";
const GIF_SRC =
    "https://media.giphy.com/media/DfSLII45H40RW/giphy-downsized.gif";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="content">
                    <div className="title">
                        <img alt="logo" src={LOGO_SRC} />
                    </div>

                    <div className="gif-container">
                        <img className="gif" alt="gif" src={GIF_SRC} />
                    </div>

                    <div className="program">
                        <img
                            className="gif-summer"
                            alt="illustrasjon"
                            src={ILLUSTRASJON_SRC}
                        />

                        <div className="programflex">
                            {omoss.map(omrade => {
                                return (
                                    <React.Fragment>
                                        <h3>{omrade.tittel}</h3>
                                        <span>{omrade.detaljer}</span>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
