import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
      <div class="redesSociais-icons">
        <a href="https://www.linkedin.com/in/lucassneiva/" class="linkedin" title="linkedin" target="_blank">
            <img loading="lazy" src="https://64.media.tumblr.com/2f77f763790fad1c69fd0d474151a7bb/ba87262568eace40-8f/s1280x1920/d239562136e8d88f7bd6877dbafe7e4ebcda8a12.png" alt="linkedin" title="linkedin"></img>
            </a>
        <a href="https://github.com/lucassneiva" class="github" title="github" target="_blank">
            <img loading="lazy" src="https://pngimg.com/uploads/github/github_PNG40.png" alt="github" title="github"></img>
            </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
