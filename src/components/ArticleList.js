import React from "react";
import article from "./Article";

function ArticleList (props){
    return (
        <div>
            <main>
                {props.posts.map((post) => (
                    (article(post))
                ))}
            </main>
        </div>
    )
}
export default ArticleList;