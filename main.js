const links={
  github = "MarianaMancan",
  facebook = "mariana.mancan",
  instagram ="mari_mancan",
  twitter = "mari_mancann"
  }
function changeSocialMediaLinks() {
for (let li of socialLinks.children) {
const social = li.getAttribute('Class')
li.children[0].href=`https://${social}.com/${socialLinks[social]}`

}
}
changeSocialMediaLinks()
function getGitHubProfileInfos(){
  const url= `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)

}
getGitHubProfileInfos()