import Header from "../components/Header/header";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
