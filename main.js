const productos = [
  {
    id: 1,
    nombre: "roja",
    presentacion: 5,
    precio: 50000,
    stock: 5,
  },
  {
    id: 2,
    nombre: "roja",
    presentacion: 20,
    precio: 100000,
    stock: 5,
  },

  {
    id: 3,
    nombre: "roja",
    presentacion: 10,
    precio: 20000,
    stock: 5,
  },
  {
    id: 4,
    nombre: "negra",
    presentacion: 5,
    precio: 50000,
    stock: 5,
  },
  {
    id: 5,
    nombre: "negra",
    presentacion: 20,
    precio: 100000,
    stock: 5,
  },

  {
    id: 6,
    nombre: "negra",
    presentacion: 10,
    precio: 20000,
    stock: 5,
  },
  {
    id: 7,
    nombre: "ipa",
    presentacion: 5,
    precio: 50000,
    stock: 5,
  },
  {
    id: 8,
    nombre: "ipa",
    presentacion: 20,
    precio: 100000,
    stock: 5,
  },

  {
    id: 9,
    nombre: "ipa",
    presentacion: 10,
    precio: 20000,
    stock: 5,
  },
  {
    id: 10,
    nombre: "rubia",
    presentacion: 5,
    precio: 50000,
    stock: 5,
  },
  {
    id: 11,
    nombre: "rubia",
    presentacion: 20,
    precio: 100000,
    stock: 5,
  },

  {
    id: 12,
    nombre: "rubia",
    presentacion: 10,
    precio: 20000,
    stock: 5,
  },
];

let todosLosProductos = "";
let sosMenor = "";

let botonAceptar = document.getElementById("aceptar");
botonAceptar.addEventListener("click", () => {
let edadUser = document.getElementById("edad");
let edad = parseInt(edadUser.value);
if (edad >= 18) {
renderProducts();
} else {
menor();
}
});

const renderProducts = () => {
  let containerProd = document.getElementById("products");
  productos.forEach((producto) => {
    todosLosProductos += `
    <div class="card">
    <h2>CAT</h2>
    <h2>cerveza ${producto.nombre}</h2>
    <h3>${producto.presentacion} litros</h3>
    <h3>$ ${producto.precio}</h3>
    <h4>Stock Disponible ${producto.stock}</h4>
    <input type="number" id="cant" value="1">
    <button onClick="agregarAlCarrito(${producto.id})">Comprar</button>
    <h5>Ingrese Cantidad</h5>
    </div>
    `;
  });
  containerProd.innerHTML = todosLosProductos;
};


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarAlCarrito = (id) => {
  let inputCant = document.getElementById("cant");
  let valor = parseInt(inputCant.value);

  let prodEncontrado = productos.find((producto) => producto.id === id);

  let yaExiste = carrito.some(
    (productoCarrito) => productoCarrito.id === prodEncontrado.id
  );

  if (yaExiste) {
  } else {
    prodEncontrado.cantidad = valor;
    carrito.push(prodEncontrado);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
};
console.log(carrito);

const menor = () => {
  let containerProd = document.getElementById("products");
  sosMenor += `
    <div class="card">
        <h1>SOS MENOR</h1>
        <h1>NO</h1>
        <h1>PODES COMPRAR</h1>
    </div>
    `;
  containerProd.innerHTML = sosMenor;
};
