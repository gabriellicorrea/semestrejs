function (){
        var ul = document.createElement('ul');
        ul.setAttribute('id','proList');

        var productList = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];

        document.getElementById('renderList').appendChild(ul);
        productList.forEach(renderProductList);

        function renderProductList(element, index, arr) {
            var li = document.createElement('li');
            li.setAttribute('class','item');

            ul.appendChild(li);

            li.innerHTML=li.innerHTML + element;
        }
    }