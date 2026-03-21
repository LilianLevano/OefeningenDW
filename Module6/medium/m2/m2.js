"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let buttonToepassen = document.getElementById("toepassen");
  let laadIndicator = document.querySelector(".laad-indicator");
  let postContainer = document.getElementById("posts-container");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      buttonToepassen.addEventListener("click", () => {
        let teTonenPosts = sorteerPosts(data);

        toonPosts(teTonenPosts);
        laadIndicator.remove();
        console.log(teTonenPosts);
      });
    })

    .catch((error) => {
      postContainer.textContent = error.message;
    });
});

const sorteerPosts = (data) => {
  let zoekOpTitelInput = document.getElementById("zoekterm");
  let zoekOpTitel = zoekOpTitelInput.value;
  let sorteerOptieInput = document.getElementById("sorteer");
  let sorteerOptie = sorteerOptieInput.value;

  let teTonenPosts = [];

  for (let post of data) {
    if (post.title.includes(zoekOpTitel)) {
      teTonenPosts.push(post);
    }
  }

  if (sorteerOptie == "titel-oplopend") {
    teTonenPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sorteerOptie == "titel-aflopend") {
    teTonenPosts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sorteerOptie === "id-oplopend") {
    teTonenPosts.sort((a, b) => a.id - b.id);
  } else if (sorteerOptie === "id-aflopend") {
    teTonenPosts.sort((a, b) => b.id - a.id);
  }

  return teTonenPosts;
};

const toonPosts = (arrayPosts) => {
  let postContainer = document.getElementById("posts-container");
  postContainer.innerHTML = "";

  if (arrayPosts.length === 0) {
    postContainer.textContent =
      "Er werden geen resultaten gevonden volgens jouw zoekcriterias.";
  }

  let aantalPostsInput = document.getElementById("limiet");
  let aantalPosts = Number(aantalPostsInput.value);

  let i = 0;

  for (let post of arrayPosts) {
    if (i === aantalPosts) {
      return;
    } else {
      let postKaart = document.createElement("div");
      postKaart.classList.add("post");

      let postTitel = document.createElement("h1");
      postTitel.textContent = post.title;
      postTitel.style.textTransform = "uppercase";
      postTitel.classList.add("post-titel");

      let postBody = document.createElement("p");
      postBody.textContent = post.body;

      if (postBody.textContent.length > 100) {
        postBody.textContent = postBody.textContent.slice(0, 100) + "...";
      }

      postBody.classList.add("post-body");

      let postId = post.id;
      let postUserId = post.userId;

      let info = `ID van de post: ${postId}, ID van de poster: ${postUserId}`;
      let infoPost = document.createElement("p");
      infoPost.textContent = info;
      infoPost.classList.add("post-info");

      postKaart.appendChild(postTitel);
      postKaart.appendChild(postBody);
      postKaart.appendChild(infoPost);

      postContainer.appendChild(postKaart);

      i++;
    }
  }
};
