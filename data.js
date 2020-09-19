window.onload = function () {
  var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
    console.log(params)
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1].replace(/%20/g, " ");
  }
  console.log(data)
  document.getElementById("navbar_name").innerHTML=data.name;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("photo_link").src=data.photo_link;
  document.getElementById("resume_link").href = data.resume_link;
  document.getElementById("introduction").innerHTML = data.introduction;
  document.getElementById("achievement1").innerText = data.achievement1;
  document.getElementById("achievement2").innerText = data.achievement2;
  document.getElementById("achievement3").innerText = data.achievement3;
  
};
