import "./components/Header.js";
import "./components/Card.js";

const IMG = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emFwYXRpbGxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    price: "15",
    title: "Red"
  },
  {
    image:
      "https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA=",
    price: "30",
    title: "Green"
  },
];

onload = () => {
  const gridContainer = document.querySelector(".grid-container");
  IMG.forEach((data) =>
    gridContainer.insertAdjacentHTML(
      "beforeend",
      `<my-card img=${data.image} price=${data.price} title=${data.title}></my-card>`
    )
  );
};
