function getAllPost() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://127.0.0.1:8000/blog/posts');
    request.send();
    //xu ly du lieu 
    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            let tr = '';
            data.posts.forEach(s => {
                tr += `<tr>
    <th scope="row">${s.postId}</th>
    <td>${s.title}</td>
    <td>${s.create_date.substr(0, 10)}</td>
    <td><a href="#">Xoá</a> | <a href="#">Sửa</a></td>
    </tr>`;
            });
            document.querySelector('#listPost').innerHTML = tr;
        }
        else {
        }
    }
}

getAllPost();

const addPost = (title, content) => {
    //tạo biến json chưa data cần thêm
    var data = JSON.stringify({
        "title": title,
        "content": content,
        "create_date": Date.now(),
    });
    var request = new XMLHttpRequest();
    request.open('POST', 'http://127.0.0.1:8000/blog/post');
    //gán thêm header
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //xử lý kết quả trả về
    request.onload = function () {
        if (this.readyState == 4 && this.status == 201) {
            var data = JSON.parse(request.responseText);

            console.log(data);
        }
        else {

        }
    }

    request.send(data);

    window.location.href = "index.html";
}

const frm = document.getElementById("frm");
frm.onsubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formFields = form.elements;

    const title = formFields.title.value;
    const content = formFields.content.value;

    console.log(title);
    console.log(content);

    addPost(title, content);
}