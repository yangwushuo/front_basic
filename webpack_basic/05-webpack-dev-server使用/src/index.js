const ul = document.createElement('ul')
document.body.append(ul)

//跨域请求，虽然Github 支持CORS 但是不是每个服务端都应该支持
//fetch('https://api.github.com/users')
console.log("发送请求");
fetch('/api/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.login
      ul.append(li)
    });
  })