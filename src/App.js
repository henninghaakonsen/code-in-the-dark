import React, { Component } from "react";
import "./app.css";
import { PROGRAM } from "./program";

const LOGO_SRC = "logo.svg";
const ILLUSTRASJON_SRC = "illustrasjon.svg";
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

                    <div className="gif">
                        <img alt="gif" src={GIF_SRC} />
                    </div>

                    <div className="program">
                        <img alt="illustrasjon" src={ILLUSTRASJON_SRC} />

                        <div className="programlister">
                            {PROGRAM.map(omrade => {
                                return (
                                    <div key={omrade.tittel}>
                                        <h3>{omrade.tittel}</h3>
                                        <table
                                            className="programlister__table"
                                            cellSpacing={10}
                                        >
                                            {omrade.aktiviteter.map(
                                                aktivitet => (
                                                    <tbody
                                                        key={
                                                            aktivitet.aktivitet
                                                        }
                                                    >
                                                        <tr>
                                                            <td className="td__tid">
                                                                {
                                                                    aktivitet.tidspunkt
                                                                }
                                                                :{" "}
                                                            </td>
                                                            <td>
                                                                {
                                                                    aktivitet.aktivitet
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            )}
                                        </table>
                                    </div>
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
