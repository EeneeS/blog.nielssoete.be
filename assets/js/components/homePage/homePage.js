"use strict";

import { POSTS } from "../../posts.js";

function homePage() {
    const $content = document.querySelector("#content");
    const $homePage = document.createElement("div");
    $homePage.id = "home-page";

    // Add components here
    $homePage.insertAdjacentHTML("beforeend", Header());
    $homePage.insertAdjacentHTML("beforeend", BlogPosts());

    $content.innerHTML = $homePage.innerHTML;
}

function Header() {
    return `
        <div class="hero">
            <h1>NIELS SOETE'S
            <span class="blue">B</span><span class="orange">L</span><span class="purple">O</span><span
                class="pink">G</span>
            </h1>
            <h2>Embark on my tech journey! Join me on my personal blog as I share insights and experiences from lectures and events.</h2>
        </div>
    `;
}

function BlogPosts() {
    const $content = document.createElement("div");
    $content.id = "blog-posts";
    POSTS.forEach((item) => {
        const html = createCardHTML(item.title, item.content, item.img_url, item.post_url)
        $content.insertAdjacentHTML("beforeend", html);
    })
    return $content.outerHTML;
}

function createCardHTML(title, content, img_url, post_url) {
    return `
    <article class="blog-card">
        <img src=${img_url} />
        <h3>${title}</h3>
        <p>${content}</p>
        <a href="#posts/${post_url}">read more</a>
    </article>
    `;
}

export { homePage }
