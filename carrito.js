let carritoUsuario = JSON.parse(localStorage.getItem("carrito"));
let totalCompra = JSON.parse(localStorage.getItem("total"));

const renderCarrito = () => {
  let containerProdCarr = document.getElementById("products");
  let carritoDeProd = "";
  carritoUsuario.forEach((producto) => {
    carritoDeProd += `
    <div class="card">
        <h2>CAT</h2>
        <h2>cerveza ${producto.nombre}</h2>
        <h3>${producto.presentacion} litros</h3>
        <h4>Cantidad ${producto.cantidad}</h4>
        <h3>$ ${producto.precioTotal}</h3>
        <div>
            <button onClick="quitarCarrito(${producto.id})">Quitar</button>
        </div>
    </div>
    `;
  });
  containerProdCarr.innerHTML = carritoDeProd;
};
renderCarrito();

const quitarCarrito = (id) => {
  let prodFiltrados = carritoUsuario.filter((productos) => productos.id !== id);
  carritoUsuario = prodFiltrados;
  localStorage.setItem("carrito", JSON.stringify(carritoUsuario));
  renderCarrito();
};

const arrayTotal = [];
let total = 0;

const sumaTotalProd = () => {
  let sumaTotal = carritoUsuario.find((prod) => (total += prod.precioTotal));
  sumaTotal.totalCompra = total;
  arrayTotal.push(sumaTotal);
  localStorage.setItem("total", JSON.stringify(arrayTotal));
};

const renderTotal = () => {
  let containerFinal = document.getElementById("final");
  let compraFinal = "";
  totalCompra.forEach((compra) => {
    compraFinal += `
    <div class="card">
        <h2>su compra final es $${compra.totalCompra}<h2>
    </div>
  `;
  });
  containerFinal.innerHTML = compraFinal;
};

let botonConfirmarCompra = document.getElementById("confirma");
botonConfirmarCompra.addEventListener("click", () => {
  sumaTotalProd();
  renderTotal();
});

let botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", () => {
  carritoUsuario = [];
  totalCompra = [];
  localStorage.removeItem("carrito");
  localStorage.removeItem("total");
  renderCarrito();
});
