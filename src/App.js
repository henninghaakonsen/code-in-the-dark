import React, { Component } from "react";
import "./app.css";
import logo from "./logo.svg";
import illustrasjon from "./illustrasjon.svg";

import { program, GIF_SOURCE } from "./constants";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="content">
                    <div className="title">
                        <img alt="logo" className="logo" src={logo} />
                    </div>

                    <div className="gif">
                        <img alt="gif" src={GIF_SOURCE} />
                    </div>

                    <div className="program">
                        <img alt="illustrasjon" src={illustrasjon} />

                        <div className="programlister">
                            {Object.values(program).map(omrade => {
                                return (
                                    <div key={omrade.tittel}>
                                        <h3>{omrade.tittel}</h3>
                                        <table className="programlister__table">
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
