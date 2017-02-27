// console.log($)
// import $ from 'jquery'

console.log($)

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then((serverRes)=>{
  console.log(serverRes)
  let bigHtmlStrng = serverRes.results.map(function(data){


    var htmlStr = `
    <div class='col-sm-4 congressTile'>
    <h4>${data.first_name} ${data.last_name}</h4>
    <h5>${data.title} -- ${data.party}-${data.state_name}</h5>
    <ul>
      <li>Email: ${data.oc_email}</li>
      <li>Website: ${data.website}</li>
      <li>FaseBuk: ${data.facebook_id}</li>
      <li>Twitter: ${data.twitter_id}</li>
    </ul>
    <h6>Term End: ${data.term_end}</h6>
    </div>
    `
    return htmlStr
  }).join('')

  let congMap = document.querySelector('.congMap')
    congMap.innerHTML += bigHtmlStrng
})
