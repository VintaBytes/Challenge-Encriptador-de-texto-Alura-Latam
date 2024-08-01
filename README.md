# Practicando lógica de programación: Challenge Encriptador de texto

## Descripción

Este proyecto fue creado como parte del curso de Alura Latam, titulado **"Practicando lógica de programación: Challenge Encriptador de texto"**. La aplicación permite encriptar y desencriptar mensajes usando un conjunto específico de reglas de transformación de texto.

## Características

- **Encriptación de texto**: Convierte las letras `e`, `i`, `a`, `o`, `u` en palabras específicas.
- **Desencriptación de texto**: Convierte las palabras encriptadas de vuelta a las letras originales.
- **Interfaz amigable**: Diseñada para ser intuitiva y fácil de usar.
- **Compatibilidad multiplataforma**: Funciona bien en monitores de PC, tablets y teléfonos móviles.

## Encriptación

Las "llaves" de encriptación utilizadas son las siguientes:

- La letra `"e"` se convierte en `"enter"`
- La letra `"i"` se convierte en `"imes"`
- La letra `"a"` se convierte en `"ai"`
- La letra `"o"` se convierte en `"ober"`
- La letra `"u"` se convierte en `"ufat"`

Por ejemplo:

```
"gato" => "gaitober"
"gaitober" => "gato"
```

## Requisitos

- El texto debe estar en minúsculas.
- No se deben utilizar letras con acentos ni caracteres especiales.

## Uso

1. **Encriptar un mensaje**:
   - Ingresa el texto en el campo de entrada.
   - Haz clic en el botón "Encriptar".
   - El texto encriptado aparecerá en la sección de salida.

2. **Desencriptar un mensaje**:
   - Ingresa el texto encriptado en el campo de entrada.
   - Haz clic en el botón "Desencriptar".
   - El texto desencriptado aparecerá en la sección de salida.

3. **Copiar el mensaje**:
   - Haz clic en el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.


## Tecnologías Utilizadas

<span><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></span>

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/encriptador-de-texto.git
```

2. Abre el archivo `index.html` en tu navegador preferido.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama con tu contribución (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y commitea (`git commit -m 'Agrega nueva característica'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request en este repositorio.

