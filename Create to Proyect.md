# Creación del proyecto.

- Instalación de dependencias - package.json
    
    → npm init -y  ⇒ Instala las dependencias de archivos json.
    
    → mkdir proyects   ⇒  Genera carpeta.
    
    Accedemos a ella y procedemos.
    

- Para crear un proyecto:
    
    → npm create vite@latest
    
    →  Luego de ello se colocaría el nombre del proyecto y se seleccionaría consiguiente.
    
    → La dependencia de React  ⇒  luego Js o Ts.
    
    → En caso de ser necesario crear el punto de entrada manualmente
    
    - Se instala un plugin para React :
        
        ```jsx
        npm install → npm install @vitejs/plugin-react -E
        npm install react react-dom -E
        ```
        
    - Se crearía en la raíz el archivo vite.config.js y se implementa lo siguiente:
        
        ```jsx
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        
        export default defineConfig({
          plugins: [react()]
        })
        ```
        
    
    → Para definir el punto de entrada, se modifica el archivo js que se llama en el index.  ⇒  main.js
    
    ```jsx
    import { createRoot } from 'react-dom/client'
    
    const root = createRoot(document.getElementById('app'))
    root.render(<h1>Hello</h1>)
    
    //--------------------------------------------
    
    const Button = ({ text }) => {
    	return(
    		<button>{text}</button>
    	)
    }
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.Fragment>
        <Button text = 'Button 1' />
        <Button text = 'Button 2'/>
      </React.Fragment>
    
    )
    ```
    
    → Estructura o definición de variables ⇒
    
    - PascalCase
    - camelCase
    - snake_case
    - kebab-case
    
    → Para que se renderice correctamente el componente, se debe cambiar el nombre del archivo padre del componente ⇒ main.js
    
    → main.js ⇒ main.jsx.
    
    - De la misma manera se modifica donde se estaba llamando el main.js
    
- Instalar dependencias par eslint ⇒
    
    ```jsx
    npm install standard -D
    
    // Configurar en el package.json
    "eslintConfig": {
    	"extend": "./node_modules/standard/eslintrc.json"
    }
    
    ```
    
- Exportaciones nombradas ⇒
    - export function name( ) { }  → Se usa cuando hay mas de una función a exportar en un mismo archivo.
- Exportaciones por defecto ⇒
    - export default name; → Se usa cuando solo se exportara una función por archivo.
