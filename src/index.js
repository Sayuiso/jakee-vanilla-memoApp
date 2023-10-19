import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの内容を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //divタグ生成
  const div = document.createElement("div");
  div.innerText = text;

  // 完了buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストからtodoを削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;
    //todo内容テキストを取得
    const text = addTarget.firstChild.innerText;
    //li以下を初期化
    addTarget.textContent = null;
    //divタグ生成
    const div = document.createElement("div");
    div.innerText = text;
    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグliを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // liの子要素にdivと戻るボタンを加えて、complete-list配下へ
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  // 削除buttonタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を配置
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
