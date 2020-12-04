import React from 'react';
import Disqus from "disqus-react"


function Disquss(props){

    const disqusShortname = "your-site-shortname"
    const disqusConfig = {
      url: "https://s11720037.github.io/project-final-fwd/",
      identifier: props.identifier,
    }

    return(
        <div className="article-container">
            <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
            />
        </div>
    )
}


export default Disquss;