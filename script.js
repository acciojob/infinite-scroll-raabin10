const list = document.getElementById("infi-list");
const loadingMessage = document.createElement("li");


let page = 1;

function fetchData() {
  // Simulate fetching data from a server
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 10 }, (_, i) => `Item ${page * 10 + i + 1}`);
      resolve(data);
    }, 1000);
  });
}

async function appendData() {
  list.appendChild(loadingMessage);
  const data = await fetchData();
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  loadingMessage.remove();
  page++;
}

list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight === list.scrollHeight) {
    appendData();
  }
});

appendData();