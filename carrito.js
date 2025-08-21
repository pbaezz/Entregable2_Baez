let carritoUsuario = JSON.parse(localStorage.getItem("carrito"));
//let totalCompra = JSON.parse(localStorage.getItem("total"));

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
        <h3>$ ${producto.precio}</h3>
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

compraFinal=""
let total = 0;    
const sumaTotalProd = () =>{
    carritoUsuario.forEach((producto) => {
        const subtotal = producto.precio * producto.cantidad;
        total +=subtotal
    });
   
};

const renderTotal =()=>{
       let containerFinal = document.getElementById("final");
         compraFinal += `
     <div class="card">
       <h2>su compra final es $${total}<h2>
       <h4>con cuanto dinero abona?<h4>
       <input type="text" id="cant2" value="">
       <button onClick="tiket()">aceptar</button>
     </div>
   `;
   containerFinal.innerHTML = compraFinal;
}

vueltorend=""
const tiket =()=>{
  let pago = document.getElementById("cant2");
  let valorPago = parseInt(pago.value);
  let vuelto = valorPago -= total
 
  let containerTiket = document.getElementById("tiketfinal");
  vueltorend += `
     <div class="card">
       <h2>su vuelto es $${vuelto}<h2>
       <h4>GRACIAS POR SU COMPRA<h4>
     </div>
   `;
   containerTiket.innerHTML = vueltorend;
}


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
