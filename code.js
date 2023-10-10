
/*Se genera funcion reutilizable*/
async function ObtenerCargarDatos(endpoint, selector, template) {
    try {
        const respuesta = await fetch(endpoint);
        if (!respuesta.ok) {
            throw new Error(`No se puedo recuperar los datos ${endpoint}`)
        }
        const datos = await respuesta.json();
        const etiqueta = document.querySelector(selector);

        if (etiqueta) {
            etiqueta.innerHTML = template(datos);
        }
    }
    catch (error) {
        console.log(error)
    }
};

function Perfil(datos) {
    return `<article class="header__article__profile">
        <div class="header__article__div__img">
        <img class="header__first__img" src=${datos.img} alt="imagen-del-perfil">
        </div>
        <div class="header__div__info">
        <div class="header__info__name">
            <h1>Nombre</h1>
            <h2>Front-end developer</h2>
        </div>
        <div class="header__info__contact">
            <i class="fa-solid fa-envelope"></i>
            <span>ejemplo@mail.com</span>
            <br>
            <i class="fa-solid fa-phone"></i>
            <span>+54 9 11-1234-5678</span>
        </div>`
}

ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/Perfil`, `.header`, Perfil);

function Experiencia(datos) {
    let expCard = ``;

    for (let i = 0; i < 1; i++) {
        expCard += `<article class="article__experiencia">

        <div class="article__frame13">
            <div class="article__frame15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
                        fill="currentColor" />
                    <path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
                        fill="currentColor" />
                    <path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" />
                </svg>
                <div class="article__frame14">
                    <span>Feb 2022 - Actualidad</span>
                    <h2>Front-end Developer</h2>
                </div>
            </div>
            <p class="article__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut
                error
                quos necessitatibus
                officia blanditiis esse sint eos itaque!</p>
        </div>
    </article>`
    }
    for (let i = 1; i < datos.length; i++) {
        expCard += ` <article class="article__experiencia2">

        <div class="article__frame13">
            <div class="article__frame15">
                src=
                <div class="article__frame14">
                    <span>Feb 2022 - Actualidad</span>
                    <h2>Front-end Developer</h2>
                </div>
            </div>
            <p class="article__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut
                error quos necessitatibus officia blanditiis esse sint eos itaque!</p>
        </div>
    </article>`
    }
    return expCard;
}

ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/experiencia`, `.experiencia__div`, Experiencia);

function Certificacion(datos) {
    let certCard = ``;

    datos.slice(0, 1).forEach(element => {
        certCard += `<div class="certificate__frame14">
        <div class="contenedor__certificate__img">
            <img class="certificate__img" src= ${element.img} alt="diploma_demo">
        </div>

        <div class="certificate_frame15">
            <h2>${element.titulo}</h2>
            <span>${element.fecha}</span>
        </div>
    </div>`
    });

    datos.slice(1, 3).forEach(element => {
        certCard += `<div class="certificate__frame14__2">
        <div class="contenedor__certificate__img__1">
            <img class="certificate__img" src=${element.img} alt="diploma_demo">
        </div>

        <div class="certificate_frame15">
            <h2>${element.titulo}</h2>
            <span>${element.fecha}</span>
        </div>

    </div>`
    });

    return certCard

};


ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/certificados`, `.certificate__frame__general`, Certificacion)


const btnSelection = document.getElementById("btnResponsive");
btnSelection.classList.add(`showBtn`);

function Proyectos(datos) {
    let template = "";

    if (datos.responsive && datos.responsive.length > 0) {
        const proyectCount = document.querySelector(".proyectCountTitle")
        proyectCount.innerHTML = `Proyecto(${datos.responsive.length})`

        datos.responsive.forEach(info => {
            template += `
            <section class="preview">
                <div class="preview__frame">
                    <div class="preview__Mask">
                        <img src= ${info.img} alt="vista previa del proyecto" class="preview__Mask__img">
                    </div>
                    <div class="preview__info">
                        <div class="preview__titulo">
                            <span class="preview__hashtags">${info.etiqueta}</span>
                            <h4>${info.titulo}</h4>
                        </div>

                        <p>
                            ${info.descripcion}
                        </p>

                        <nav class="preview__nav">
                            <a href="" class="preview__nav__button">Demo</a>
                            <a href="" class="preview__nav__button__two">Code</a>
                        </nav>
                    </div>
                </div>
            </section>`
        });

    }

    return template

}



ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/proyectos`, `.preview__general`, Proyectos)

const buttons = document.querySelector(`.proyects__button`)
buttons.addEventListener("click", (e) => {


    const buttonResponsive = document.querySelector(`#btnResponsive`);
    const buttonJavascript = document.querySelector(`#btnJs`);
    const buttonReact = document.querySelector("#btnReact");

    if (e.target === buttonResponsive) {
        function Proyectos(datos) {
            let template = "";

            if (e.target && datos.responsive.length > 0) {
                const proyectCount = document.querySelector(`.proyectCountTitle`);
                proyectCount.innerHTML = `Proyecto(${datos.responsive.length})`;

                buttonResponsive.classList.add("showBtn");
                buttonJavascript.classList.remove("showBtn");
                buttonReact.classList.remove("showBtn");

                datos.responsive.forEach(info => {
                    template += `
                    <section class="preview">
                    <div class="preview__frame">
                        <div class="preview__Mask">
                            <img src= ${info.img} alt="vista previa del proyecto" class="preview__Mask__img">
                        </div>
                        <div class="preview__info">
                            <div class="preview__titulo">
                                <span class="preview__hashtags">${info.etiqueta}</span>
                                <h4>${info.titulo}</h4>
                            </div>
    
                            <p>
                                ${info.descripcion}
                            </p>
    
                            <nav class="preview__nav">
                                <a href="" class="preview__nav__button">Demo</a>
                                <a href="" class="preview__nav__button__two">Code</a>
                            </nav>
                        </div>
                    </div>
                </section>`
                });
            }
            console.log(template);
            return template;
        }
    
        ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/proyectos`, `.preview__general`, Proyectos)
    }
        if (e.target === buttonJavascript) {
            function Proyectos(datos) {

                let template = "";
                if (datos.JavaScript && datos.JavaScript.length > 0) {
                    const proyectCount = document.querySelector(`.proyectCountTitle`);
                    proyectCount.innerHTML = `Proyecto(${datos.JavaScript.length})`;
                    buttonResponsive.classList.remove("showBtn");
                    buttonJavascript.classList.add("showBtn");
                    buttonReact.classList.remove("showBtn");

                    datos.JavaScript.forEach(info => {
                        template += `
                        <section class="preview">
                        <div class="preview__frame">
                            <div class="preview__Mask">
                                <img src= ${info.img} alt="vista previa del proyecto" class="preview__Mask__img">
                            </div>
                            <div class="preview__info">
                                <div class="preview__titulo">
                                    <span class="preview__hashtags">${info.etiqueta}</span>
                                    <h4>${info.titulo}</h4>
                                </div>
        
                                <p>
                                    ${info.descripcion}
                                </p>
        
                                <nav class="preview__nav">
                                    <a href="" class="preview__nav__button">Demo</a>
                                    <a href="" class="preview__nav__button__two">Code</a>
                                </nav>
                            </div>
                        </div>
                    </section>`

                    });


                }
                console.log(template)
                return template
                
            }
            ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/proyectos`, `.preview__general`, Proyectos)

        }

        if (e.target === buttonReact){
            function Proyectos(datos) {
                
                let template = "";
                if (datos.React && datos.React.length > 0) {
                    const proyectCount = document.querySelector(`.proyectCountTitle`);
                    proyectCount.innerHTML = `Proyecto(${datos.React.length})`;
                    buttonResponsive.classList.remove("showBtn");
                    buttonJavascript.classList.remove("showBtn");
                    buttonReact.classList.add("showBtn");

                    datos.React.forEach(info => {
                        template +=`
                        <section class="preview">
                        <div class="preview__frame">
                            <div class="preview__Mask">
                                <img src= ${info.img} alt="vista previa del proyecto" class="preview__Mask__img">
                            </div>
                            <div class="preview__info">
                                <div class="preview__titulo">
                                    <span class="preview__hashtags">${info.etiqueta}</span>
                                    <h4>${info.titulo}</h4>
                                </div>
        
                                <p>
                                    ${info.descripcion}
                                </p>
        
                                <nav class="preview__nav">
                                    <a href="" class="preview__nav__button">Demo</a>
                                    <a href="" class="preview__nav__button__two">Code</a>
                                </nav>
                            </div>
                        </div>
                    </section>`

                        });


                    }
                    console.log(template)
                    return template
            
                }
                ObtenerCargarDatos(`https://my-json-server.typicode.com/nitsugasos1/new-api/proyectos`, `.preview__general`, Proyectos)
            }
        }
    
)







