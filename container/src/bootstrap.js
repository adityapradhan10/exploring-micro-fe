import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

mountProducts(document.querySelector("#mount-products"));
mountCart(document.querySelector("#mount-cart"));
