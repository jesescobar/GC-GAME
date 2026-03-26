// ============================================
// ENCUENTRA EL BUG - Question Database
// Girls Code Paraguay
// ============================================

const QUESTIONS = {
    medium: [
        {
            id: 'm1',
            story: '🛸 Mision 1: El sistema de registro de la nave necesita sumar edades de la tripulacion...',
            filename: 'registro_nave.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Sumar las edades de dos tripulantes</span>
<span class="line-number"> 2</span> edad1 = <span class="builtin">input</span>(<span class="string">"Edad del tripulante 1: "</span>)
<span class="line-number"> 3</span> edad2 = <span class="builtin">input</span>(<span class="string">"Edad del tripulante 2: "</span>)
<span class="line-number"> 4</span> total = edad1 + edad2
<span class="line-number"> 5</span> <span class="builtin">print</span>(<span class="string">"Total:"</span>, total)`,
            question: '🔍 El programa deberia sumar edades, pero concatena strings. ¿Donde esta el bug?',
            options: [
                'input() devuelve string, hay que convertir con int()',
                'La variable total esta mal escrita',
                'Falta un punto y coma al final',
                'print() no puede recibir dos argumentos'
            ],
            correct: 0,
            explanation: 'input() siempre devuelve un string en Python 3. Para sumar numeros, necesitas convertir con int(input("...")) o float().'
        },
        {
            id: 'm2',
            story: '🔧 Mision 2: El modulo de combustible tiene un loop que no se detiene...',
            filename: 'combustible.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Contar combustible restante</span>
<span class="line-number"> 2</span> combustible = <span class="number">100</span>
<span class="line-number"> 3</span> <span class="keyword">while</span> combustible > <span class="number">0</span>:
<span class="line-number"> 4</span>     <span class="builtin">print</span>(<span class="string">"Combustible:"</span>, combustible)
<span class="line-number"> 5</span> <span class="builtin">print</span>(<span class="string">"Sin combustible!"</span>)`,
            question: '🔍 Este loop nunca termina. ¿Por que?',
            options: [
                'Deberia usar for en vez de while',
                'Falta decrementar combustible dentro del loop',
                'La condicion deberia ser combustible >= 0',
                'print() no funciona dentro de while'
            ],
            correct: 1,
            explanation: 'El loop es infinito porque nunca se modifica la variable "combustible" dentro del while. Falta algo como: combustible -= 10'
        },
        {
            id: 'm3',
            story: '📡 Mision 3: El comunicador espacial debe verificar codigos de acceso...',
            filename: 'comunicador.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Verificar codigo de acceso</span>
<span class="line-number"> 2</span> codigo = <span class="number">1234</span>
<span class="line-number"> 3</span> intento = <span class="builtin">input</span>(<span class="string">"Ingresa el codigo: "</span>)
<span class="line-number"> 4</span> <span class="keyword">if</span> intento <span class="operator">==</span> codigo:
<span class="line-number"> 5</span>     <span class="builtin">print</span>(<span class="string">"Acceso concedido"</span>)
<span class="line-number"> 6</span> <span class="keyword">else</span>:
<span class="line-number"> 7</span>     <span class="builtin">print</span>(<span class="string">"Acceso denegado"</span>)`,
            question: '🔍 Aunque ingreses "1234", siempre dice "Acceso denegado". ¿Por que?',
            options: [
                'El if deberia usar = en vez de ==',
                'Comparas string con int: "1234" != 1234',
                'Falta un elif entre if y else',
                'La variable codigo no esta definida'
            ],
            correct: 1,
            explanation: 'input() devuelve un string ("1234"), pero codigo es un int (1234). En Python, "1234" == 1234 es False. Hay que convertir tipos.'
        },
        {
            id: 'm4',
            story: '🌡️ Mision 4: El sensor termico necesita clasificar temperaturas...',
            filename: 'sensor_termico.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Clasificar temperatura</span>
<span class="line-number"> 2</span> temp = <span class="number">25</span>
<span class="line-number"> 3</span> <span class="keyword">if</span> temp > <span class="number">30</span>:
<span class="line-number"> 4</span>     estado = <span class="string">"Caliente"</span>
<span class="line-number"> 5</span> <span class="keyword">if</span> temp > <span class="number">20</span>:
<span class="line-number"> 6</span>     estado = <span class="string">"Templado"</span>
<span class="line-number"> 7</span> <span class="keyword">if</span> temp > <span class="number">10</span>:
<span class="line-number"> 8</span>     estado = <span class="string">"Frio"</span>
<span class="line-number"> 9</span> <span class="builtin">print</span>(estado)`,
            question: '🔍 Con temp=25 deberia decir "Templado", pero dice "Frio". ¿Cual es el error?',
            options: [
                'Los numeros estan mal ordenados',
                'Deberia usar elif en vez de if para cada condicion',
                'Falta un else al final',
                'La variable estado no esta inicializada'
            ],
            correct: 1,
            explanation: 'Al usar if separados, TODAS las condiciones se evaluan independientemente. Con temp=25, pasa por "Templado" y luego por "Frio" (25 > 10). Usar elif hace que sea mutuamente excluyente.'
        },
        {
            id: 'm5',
            story: '📊 Mision 5: El sistema de inventario necesita contar suministros...',
            filename: 'inventario.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Contar items del inventario</span>
<span class="line-number"> 2</span> items = [<span class="string">"oxigeno"</span>, <span class="string">"comida"</span>, <span class="string">"agua"</span>, <span class="string">"medkit"</span>]
<span class="line-number"> 3</span> <span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">1</span>, <span class="builtin">len</span>(items)):
<span class="line-number"> 4</span>     <span class="builtin">print</span>(<span class="string">f"Item <span class="number">{i}</span>: <span class="number">{items[i]}</span>"</span>)`,
            question: '🔍 El primer item "oxigeno" nunca se muestra. ¿Por que?',
            options: [
                'len(items) esta mal calculado',
                'range() empieza en 1, pero las listas empiezan en indice 0',
                'Falta agregar items a la lista',
                'El f-string tiene un error de sintaxis'
            ],
            correct: 1,
            explanation: 'range(1, len(items)) empieza en 1, pero las listas en Python empiezan en indice 0. items[0] es "oxigeno" y nunca se accede. Deberia ser range(0, len(items)) o simplemente range(len(items)).'
        },
        {
            id: 'm6',
            story: '🔐 Mision 6: El generador de passwords debe repetir un caracter...',
            filename: 'password_gen.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Generar password con asteriscos</span>
<span class="line-number"> 2</span> largo = <span class="number">5</span>
<span class="line-number"> 3</span> password = <span class="string">""</span>
<span class="line-number"> 4</span> <span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(largo):
<span class="line-number"> 5</span>     password = <span class="string">"*"</span>
<span class="line-number"> 6</span> <span class="builtin">print</span>(password)  <span class="comment"># Deberia mostrar: *****</span>`,
            question: '🔍 Solo muestra un "*" en vez de "*****". ¿Donde esta el bug?',
            options: [
                'range(largo) no genera 5 iteraciones',
                'En linea 5 deberia ser password += "*" en vez de password = "*"',
                'La variable password no puede contener asteriscos',
                'El for loop no ejecuta la linea 5'
            ],
            correct: 1,
            explanation: 'En la linea 5, password = "*" reemplaza el valor en cada iteracion en vez de acumularlo. Deberia ser password += "*" para concatenar.'
        },
        {
            id: 'm7',
            story: '🗂️ Mision 7: El archivo de logs necesita guardar el nombre del capitan...',
            filename: 'logs_nave.py',
            code: `<span class="line-number"> 1</span> <span class="comment"># Guardar nombre en mayusculas</span>
<span class="line-number"> 2</span> nombre = <span class="string">"ada lovelace"</span>
<span class="line-number"> 3</span> nombre.<span class="function">upper</span>()
<span class="line-number"> 4</span> <span class="builtin">print</span>(nombre)  <span class="comment"># Deberia mostrar: ADA LOVELACE</span>`,
            question: '🔍 Muestra "ada lovelace" en minusculas. ¿Cual es el error?',
            options: [
                'upper() no existe para strings',
                'upper() retorna un nuevo string, pero no se guardo el resultado',
                'Hay que usar UPPER() en mayusculas',
                'Falta un import para usar upper()'
            ],
            correct: 1,
            explanation: 'Los strings en Python son inmutables. upper() devuelve un NUEVO string, no modifica el original. Deberia ser: nombre = nombre.upper()'
        }
    ],

    advanced: [
        {
            id: 'a1',
            story: '🧮 Mision 1: El calculador de promedios de la academia espacial falla con listas vacias...',
            filename: 'promedio_academia.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">calcular_promedio</span>(notas):
<span class="line-number"> 2</span>     total = <span class="builtin">sum</span>(notas)
<span class="line-number"> 3</span>     promedio = total / <span class="builtin">len</span>(notas)
<span class="line-number"> 4</span>     <span class="keyword">return</span> promedio
<span class="line-number"> 5</span>
<span class="line-number"> 6</span> <span class="builtin">print</span>(<span class="function">calcular_promedio</span>([]))  <span class="comment"># Crash!</span>`,
            question: '🔍 El programa crashea con una lista vacia. ¿Cual es el bug?',
            options: [
                'sum() no funciona con listas vacias',
                'Division por cero: len([]) es 0 y no se valida',
                'return no puede devolver variables locales',
                'Falta definir el tipo de parametro notas'
            ],
            correct: 1,
            explanation: 'Cuando la lista esta vacia, len(notas) es 0. Dividir por 0 causa ZeroDivisionError. Hay que verificar que la lista no este vacia antes de dividir.'
        },
        {
            id: 'a2',
            story: '🔬 Mision 2: El analizador de datos tiene una funcion que no devuelve resultados...',
            filename: 'analizador.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">filtrar_positivos</span>(numeros):
<span class="line-number"> 2</span>     resultado = []
<span class="line-number"> 3</span>     <span class="keyword">for</span> n <span class="keyword">in</span> numeros:
<span class="line-number"> 4</span>         <span class="keyword">if</span> n > <span class="number">0</span>:
<span class="line-number"> 5</span>             resultado.<span class="function">append</span>(n)
<span class="line-number"> 6</span>             <span class="keyword">return</span> resultado
<span class="line-number"> 7</span>
<span class="line-number"> 8</span> <span class="builtin">print</span>(<span class="function">filtrar_positivos</span>([<span class="number">-1</span>, <span class="number">3</span>, <span class="number">-2</span>, <span class="number">7</span>]))
<span class="line-number"> 9</span> <span class="comment"># Resultado: [3]  (deberia ser [3, 7])</span>`,
            question: '🔍 Solo devuelve [3] en vez de [3, 7]. ¿Donde esta el error?',
            options: [
                'append() no funciona correctamente',
                'El return esta dentro del for loop (indentacion), sale en el primer positivo',
                'La condicion n > 0 esta mal',
                'La lista resultado no se inicializo bien'
            ],
            correct: 1,
            explanation: 'El return esta DENTRO del if (y por lo tanto del for), asi que la funcion retorna en cuanto encuentra el PRIMER positivo. El return deberia estar afuera del for, con menos indentacion.'
        },
        {
            id: 'a3',
            story: '📋 Mision 3: El sistema de tripulacion agrega pasajeros con datos compartidos misteriosamente...',
            filename: 'tripulacion.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">agregar_tripulante</span>(nombre, lista=[]):
<span class="line-number"> 2</span>     lista.<span class="function">append</span>(nombre)
<span class="line-number"> 3</span>     <span class="keyword">return</span> lista
<span class="line-number"> 4</span>
<span class="line-number"> 5</span> equipo_a = <span class="function">agregar_tripulante</span>(<span class="string">"Ana"</span>)
<span class="line-number"> 6</span> equipo_b = <span class="function">agregar_tripulante</span>(<span class="string">"Lucia"</span>)
<span class="line-number"> 7</span> <span class="builtin">print</span>(equipo_b)
<span class="line-number"> 8</span> <span class="comment"># Resultado: ["Ana", "Lucia"]  (deberia ser solo ["Lucia"])</span>`,
            question: '🔍 equipo_b contiene ["Ana", "Lucia"] en vez de solo ["Lucia"]. ¿Por que?',
            options: [
                'append() agrega a todas las listas a la vez',
                'Usar una lista mutable como valor default se comparte entre llamadas',
                'La variable nombre no se pasa correctamente',
                'return lista crea una copia automatica'
            ],
            correct: 1,
            explanation: '¡Bug clasico de Python! Los argumentos mutables por defecto (como lista=[]) se crean UNA sola vez y se comparten entre todas las llamadas. La solucion es usar None como default y crear la lista dentro.'
        },
        {
            id: 'a4',
            story: '🎯 Mision 4: El radar debe detectar si un numero es primo...',
            filename: 'radar_primo.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">es_primo</span>(n):
<span class="line-number"> 2</span>     <span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">2</span>, n):
<span class="line-number"> 3</span>         <span class="keyword">if</span> n % i <span class="operator">==</span> <span class="number">0</span>:
<span class="line-number"> 4</span>             <span class="keyword">return</span> <span class="keyword">False</span>
<span class="line-number"> 5</span>         <span class="keyword">else</span>:
<span class="line-number"> 6</span>             <span class="keyword">return</span> <span class="keyword">True</span>
<span class="line-number"> 7</span>
<span class="line-number"> 8</span> <span class="builtin">print</span>(<span class="function">es_primo</span>(<span class="number">9</span>))  <span class="comment"># Dice True, pero 9 = 3x3 NO es primo</span>`,
            question: '🔍 es_primo(9) devuelve True, pero 9 no es primo. ¿Donde esta el bug?',
            options: [
                'El operador % no funciona bien con 9',
                'El else retorna True en la primera iteracion sin verificar todos los divisores',
                'range(2, n) no incluye suficientes numeros',
                'La funcion necesita un parametro adicional'
            ],
            correct: 1,
            explanation: 'El else dentro del for hace que retorne True en la primera iteracion si n % 2 != 0. Con 9: 9%2=1 (no es 0), asi que retorna True sin probar con 3. El return True deberia estar AFUERA del for.'
        },
        {
            id: 'a5',
            story: '🏗️ Mision 5: El constructor de reportes genera datos duplicados...',
            filename: 'reportes.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">crear_reporte</span>(datos):
<span class="line-number"> 2</span>     reporte = {}
<span class="line-number"> 3</span>     <span class="keyword">for</span> item <span class="keyword">in</span> datos:
<span class="line-number"> 4</span>         <span class="keyword">if</span> item <span class="keyword">in</span> reporte:
<span class="line-number"> 5</span>             reporte[item] = <span class="number">1</span>
<span class="line-number"> 6</span>         <span class="keyword">else</span>:
<span class="line-number"> 7</span>             reporte[item] = <span class="number">1</span>
<span class="line-number"> 8</span>     <span class="keyword">return</span> reporte
<span class="line-number"> 9</span>
<span class="line-number">10</span> datos = [<span class="string">"a"</span>, <span class="string">"b"</span>, <span class="string">"a"</span>, <span class="string">"c"</span>, <span class="string">"b"</span>, <span class="string">"a"</span>]
<span class="line-number">11</span> <span class="builtin">print</span>(<span class="function">crear_reporte</span>(datos))
<span class="line-number">12</span> <span class="comment"># Resultado: {"a": 1, "b": 1, "c": 1}</span>
<span class="line-number">13</span> <span class="comment"># Esperado: {"a": 3, "b": 2, "c": 1}</span>`,
            question: '🔍 Todos los conteos dan 1 en vez de acumularse. ¿Cual es el error?',
            options: [
                'Los diccionarios no pueden tener numeros como valores',
                'En linea 5, deberia ser reporte[item] += 1 para incrementar',
                'El for loop no recorre todos los items',
                'La condicion "item in reporte" no funciona con strings'
            ],
            correct: 1,
            explanation: 'En la linea 5, cuando el item YA existe, deberia INCREMENTAR el contador (reporte[item] += 1), pero lo reinicia a 1 cada vez. El if y el else hacen lo mismo!'
        },
        {
            id: 'a6',
            story: '🌀 Mision 6: El sistema de navegacion invierte coordenadas pero falla...',
            filename: 'navegacion.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">invertir_lista</span>(lista):
<span class="line-number"> 2</span>     invertida = lista
<span class="line-number"> 3</span>     invertida.<span class="function">reverse</span>()
<span class="line-number"> 4</span>     <span class="keyword">return</span> invertida
<span class="line-number"> 5</span>
<span class="line-number"> 6</span> coords = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>]
<span class="line-number"> 7</span> nuevas = <span class="function">invertir_lista</span>(coords)
<span class="line-number"> 8</span> <span class="builtin">print</span>(<span class="string">"Original:"</span>, coords)
<span class="line-number"> 9</span> <span class="builtin">print</span>(<span class="string">"Invertida:"</span>, nuevas)
<span class="line-number">10</span> <span class="comment"># Ambas muestran [4, 3, 2, 1]!</span>`,
            question: '🔍 La lista original tambien se invierte. ¿Por que?',
            options: [
                'reverse() tiene un bug en Python',
                'invertida = lista no copia, crea una referencia al mismo objeto',
                'print() modifica las listas antes de mostrarlas',
                'La funcion no deberia usar return'
            ],
            correct: 1,
            explanation: 'invertida = lista NO crea una copia, ambas variables apuntan al MISMO objeto en memoria. Al hacer reverse(), se modifica la lista original. Solucion: invertida = lista.copy() o lista[:]'
        },
        {
            id: 'a7',
            story: '🔢 Mision 7: El modulo matematico calcula factorial pero nunca termina...',
            filename: 'factorial.py',
            code: `<span class="line-number"> 1</span> <span class="keyword">def</span> <span class="function">factorial</span>(n):
<span class="line-number"> 2</span>     <span class="keyword">if</span> n <span class="operator">==</span> <span class="number">1</span>:
<span class="line-number"> 3</span>         <span class="keyword">return</span> <span class="number">1</span>
<span class="line-number"> 4</span>     <span class="keyword">return</span> n <span class="operator">*</span> <span class="function">factorial</span>(n <span class="operator">-</span> <span class="number">1</span>)
<span class="line-number"> 5</span>
<span class="line-number"> 6</span> <span class="builtin">print</span>(<span class="function">factorial</span>(<span class="number">5</span>))   <span class="comment"># Funciona: 120</span>
<span class="line-number"> 7</span> <span class="builtin">print</span>(<span class="function">factorial</span>(<span class="number">0</span>))   <span class="comment"># Crash! RecursionError</span>`,
            question: '🔍 factorial(0) causa un RecursionError. ¿Donde esta el problema?',
            options: [
                'La multiplicacion n * factorial(n-1) esta mal',
                'El caso base solo maneja n==1, pero factorial(0)=1 tambien deberia ser un caso base',
                'Python no soporta recursion',
                'Falta importar el modulo math'
            ],
            correct: 1,
            explanation: 'El caso base solo captura n==1. Cuando n=0, la funcion llama a factorial(-1), luego factorial(-2)... infinitamente. El caso base deberia ser: if n <= 1: return 1'
        }
    ]
};

// Inspirational quotes from women in tech
const WOMEN_QUOTES = [
    { quote: "El lenguaje analitico sera el que una la ciencia con la maquina.", author: "Ada Lovelace" },
    { quote: "Si no es correcto, no lo hagas. Si no es verdad, no lo digas.", author: "Grace Hopper" },
    { quote: "Siempre fui mas interesada en lo que podia llegar a ser que en lo que era.", author: "Mae Jemison" },
    { quote: "La ciencia y la vida no pueden ni deben estar separadas.", author: "Rosalind Franklin" },
    { quote: "No dejes que nadie te robe tu imaginacion, creatividad o curiosidad.", author: "Mae Jemison" },
    { quote: "La perfeccion no se logra cuando no hay nada que agregar, sino cuando no hay nada que quitar.", author: "Hedy Lamarr" },
    { quote: "La programacion es el superpoder del siglo XXI.", author: "Girls Code Paraguay" },
    { quote: "El futuro pertenece a quienes creen en la belleza de sus suenos.", author: "Katherine Johnson" },
    { quote: "Un barco en el puerto esta seguro, pero no es para eso que se construyen los barcos.", author: "Grace Hopper" },
    { quote: "Nunca te detengas. Nunca te conformes. Hasta que lo bueno sea mejor y lo mejor excelente.", author: "Girls Code PY" }
];
