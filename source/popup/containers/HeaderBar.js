import { connect } from "react-redux";
import { push } from "react-router-redux";
import HeaderBar from "../components/HeaderBar.js";

export default connect(
    (state, ownProps) => ({}),
    {
        onItemsClick: () => dispatch => {
            dispatch(push("/entries"));
        },
        onMenuClick: () => dispatch => {
            dispatch(push("/menu"));
        },
        onVaultsClick: () => dispatch => {
            dispatch(push("/"));
        }
    }
)(HeaderBar);
