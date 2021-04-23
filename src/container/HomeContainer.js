import Home from "../components/Home";
import { connect } from "react-redux";
import { addItemsToCart } from "../services/actions/action";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addItemsToCart(data)),
});

const mapStateToProps = (state) => ({
  cardData: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
