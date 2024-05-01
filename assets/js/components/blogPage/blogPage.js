"use strict";

import { POSTS } from "../../posts.js";

function blogPage(post) {
    const $content = document.querySelector("#content");
    const $blogPage = document.createElement("div");
    $blogPage.id = "home-page";

    // Add components here
    $blogPage.insertAdjacentHTML("beforeend", Header());
    $blogPage.insertAdjacentHTML("beforeend", BlogPost(post));


    $content.innerHTML = $blogPage.innerHTML;
}

function Header() {
    return `
    <div>
        <a href="/">Go back</a>    
    </div>
    `;
}

function BlogPost(post) {
    const blogpost = POSTS.filter((item) => item.post_url === post)[0];
    return `
    <div class="blog-post">
        <h2>${blogpost.title}</h2>
        <img src="${blogpost.img_url}"/>
        <p>${blogpost.content}</p>
    </div>
    `;
}

export { blogPage };
