const conf = require("../etc/config.json")
const snoowrap = require('snoowrap');

async function scrapeSubreddit() {
    const requester = new snoowrap({
        userAgent: conf.userAgent,
        clientId: conf.clientId,
        clientSecret: conf.clientSecret,
        username: conf.username,
        password: conf.password
    });


  const subreddit = await requester.getSubreddit('manga');
  const newPost = await subreddit.getNew();

  let data = [];

  newPost.forEach(post => {
    if (post.link_flair_text == "DISC")
      data.push({
        title: post.title,
        url: post.url,
        createdAt: post.created_utc,
      })
  });

  return data;
};

module.exports = {
  scrapeSubreddit
}
