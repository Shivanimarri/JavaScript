const insert= document.getElementsByClassName("container")[0]

window.addEventListener('keypress', (e) =>{
    insert.innerHTML= `<div>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
    </div>`
})