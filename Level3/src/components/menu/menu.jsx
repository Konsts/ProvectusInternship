import React, { Component, Fragment } from 'react';
import './menu.css';

const PATH = 'https://formula-test-api.herokuapp.com/menu';

export default class Menu extends Component {
    state = {
        hotDogs: [],
        isLoading: true,
    }
    componentDidMount() {
        fetch(PATH)
            .then(res => res.json())
            .then(hotDogs => this.filterByExpiration(hotDogs))
            .then(hotDogs => this.setState({ hotDogs, isLoading: false }))
            .catch(error => console.error(error));
    }

    filterByExpiration = (items) => {
        return items.filter(item => {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            return new Date(Date.parse(item.expirationDate)) > today;
        })
    }

    render() {
        const { hotDogs } = this.state;
        let content;
        if (this.state.isLoading)
            content = <div>Loading...</div>;
        else {
            content = <div className="hotdogs-grid">
                {hotDogs.map(({ id, name, description, backgroundURL }, index) => {
                    if (index % 2)
                        return (
                            <Fragment key={id}>
                                <img src={backgroundURL} alt="Hot Dog" />
                                <div className="hotdog-description-container">
                                    <div className="hotdog-description">
                                        <h2>{name}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    else
                        return (
                            <Fragment key={id}>
                                <div className="hotdog-description-container">
                                    <div className="hotdog-description">
                                        <h2>{name}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <img src={backgroundURL} alt="Hot Dog" />
                            </Fragment>
                        )
                })}
            </div>
        }
        return (
            <Fragment>
                <div className="main-wrapper">
                    <img src="/images/hotdog.png" alt="" />
                    <h1>Diry Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
                    <button>More Dogs ‘n Make Em Hot</button>
                </div>
                {content}
            </Fragment>
        )
    }
}
