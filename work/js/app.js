document.addEventListener('DOMContentLoaded', () => {
    // ページができたら、動くよという合図
    fetch('data/product.json')
    // データを撮りに行く
        .then(response => response.json())
        // .then；非同期処理がで移行したら
        // 取得したデータをjson形式に変換する
        .then(data => {
            // => {} アロー関数　この結果を使って何をするのか{...}の中に処理内容
            // dataはfetchを指す
            const table = document.getElementById('productTable')
            // idの要素 productTableを取得している
            data.forEach(product => {
                const row = document.createElement('tr');
                // 行を作ることをrowで定義している、行　その中身は・・・
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                `;
                table.appendChild(row);
                // tableの末尾に作成した行が追加される　指定した要素を親要素の中に追加する
            });
        })
        .catch(error => console.error('エラー', error));
        // エラーが発生した時コンソールにエラー内容を表示する
});

