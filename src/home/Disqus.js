import React from 'react';
import Disqus from "disqus-react"


function Disquss(props){

    const disqusShortname = "your-site-shortname"
    const disqusConfig = {
      url: "http://localhost:3000",
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