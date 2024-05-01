import { homePage } from "./components/homePage/homePage.js";
import { blogPage } from "./components/blogPage/blogPage.js";

window.addEventListener("hashchange", route);

function route() {
    const path = window.location.hash.substr(1);
    const segments = path.split("/");
    if (segments[0] === "") {
        homePage();
    } else if (segments[0] === "posts") {
        blogPage(segments[1]);
    }
}

route();
