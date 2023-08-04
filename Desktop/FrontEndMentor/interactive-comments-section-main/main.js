// const { text } = require("node:stream/consumers");

let container = document.querySelector(".container");

//get json data from the file

function getJsonData() {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let comments = data.comments;
            comments.forEach((e) => {
                getComments(e);

                let reply = e.replies;
                if (reply.length > 0) {
                    reply.forEach((reply) => {
                        getReplays(reply);
                    });
                }
            });

            let rps = document.querySelectorAll(".repaly");
            reply(rps);

            let yourComments = document.createElement("div");
            yourComments.classList.add("your-main-reply");
            let myCommentsImg = document.createElement("img");
            myCommentsImg.src = data.currentUser.image.webp;
            yourComments.appendChild(myCommentsImg);
            let textArea = document.createElement("textarea");
            textArea.setAttribute("type", "text");
            let text = document.createElement("p");
            text.setAttribute("readonly", "true");

            text.innerText = data.currentUser.username;
            textArea.innerText += "@" + data.currentUser.username + ",";
            yourComments.appendChild(textArea);
            let btn = document.createElement("button");
            btn.innerText = "REPLY";
            btn.classList.add("submitBtn");
            yourComments.appendChild(btn);
            container.appendChild(yourComments);

            let deleteBtn = document.querySelector(".delete");
            deleteBtn.addEventListener("click", (elements) => {
                let overlay = document.querySelector(".deleter");
                overlay.style.display = "flex";
                let alaa = document.querySelectorAll(".deleter input");
                alaa.forEach((e) => {
                    e.addEventListener("click", (ele) => {
                        console.log(ele.target.classList);
                        if (ele.target.classList === "btn2") {
                            overlay.style.display = "none";
                        } else {
                            overlay.style.display = "none";
                        }
                    });
                });
                let element =
                    elements.target.parentNode.parentNode.parentNode.parentNode
                    .parentNode;
                element.remove();
                console.log(elements);
                // let igs =
                //     e.target.parentNode.parentNode.parentNode.innerText.split(" ");
                // console.log(igs);
                // // if (
                // //     e.target.parentNode.parentNode.parentNode.childNodes.classList
                // //     .contains("username")
                // //     .classList.contains("username").innerHTML === "juliusomo"
                // // ) {
                // //     console.log("amer");
                // // } else {
                // //     console.log("Fuck you!");
                // // }
            });
        });
}
document.addEventListener("DOMContentLoaded", getJsonData);

function getComments(e) {
    //every comment will have its container
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("MainDiv");

    //main div comment
    let div = document.createElement("div");
    div.classList.add("comment");
    let button = document.createElement("div");
    button.classList.add("button");
    let plus = document.createElement("span");
    plus.innerText = "+";
    button.appendChild(plus);
    let center = document.createElement("h4");
    center.innerText = e.score;
    button.appendChild(center);
    let minus = document.createElement("span");
    minus.innerText = "-";
    button.appendChild(minus);
    div.appendChild(button);

    //////// // // // // // //
    //header div + comment textarea(main div for comment text)
    let comment = document.createElement("div");
    comment.classList.add("commarea");
    //user header
    let header = document.createElement("div");
    header.classList.add("user-header");

    let info = document.createElement("div");
    info.classList.add("user-info");
    header.appendChild(info);
    //user image
    let photo = document.createElement("img");
    photo.src = e.user.image.webp;
    info.appendChild(photo);
    //comment username
    let username = document.createElement("p");
    username.setAttribute("id", "username");
    username.innerHTML = e.user.username;
    info.appendChild(username);
    //comment date
    let date = document.createElement("p");
    date.setAttribute("id", "date");
    date.innerHTML = e.createdAt;
    info.appendChild(date);
    //replay icon
    let replay = document.createElement("div");
    replay.classList.add("repaly");
    let icon = document.createElement("img");
    icon.src = "images/icon-reply.svg";
    replay.appendChild(icon);
    let replayText = document.createElement("p");
    replayText.innerText = "Replay";
    replay.appendChild(replayText);
    header.appendChild(replay);
    ////////////////////////////////////////////////////////////////

    //textComment
    let text = document.createElement("p");
    text.setAttribute("id", "text");
    text.innerHTML = e.content;

    //// // // // // // //
    comment.appendChild(header);
    comment.appendChild(text);
    div.appendChild(comment);
    mainDiv.appendChild(div);
    container.appendChild(mainDiv);
}

function getReplays(reply) {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("MainDiv");

    let div = document.createElement("div");
    div.classList.add("commentReply");

    let button = document.createElement("div");
    button.classList.add("button");
    let plus = document.createElement("span");
    plus.innerText = "+";
    button.appendChild(plus);
    let center = document.createElement("h4");
    center.innerText = reply.score;
    button.appendChild(center);
    let minus = document.createElement("span");
    minus.innerText = "-";
    button.appendChild(minus);
    div.appendChild(button);
    //////// // // // // // //
    //header div + comment textarea(main div for comment text)
    let comment = document.createElement("div");
    comment.classList.add("commarea");
    //user header
    let header = document.createElement("div");
    header.classList.add("user-header");

    let info = document.createElement("div");
    info.classList.add("user-info");

    //user image
    let photo = document.createElement("img");
    photo.src = reply.user.image.webp;
    info.appendChild(photo);
    //comment username
    let username = document.createElement("p");
    username.setAttribute("id", "username");
    username.innerHTML = reply.user.username;
    info.appendChild(username);
    if (reply.user.username === "juliusomo") {
        let you = document.createElement("p");
        you.setAttribute("id", "you");
        you.innerHTML = "you";
        you.style.cssText =
            "width: 35px; height:20px;background:hsl(238, 40%, 52%);color:white;border-radius:3px;font-size:14px;margin-right:10px;text-align:center";
        info.appendChild(you);
        username.style.marginRight = "5px";
    } else {
        console.log("reply.id");
    }
    header.appendChild(info);
    //comment date
    let date = document.createElement("p");
    date.setAttribute("id", "date");
    date.innerHTML = reply.createdAt;
    info.appendChild(date);
    //replay icon
    let replay = document.createElement("div");
    replay.classList.add("repaly");
    if (reply.user.username === "juliusomo") {
        let noor = document.createElement("div");
        noor.classList.add("noor");
        noor.setAttribute("id", "del-edit");
        let delDiv = document.createElement("div");
        delDiv.classList.add("delete");
        let delIcon = document.createElement("img");
        delIcon.src = "images/icon-delete.svg";
        delDiv.appendChild(delIcon);
        let del = document.createElement("p");
        del.style.cssText =
            "font-size:14px; color:hsl(358, 79%, 66%);font-weight:500";
        del.innerHTML = "Delete";
        delDiv.appendChild(del);
        noor.appendChild(delDiv);
        ////////////////////////////////////////////////////////////////
        let EdiDiv = document.createElement("div");
        EdiDiv.classList.add("edit");

        let editIcon = document.createElement("img");
        editIcon.src = "images/icon-edit.svg";
        editIcon.style.cssText = "margin-left:10px";
        EdiDiv.appendChild(editIcon);
        let edit = document.createElement("p");
        edit.style.cssText =
            "font-size:14px; color:hsl(238, 40%, 52%);font-weight:500; ";
        edit.innerHTML = "Edit";
        EdiDiv.appendChild(edit);
        noor.appendChild(EdiDiv);
        header.appendChild(noor);
        replay.style.display = "none";
    } else {
        let icon = document.createElement("img");
        icon.src = "images/icon-reply.svg";
        replay.appendChild(icon);
        let replayText = document.createElement("p");
        replayText.innerText = "Replay";
        replay.appendChild(replayText);
    }

    header.appendChild(replay);
    ////////////////////////////////////////////////////////////////
    //textComment
    let text = document.createElement("p");
    text.setAttribute("id", "text");
    text.innerHTML = reply.content;
    //// // // // // // //
    comment.appendChild(header);
    comment.appendChild(text);
    div.appendChild(comment);
    mainDiv.appendChild(div);
    container.appendChild(mainDiv);
}

function reply(rps) {
    rps.forEach((r) => {
        r.addEventListener("click", (ele) => {
            let amer =
                ele.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            console.log(ele.target);

            fetch("data.json")
                .then((response) => response.json())
                .then((data) => {
                    let yourComments = document.createElement("div");
                    yourComments.classList.add("your-reply");
                    let myCommentsImg = document.createElement("img");
                    myCommentsImg.src = data.currentUser.image.webp;
                    // let user = document.createElement("h4");
                    // user.textContent = data.currentUser.username;
                    // yourComments.appendChild(user);
                    yourComments.appendChild(myCommentsImg);
                    let textArea = document.createElement("textarea");
                    textArea.setAttribute("type", "text");
                    text.innerText = data.currentUser.username;
                    textArea.innerText += "@" + data.currentUser.username + ",";
                    yourComments.appendChild(textArea);
                    let btn = document.createElement("button");
                    btn.innerText = "REPLY";
                    btn.classList.add("submitBtn");
                    yourComments.appendChild(btn);
                    amer.appendChild(yourComments);
                    // if (yourComments.lastElementChild) {
                    //     yourComments.style.cssText = "width:90%";
                    // } else {
                    //     yourComments.style.cssText = "width:100%";
                    // }
                    let subReply = document.querySelectorAll(".submitBtn");
                    subReply.forEach((e) => {
                        e.addEventListener("click", (hero) => {
                            // console.log(hero.target.parentNode);
                            let text = hero.target.parentNode;
                            console.log(text.childNodes[1].value);

                            let paragraph = document.createElement("p");
                            paragraph.textContent = text.childNodes[1].value;

                            let node = text.childNodes[1];
                            // node.tagName.replace(textArea, paragraph);
                            node.replaceWith(paragraph);
                            console.log(text.childNodes[1]);
                        });
                    });
                });
        });
    });
}