let score = 0;
// let comments = [];
window.onload = (event) => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";
  mainDiv.appendChild(h1);
  document.body.appendChild(mainDiv);
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("id", "cat-pic");
  imgDiv.appendChild(img);
  mainDiv.appendChild(imgDiv);

  const voteDiv = document.createElement("div");

  const popularityScore = document.createElement("p");
  //   popularityScore.innerText = "Popularity Score";
  popularityScore.setAttribute("id", "popularity-Score");
  voteDiv.appendChild(popularityScore);

  const upvoteBtn = document.createElement("button");
  upvoteBtn.innerText = "Upvote";
  upvoteBtn.addEventListener("click", (event) => {
    score += 1;
    display();
  });
  voteDiv.appendChild(upvoteBtn);

  const downvoteBtn = document.createElement("button");
  downvoteBtn.innerText = "Downvote";
  downvoteBtn.addEventListener("click", (event) => {
    score -= 1;
    display();
  });
  voteDiv.appendChild(downvoteBtn);

  const commentDiv = document.createElement("div");
  const comment = document.createElement("label");
  comment.innerText = "Comment";
  const commentInput = document.createElement("input");
  commentInput.placeholder = "Add a comment...";
  const submit = document.createElement("button");
  submit.innerText = "Submit";
  commentDiv.appendChild(comment);
  commentDiv.appendChild(commentInput);
  commentDiv.appendChild(submit);
  const ul = document.createElement("ul");

  submit.addEventListener("click", (event) => {
    const li = document.createElement("li");
    li.innerText = commentInput.value;
    ul.appendChild(li);
    commentInput.value = "";
  });
  //   mainDiv.appendChild(comment);
  //   mainDiv.appendChild(commentInput);
  //   mainDiv.appendChild(submit);

  mainDiv.appendChild(voteDiv);
  mainDiv.appendChild(commentDiv);
  mainDiv.appendChild(ul);

  fetchCatImg();
  display();
};
const fetchCatImg = () => {
  const img = document.getElementById("cat-pic");

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      img.src = data[0].url;
    });
};

const display = () => {
  const popularityScore = document.getElementById("popularity-Score");
  popularityScore.innerText = `Popularity Score: ${score}`;
};

// const displayComments = () => {
//   const ul = document.createElement("ul");
//   comments.forEach((cmt) => {
//     const li = document.createElement("li");
//     li.innerText = cmt;
//     ul.appendChild(li);
//   });
//   mainDiv.appendChild(ul);
// };
