// DATOS DEL MENÚ
//Reemplacé completamente la función displayMenuItems//

//Añadí la función setupFilterButtons para manejar los clics en los botones//

//Mejoré los datos del menú con imágenes de ejemplo y descripciones//


const menuItems = [
    { 
        id: 1, 
        name: "Ceviche", 
        category: "entradas", 
        price: "$12", 
        image: "img/postre1.jpg",
        description: "Pescado fresco marinado en limón con cebolla, cilantro y ají limo."
    },
    { 
        id: 2, 
        name: "Lomo Saltado", 
        category: "plato-fuerte", 
        price: "$18", 
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Salteado de lomo de res con cebolla, tomate y papas fritas."
    },
    { 
        id: 3, 
        name: "Tiramisú", 
        category: "postres", 
        price: "$8", 
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Postre italiano con capas de bizcocho, café y crema de mascarpone."
    },
    { 
        id: 4, 
        name: "Guacamole", 
        category: "entradas", 
        price: "$10", 
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Aguacate triturado con tomate, cebolla, cilantro y limón."
    },
    { 
        id: 5, 
        name: "Pollo Asado", 
        category: "plato-fuerte", 
        price: "$16", 
        image: "https://images.unsplash.com/photo-1632158929962-a929c9e87570?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Pollo marinado con hierbas y especias, asado a la perfección."
    },
    { 
        id: 6, 
        name: "Jugo de Naranja", 
        category: "bebidas", 
        price: "$5", 
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Jugo natural de naranja recién exprimido."
    },
    { 
        id: 7, 
        name: "Flan", 
        category: "postres", 
        price: "$7", 
        image: "https://images.unsplash.com/photo-1714076264003-2a430d430cdb?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Postre de huevo con caramelo, suave y cremoso."
    },
    { 
        id: 8, 
        name: "Margarita", 
        category: "bebidas", 
        price: "$9", 
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Coctel de tequila, triple sec y jugo de limón con borde de sal."
    }
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});