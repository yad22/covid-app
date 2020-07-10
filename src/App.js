import React from "react";

import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";

import { fetchData } from "./api";

import titleImage from "./images/image.png"



class App extends React.Component {

    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetcheddata = await fetchData()

        console.log(fetcheddata)

        this.setState({data: fetcheddata})

    }

    handleCountryChange = async (country) => {

        const fetcheddata = await fetchData(country)

        console.log(fetcheddata)

        console.log(country)

        this.setState({
            data: fetcheddata,
            country: country,
        })
    }

    render() {

        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <img className={styles.image}src={titleImage} alt="COVID-19"/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;