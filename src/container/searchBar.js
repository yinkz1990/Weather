import  React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import fetchUrl from "../action";

class SearchBar extends Component {
    state = {
        term: ""
    }

    onInputChange = (event) => {
        return (
            this.setState({
                term: event.target.value
            })
        )
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchUrl(this.state.term);
        this.setState({
            term:""
        })

    }
    render(){
        return(
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <input placeholder = "Enter your state" className = "form-control"
                 value = {this.state.term} onChange = {this.onInputChange} />
                <span className = "input-group-btn">
                    <button type= "submit" className = "btn btn-secondary"> submit </button>
                </span>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchUrl}, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchBar);