function carga() {
    const filas = [
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 1,
            REFERENCIA: "TAE TRAGSA-379",
            CATEGORIA: "ADMINISTRATIVO",
            UT: "UT2",
            GERENCIA: "CASTELLÓN",
            UBICACION: "CASTELLÓN",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 2,
            REFERENCIA: "TAE TRAGSA-383; TAE TRAGSA-384",
            CATEGORIA: "ADMINISTRATIVO",
            UT: "UT2",
            GERENCIA: "HUESCA",
            UBICACION: "TORLA-ORDESA",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 3,
            REFERENCIA: "TAE TRAGSA-424",
            CATEGORIA: "ADMINISTRATIVO",
            UT: "UT2",
            GERENCIA: "MURCIA",
            UBICACION: "MURCIA",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 47,
            REFERENCIA: "TAE TRAGSA-149; TAE TRAGSA-150; TAE TRAGSA-151; TAE TRAGSA-152; TAE TRAGSA-153; TAE TRAGSA-154; TAE TRAGSA-155; TAE TRAGSA-156; TAE TRAGSA-157; TAE TRAGSA-158; TAE TRAGSA-159; TAE TRAGSA-160; TAE TRAGSA-161; TAE TRAGSA-162; TAE TRAGSA-163; TAE TRAGSA-164",
            CATEGORIA: "GUIA",
            UT: "UT1",
            GERENCIA: "ASTURIAS",
            UBICACION: "ASTURIAS",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        }
    ];

    const filas_tragsatec = [
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 1,
            REFERENCIA: "TRE TRAGSATEC-0203",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - PRODUCCIÓN/MERCADOS/I.AGRARIAS",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 2,
            REFERENCIA: "TRE TRAGSATEC-0124",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - PRODUCCIÓN/MERCADOS/I.AGRARIAS",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 3,
            REFERENCIA: "TAE TRAGSATEC-0010",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - PRODUCCIÓN/MERCADOS/I.AGRARIAS",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 4,
            REFERENCIA: "TAE TRAGSATEC-1560",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 5,
            REFERENCIA: "TAE TRAGSATEC-1907",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 6,
            REFERENCIA: "TAE TRAGSATEC-1700",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 7,
            REFERENCIA: "TRE TRAGSATEC-0074",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 8,
            REFERENCIA: "TAE TRAGSATEC-1799",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 9,
            REFERENCIA: "TAE TRAGSATEC-1970",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 10,
            REFERENCIA: "TAE TRAGSATEC-1883",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 11,
            REFERENCIA: "TAE TRAGSATEC-1682; TAE TRAGSATEC-2023",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 12,
            REFERENCIA: "TRE TRAGSATEC-0361",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 13,
            REFERENCIA: "TRE TRAGSATEC-0360",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 14,
            REFERENCIA: "TAE TRAGSATEC-1906",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        },
        {
            PUESTO: "ADMINISTRATIVO",
            BLOQUE: 15,
            REFERENCIA: "TRE TRAGSATEC-0089; TRE TRAGSATEC-0145",
            CATEGORIA: "OFICIAL 1ª ADMINISTRATIVO",
            SUBUT: "AGSA",
            GERENCIA: "AGSA - SANIDAD/S.ALIMENTAR./S.PÚBLICA",
            UBICACION: "MADRID",
            ANEXOESP: "assets/img/pdf-icon.svg",
            DRE: "assets/img/pdf-icon.svg",
            DRADRF: "assets/img/pdf-icon.svg",
            INSCRIPCION: "INSCRIBETE AQUI"
        }
    ];
    

    rellenarTablaTRAGSA(filas);
    rellenarTablaTRAGSATEC(filas_tragsatec);
    initSmoothScrollAndAnimation();
    scrollToTopOnLogoClick();
    // setupModalForCandidatoArea();
    // setupForgotPasswordModal();
    inicializarFiltrado(filas);
    inicializarFiltradoTRAGSATEC(filas_tragsatec);

    var myOffcanvas = document.getElementById('offcanvasTop');
    var body = document.querySelector('body');

    myOffcanvas.addEventListener('show.bs.offcanvas', function () {
        body.classList.add('offcanvas-active');
    });

    myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
        body.classList.remove('offcanvas-active');
    });

    document.addEventListener('click', function (event) {
        var isClickInside = myOffcanvas.contains(event.target);
    
        if (!isClickInside && myOffcanvas.classList.contains('show')) {
            var bsOffcanvas = bootstrap.Offcanvas.getInstance(myOffcanvas);
            bsOffcanvas.hide();
        }
    });

    const svgIcon = document.querySelector('.chevron-circle');


    window.addEventListener('scroll', function() {
    
        if (window.pageYOffset > 0) {
            svgIcon.style.display = 'block';
            svgIcon.classList.remove('animate__fadeOutDown');
            svgIcon.classList.add('animate__slideInUp');
        } else {
        
            svgIcon.classList.remove('animate__slideInUp');
            svgIcon.classList.add('animate__fadeOutDown');
            setTimeout(() => svgIcon.style.display = 'none', 1000);
        }
    });


    svgIcon.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    

}

function rellenarTablaTRAGSA(filas) {
    const tbody = document.querySelector('.tableTRAGSA tbody');
    tbody.innerHTML = '';

    filas.forEach(fila => {
        const tr = document.createElement('tr');
        tr.classList.add('text-center');

        Object.keys(fila).forEach(key => {
            const td = document.createElement('td');
            
            let contenido = String(fila[key]);

            if (contenido.includes('assets/img/pdf-icon.svg')) {
                const a = document.createElement('a');
                let href = '';
                
                
                if (key === 'ANEXOESP') {
                    href = `assets/pdf/ANEXO ESPECIFICO TRAGSA  - Bloque ${fila.BLOQUE}.pdf`;
                } else if (key === 'DRE') {
                    href = `assets/xlsx/DRE - TRAGSA  - Bloque ${fila.BLOQUE}.xlsx`;
                } else if (key === 'DRADRF') {
                    href = 'assets/xlsx/DRF_DRA.xlsx';
                }

                if (href) {
                    a.setAttribute('href', href);
                    a.setAttribute('target', '_blank'); 
                    
                    const img = document.createElement('img');
                    img.src = contenido;
                    img.width = 20;
    
                    a.appendChild(img);
                    td.appendChild(a);
                }
            } else {
                td.textContent = contenido;
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function rellenarTablaTRAGSATEC(filas) {
    const tbody = document.querySelector('.tableTRAGSATEC tbody');
    tbody.innerHTML = '';

    filas.forEach(fila => {
        const tr = document.createElement('tr');
        tr.classList.add('text-center');

        Object.keys(fila).forEach(key => {
            const td = document.createElement('td');
            
            let contenido = String(fila[key]);

            if (contenido.includes('assets/img/pdf-icon.svg')) {
                const a = document.createElement('a');
                let href = '';
                
                
                if (key === 'ANEXOESP') {
                    href = 'https://adeccoagenciatragsa.iformalia.es/publico/portal/htmls/adeccotragsa/assets/pdf/ANEXO%20ESPECIFICO%20TRAGSA%20%20-%20Bloque%203.pdf';
                } else if (key === 'DRE') {
                    href = 'https://adeccoagenciatragsa.iformalia.es/publico/portal/htmls/adeccotragsa/assets/xlsx/DRE%20-%20TRAGSA%20%20-%20Bloque%203.xlsx';
                } else if (key === 'DRADRF') {
                    href = 'https://adeccoagenciatragsa.iformalia.es/publico/portal/htmls/adeccotragsa/assets/xlsx/DRF_DRA.xlsx';
                } else if (key === 'INSCRIPCION') {
                    href = 'https://adeccoagenciatragsa.iformalia.es/tragsa/inscripcionoferta?idg=OiXomeMW4JI=&return=no&returnurl=&obl_a2=S';
                }

                if (href) {
                    a.setAttribute('href', href);
                    a.setAttribute('target', '_blank'); 
                    
                    const img = document.createElement('img');
                    img.src = contenido;
                    img.width = 20;
    
                    a.appendChild(img);
                    td.appendChild(a);
                }
            } else {
                td.textContent = contenido;
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}


function initSmoothScrollAndAnimation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            
            if (!targetElement) return;

            const headerOffset = document.querySelector('.header').offsetHeight;
            const additionalOffset = targetID === '#section-0' ? 80 : 150;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - additionalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            targetElement.classList.add('animate__animated', 'animate__slideInUp');
            setTimeout(() => {
                targetElement.classList.remove('animate__animated', 'animate__slideInUp');
            }, 1000); 
        });
    });
}


function scrollToTopOnLogoClick() {
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function setupModalForCandidatoArea() {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Área de Persona Candidata');
    
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalElement = document.getElementById('modalCandidato');
            if (modalElement) {
                var modal = new bootstrap.Modal(modalElement);
                modal.show();
            }
        });
    }
}

function setupForgotPasswordModal() {
    const forgotPasswordLink = document.getElementById('forgotpassword');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            const modalElement = document.getElementById('modalForgotPassword');
            if (modalElement) {
               
                var modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            }
        });
    }
}

function inicializarFiltrado(filasOriginales) {
    const botonFiltrar = document.querySelector('.btnFiltrar');
    botonFiltrar.addEventListener('click', () => {
        const filasFiltradas = filasOriginales.filter(fila => cumpleConFiltros(fila));
        rellenarTablaTRAGSA(filasFiltradas);
    });
}

function cumpleConFiltros(fila) {
    const inputPuesto = document.getElementById('exampleFormControlInput1').value.toLowerCase();
    const inputBloque = document.getElementById('exampleFormControlInput2').value.toLowerCase();
    const inputReferencia = document.getElementById('exampleFormControlInput3').value.toLowerCase();
    const inputCategoria = document.getElementById('exampleFormControlInput4').value.toLowerCase();
    const inputUt = document.getElementById('exampleFormControlInput5').value.toLowerCase();
    const inputGerencia = document.getElementById('exampleFormControlInput6').value.toLowerCase();
    const inputUbicacion = document.getElementById('exampleFormControlInput7').value.toLowerCase();

   
    return fila.PUESTO.toLowerCase().includes(inputPuesto) &&
           fila.BLOQUE.toString().toLowerCase().includes(inputBloque) &&
           fila.REFERENCIA.toLowerCase().includes(inputReferencia) &&
           fila.CATEGORIA.toLowerCase().includes(inputCategoria) &&
           fila.UT.toLowerCase().includes(inputUt) &&
           fila.GERENCIA.toLowerCase().includes(inputGerencia) &&
           fila.UBICACION.toLowerCase().includes(inputUbicacion);
}

function inicializarFiltradoTRAGSATEC(filasOriginales) {
    const botonFiltrarTRAGSATEC = document.querySelector('.btnFiltrarTRAGSATEC');
    botonFiltrarTRAGSATEC.addEventListener('click', () => {
        const filasFiltradas = filasOriginales.filter(fila => cumpleConFiltrosTRAGSATEC(fila));
        rellenarTablaTRAGSATEC(filasFiltradas);
    });
}

function cumpleConFiltrosTRAGSATEC(fila) {
    const inputPuesto = document.getElementById('exampleFormControlInput8').value.toLowerCase();
    const inputBloque = document.getElementById('exampleFormControlInput9').value.toLowerCase();
    const inputReferencia = document.getElementById('exampleFormControlInput10').value.toLowerCase();
    const inputCategoria = document.getElementById('exampleFormControlInput11').value.toLowerCase();
    const inputUT = document.getElementById('exampleFormControlInput12').value.toLowerCase();
    const inputGerencia = document.getElementById('exampleFormControlInput13').value.toLowerCase();
    const inputUbicacion = document.getElementById('exampleFormControlInput14').value.toLowerCase();
    
    return fila.PUESTO.toLowerCase().includes(inputPuesto) &&
           fila.BLOQUE.toString().toLowerCase().includes(inputBloque) &&
           fila.REFERENCIA.toLowerCase().includes(inputReferencia) &&
           fila.CATEGORIA.toLowerCase().includes(inputCategoria) &&
           (fila.SUBUT ? fila.SUBUT.toLowerCase().includes(inputUT) : true) && 
           fila.GERENCIA.toLowerCase().includes(inputGerencia) &&
           fila.UBICACION.toLowerCase().includes(inputUbicacion); 
}






document.addEventListener('DOMContentLoaded', carga);
