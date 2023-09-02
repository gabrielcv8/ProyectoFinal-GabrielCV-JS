//Array donde se va a almacenar el carrito de compras
let carrito = [];

//Sweet Alert
if (localStorage.getItem('email')) {
    Swal.fire("Hola de nuevo");
} else {
    Swal.fire({
        title: 'Ingrese su cuenta SAYU',
        input: 'email',
        inputLabel: 'Ingrese mail válido',
        inputPlaceholder: 'nombre@ejemplo.com'
    }).then((result) => {
        if (result.isConfirmed) {
            let correo = result.value;
            Swal.fire(`Bienvenido: ${correo}`);

            // Almacenar en el local storage
            let emailObj = { email: correo };
            let emailJSON = JSON.stringify(emailObj);
            localStorage.setItem('email', emailJSON);
        }
    });
};

//Creación de los productos
fetch("productos.json")
    .then((response) => response.json())
    .then((data) => {

        const productos = data.productos;
        const contenedorProductos = document.getElementsByClassName("row")[0];

        //Creación de cards

        productos.forEach((producto) => {
            const columna = document.createElement("div");
            columna.classList.add("col");
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.classList.add("card-img-top");
            img.src = producto.src;
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titulo = document.createElement("h4");
            titulo.classList.add("card-title");
            titulo.textContent = producto.nombre;
            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = producto.descripcion;
            const boton = document.createElement("a");
            boton.classList.add("btn");
            boton.classList.add("btn-primary");
            boton.textContent = "Añadir carrito";

            //Agregando hijos a los padres

            cardBody.appendChild(titulo);
            cardBody.appendChild(cardText);
            cardBody.appendChild(boton);

            card.appendChild(img);
            card.appendChild(cardBody);

            columna.appendChild(card);

            contenedorProductos.appendChild(columna);


            boton.addEventListener("click", () => {
                Toastify({
                    text: `Añadido al carrito ${producto.nombre}`,
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #c763ae, #614344)",
                    },
                }).showToast();
                carrito.push({ "nombre": producto.nombre, "precio": producto.precio })
            });



            const totalcarrito = document.getElementById("totalCarrito")
            totalcarrito.addEventListener("click", () => {
                const listaCarrito = document.getElementById("listaCarrito");
                listaCarrito.innerHTML = "";


                carrito.forEach((item) => {
                    let carritoPrecios = [];
                    for (let i = 0; i < carrito.length; i++) {
                        let precio = carrito[i].precio;
                        carritoPrecios.push(parseInt(precio));
                    }

                    const totalAPagar = carritoPrecios.reduce((total, producto) => total + producto);
                    let pagarH3 = document.getElementById("totalAPagar");
                    pagarH3.innerText = "El costo total es de: $" + totalAPagar;

                    const lista = document.createElement("li");
                    lista.textContent = item.nombre + " cuesta $" + item.precio;
                    listaCarrito.appendChild(lista);
                    const quitar = document.createElement("a");
                    quitar.textContent = "Quitar " + item.nombre;
                    quitar.classList.add("btn");
                    quitar.classList.add("btn-danger");
                    listaCarrito.appendChild(quitar);
                    quitar.addEventListener("click", () => {

                        const index = carrito.indexOf(item);
                        if (index !== -1) {
                            // Eliminar el objeto del array 'carrito'
                            carrito.splice(index, 1);
                
                            // Eliminar el elemento del DOM
                            lista.remove();
                            quitar.remove();
                            console.log(carritoPrecios)
                            console.log(carrito)

                            
                            carrito.forEach(() => {
                                let carritoPrecios = [];
                                for (let i = 0; i < carrito.length; i++) {
                                    let precio = carrito[i].precio;
                                    carritoPrecios.push(parseInt(precio));
                                }
            
                                const totalAPagar = carritoPrecios.reduce((total, producto) => total + producto);
                                let pagarH3 = document.getElementById("totalAPagar");
                                pagarH3.innerText = "El costo total es de: $" + totalAPagar;
                            }
                        );

                }});
                });


            });
        });
    });

























































//Función del click
/* const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Nike Courtside",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos1);
});

const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Court Vision Mid",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos2);
});

const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Urbano Adidas Gw2063",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos3);
});

const boton4 = document.getElementById("boton4");
boton4.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Nike Renew Retaliation",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos4);
});

const boton5 = document.getElementById("boton5");
boton5.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Nike Air Max Ap",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos5);
});

const boton6 = document.getElementById("boton6");
boton6.addEventListener("click", () => {
    Toastify({

        text: "Añadido al carrito Nike Downshifter 12",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #c763ae, #614344)",
        },

    }).showToast();
    carrito.push(modelos6);
}); */




//Función al carrito













/* let botones = document.getElementsByClassName("btnClick");
botones[0].addEventListener("click", () => console.log("Este producto te esta constando " + productos[0].precio));
botones[1].addEventListener("click", () => console.log("Este producto te esta constando " + productos[1].precio));
botones[2].addEventListener("click", () => console.log("Este producto te esta constando " + productos[2].precio));
botones[3].addEventListener("click", () => console.log("Este producto te esta constando " + productos[3].precio));
botones[4].addEventListener("click", () => console.log("Este producto te esta constando " + productos[4].precio));
botones[5].addEventListener("click", () => console.log("Este producto te esta constando " + productos[5].precio)); */

/* for (const i of botones) {
    if(i===botones[1]){
        let i = 1;
        console.log(i)
    }
} */

/* let botones = document.getElementsByClassName("btn-close");
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", respuestaClick);
}
function respuestaClick() {
    console.log("Respuesta Evento")
} */

//Machete para que te guies en como usar un for...of...if y evitar que se itere
/* function verificarTipo() {
    let hayNumerosEnCarrito = false;

    for (let existe of carrito) {
        if (typeof existe === "number") {
            hayNumerosEnCarrito = true;
            break; // Si hay al menos un número, break
        };
    };

    if (hayNumerosEnCarrito) {
        let confirmar = confirm("¿Deseas continuar con la compra?");
        if (confirmar === true) {
            const totalAPagar = carrito.reduce((total, producto) => total + producto, 0);
            alert("La cantidad total a pagar es de $" + totalAPagar);
            let dinero = prompt("Ingrese Cantidad de dinero");
            if (Number.isInteger(parseFloat(dinero)) && dinero >= totalAPagar) {
                let vuelto = dinero - totalAPagar;
                alert("Compra exitosa tu vuelto es de $" + vuelto);
                carrito.length = 0;
                otrosProductos();
            } else {
                alert("Ingrese un numero mayor o igual a $" + totalAPagar);
                carrito.length = 0;
                plantillaCompra();
            };
        } else {
            otrosProductos();
        };
    } else {
        otrosProductos();
    };
};

//Función ver otros productos
function otrosProductos() {
    let confirmar = confirm("¿Desea ver otros productos?"); {
        if (confirmar === true) {
            plantillaCompra();
        } else {
            alert("Gracias por su visita, vuelva pronto.");
        };
    };
}; */


//Función para relizar pedido
/* function plantillaCompra() {
    alert("Bienvenido a la tienda SAYU");
    let i = prompt("Ingrese Modelo de Producto. (Modelo1 = 0, Modelo2 = 1, Modelo3 = 2; Modelo4 = 3; Modelo5 = 4; Modelo6 = 5;"); {
        if (Number.isInteger(parseFloat(i)) && i >= 0 && i <= 5) {
            const precio = productos[i].precio;
            let confirmar = confirm("Este producto cuesta $" + precio + ". ¿Deseas añadirlo al carrito?"); {
                if (confirmar === true) {
                    carrito.push(precio);
                    verificarTipo();
                } else {
                    otrosProductos();
                };
            };
        } else {
            alert("Ingrese un número válido");
            plantillaCompra();
        };
    };
};

plantillaCompra(); */