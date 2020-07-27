import React, {Component} from "react";
import SearchBar from "../container/searchBar";
import WeatherList from "../container/WeatherList";




export default class APP extends Component{
    render(){
        return(
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        )
    }
}



