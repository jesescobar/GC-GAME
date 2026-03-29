// ============================================
// ENCUENTRA EL BUG - Question Database
// Girls Code Paraguay
// ============================================

const QUESTIONS = {
  easy: [
    {
      code: `a = input("Ingrese un número: ")
b = input("Ingrese otro número: ")

resultado = a + b
print("Resultado:", resultado)`,
      question: "¿Cuál es el problema?",
      options: [
        "Nada está mal",
        "Se están sumando strings",
        "Falta un print",
        "Error de sintaxis",
      ],
      correct: 1,
      explanation: "input devuelve strings, no números",
    },

    {
      code: `contador = 1

while contador < 5:
    print(contador)`,
      question: "¿Qué ocurre?",
      options: [
        "Nada",
        "Bucle infinito",
        "Error de sintaxis",
        "Falta un break",
      ],
      correct: 1,
      explanation: "contador nunca cambia → loop infinito",
    },

    {
      code: `lista = ["pan", "leche", "huevo"]

for i in range(len(lista)):
    print(lista)`,
      question: "¿Cuál es el error?",
      options: [
        "Nada",
        "Se imprime toda la lista siempre",
        "Error de sintaxis",
        "Error de tipo",
      ],
      correct: 1,
      explanation: "Debería ser lista[i]",
    },

    {
      code: `numeros = [1, 2, 3, 4, 5]

contador = 0
for n in numeros:
    if n > 3:
        contador = 1

print(contador)`,
      question: "¿Qué está mal?",
      options: [
        "Nada",
        "No está contando correctamente",
        "Error de sintaxis",
        "Error de tipo",
      ],
      correct: 1,
      explanation: "Siempre queda en 1 en vez de contar",
    },

    {
      code: `def cuadrado(n):
    n * n

resultado = cuadrado(4)
print(resultado)`,
      question: "¿Cuál es el error?",
      options: ["Falta return", "Error de tipo", "Nada", "Error de sintaxis"],
      correct: 0,
      explanation: "La función no retorna nada",
    },

    {
      code: `nombre = input("Tu nombre: ")

print("Hola " + Nombre)`,
      question: "¿Cuál es el problema?",
      options: [
        "Error de tipo",
        "Variable mal escrita",
        "Nada",
        "Error de sintaxis",
      ],
      correct: 1,
      explanation: "Python distingue mayúsculas/minúsculas",
    },

    {
      code: `edad = input("Edad: ")
if edad > 18:
    print("Mayor")`,
      question: "¿Qué ocurre?",
      options: [
        "Nada",
        "Comparación incorrecta (string vs int)",
        "Error de sintaxis",
        "Error de print",
      ],
      correct: 1,
      explanation: "input devuelve string",
    },

    {
      code: `for i in range(5):
print(i)`,
      question: "¿Cuál es el error?",
      options: [
        "Falta indentación",
        "Error de tipo",
        "Nada",
        "Error de sintaxis",
      ],
      correct: 0,
      explanation: "El print debe estar indentado",
    },

    {
      code: `x = 5
if x > 3:
    print("ok")
  print("fin")`,
      question: "¿Qué está mal?",
      options: [
        "Indentación incorrecta",
        "Nada",
        "Error de tipo",
        "Error de variable",
      ],
      correct: 0,
      explanation: "Indentación inconsistente",
    },

    {
      code: `lista = [1,2,3]
print(lista[3])`,
      question: "¿Cuál es el problema?",
      options: [
        "Índice fuera de rango",
        "Nada",
        "Error de tipo",
        "Error de sintaxis",
      ],
      correct: 0,
      explanation: "Los índices van de 0 a 2",
    },

    {
      code: `def saludar():
    print("Hola")

print(saludar())`,
      question: "¿Qué ocurre?",
      options: ["Nada", "Imprime None", "Error de sintaxis", "Error de tipo"],
      correct: 1,
      explanation: "La función no retorna nada",
    },

    {
      code: `x = 10
if x > 5:
    print("Mayor")
else:
print("Menor")`,
      question: "¿Cuál es el error?",
      options: ["Indentación", "Nada", "Error de tipo", "Error de variable"],
      correct: 0,
      explanation: "El print debe estar indentado",
    },

    {
      code: `for i in range(3):
    print(i)
    i = i + 1`,
      question: "¿Qué pasa?",
      options: [
        "Nada",
        "El incremento no afecta el for",
        "Error de sintaxis",
        "Error de tipo",
      ],
      correct: 1,
      explanation: "range controla el loop, no i manual",
    },

    {
      code: `x = "10"
y = 5
print(x + y)`,
      question: "¿Cuál es el problema?",
      options: [
        "Error de tipo",
        "Nada",
        "Error de sintaxis",
        "Error de variable",
      ],
      correct: 0,
      explanation: "No se puede sumar string con int",
    },

    {
      code: `def suma(a, b):
    return a + b

print(suma(5))`,
      question: "¿Qué error hay?",
      options: [
        "Falta argumento",
        "Nada",
        "Error de sintaxis",
        "Error de tipo",
      ],
      correct: 0,
      explanation: "Falta el segundo parámetro",
    },
  ],

  medium: [
    {
      code: `x = "5"
y = 5
resultado = x + y`,
      question: "¿Qué problema tiene este código?",
      options: [
        "La operación no es válida con esos valores",
        "El resultado no se guarda correctamente",
        "La lógica del programa es incorrecta",
        "El código funciona pero devuelve algo inesperado",
      ],
      correct: 0,
      explanation: "No se puede sumar string con int",
    },

    {
      code: `def suma(a, b):
    print(a + b)

resultado = suma(2,3)`,
      question: "¿Cuál es el problema principal?",
      options: [
        "La función no devuelve ningún valor útil",
        "El cálculo interno es incorrecto",
        "El programa no ejecuta la función",
        "Los parámetros están mal definidos",
      ],
      correct: 0,
      explanation: "La función usa print en vez de return",
    },

    {
      code: `lista = [1,2,3]
for i in lista:
    i = i * 2`,
      question: "¿Qué falla en este código?",
      options: [
        "La lista no se modifica realmente",
        "El bucle no recorre correctamente los elementos",
        "El cálculo no se aplica correctamente",
        "El programa pierde los valores originales",
      ],
      correct: 0,
      explanation: "i no modifica la lista original",
    },

    {
      code: `x = 0
while x < 5:
    print(x)`,
      question: "¿Cuál es el problema más importante?",
      options: [
        "La condición nunca cambia",
        "El bucle no se ejecuta correctamente",
        "El valor de x se reinicia",
        "El flujo del programa es incorrecto",
      ],
      correct: 0,
      explanation: "x nunca cambia → loop infinito",
    },

    {
      code: `def agregar(lista, item):
    lista = lista + [item]

l = [1,2]
agregar(l, 3)`,
      question: "¿Qué problema tiene este código?",
      options: [
        "La lista original no se modifica",
        "El item no se agrega correctamente",
        "La función tiene parámetros incorrectos",
        "El programa no ejecuta la función",
      ],
      correct: 0,
      explanation: "Se crea una nueva lista, no se modifica la original",
    },

    {
      code: `if x > 10:
    print("Mayor")
elif x > 5:
    print("Mayor")`,
      question: "¿Qué error lógico tiene este código?",
      options: [
        "El mensaje no coincide con la condición",
        "La estructura condicional es inválida",
        "El flujo del programa se corta",
        "Las condiciones no se evalúan correctamente",
      ],
      correct: 0,
      explanation: "El segundo print debería ser distinto",
    },

    {
      code: `def contar():
    total = 0
    for i in range(5):
        total += i
    return

print(contar())`,
      question: "¿Cuál es el problema?",
      options: [
        "La función no devuelve el resultado calculado",
        "El bucle no suma correctamente",
        "El print está mal ubicado",
        "El valor de total se pierde en cada iteración",
      ],
      correct: 0,
      explanation: "Falta return total",
    },

    {
      code: `lista = [1,2,3]
print(lista[3])`,
      question: "¿Qué problema hay?",
      options: [
        "Se accede a una posición inexistente",
        "El índice no está definido correctamente",
        "La lista no contiene ese valor",
        "El acceso a la lista es incorrecto",
      ],
      correct: 0,
      explanation: "Índice fuera de rango",
    },

    {
      code: `def multiplicar(a, b=2):
    return a * b

multiplicar(3, 4, 5)`,
      question: "¿Qué falla en este código?",
      options: [
        "Se están pasando más argumentos de los esperados",
        "El valor por defecto no se usa correctamente",
        "La función no devuelve el resultado correcto",
        "El cálculo interno es incorrecto",
      ],
      correct: 0,
      explanation: "Demasiados argumentos",
    },

    {
      code: `x = 10
def cambiar():
    x = x + 5

cambiar()`,
      question: "¿Cuál es el problema?",
      options: [
        "Se usa una variable antes de definirla en el scope local",
        "El valor de x no cambia correctamente",
        "La función no se ejecuta",
        "El cálculo es incorrecto",
      ],
      correct: 0,
      explanation: "Error de scope",
    },

    {
      code: `lista = [1,2,3]
for i in range(len(lista)):
    lista.pop(i)`,
      question: "¿Qué problema tiene este código?",
      options: [
        "Se modifican los índices mientras se recorre la lista",
        "El bucle no recorre todos los elementos",
        "La lista se elimina completamente",
        "El método pop no funciona correctamente",
      ],
      correct: 0,
      explanation: "Modificar lista mientras iterás rompe índices",
    },

    {
      code: `def f(x=[]):
    x.append(1)
    return x

print(f())
print(f())`,
      question: "¿Qué bug hay?",
      options: [
        "El valor por defecto se reutiliza entre llamadas",
        "La lista se reinicia en cada ejecución",
        "La función no devuelve correctamente",
        "El append no funciona",
      ],
      correct: 0,
      explanation: "Mutable default argument",
    },

    {
      code: `if x == 5 or 6:
    print("ok")`,
      question: "¿Cuál es el problema?",
      options: [
        "La condición siempre se evalúa como verdadera",
        "La comparación está mal escrita",
        "El operador lógico no funciona correctamente",
        "El flujo del programa es incorrecto",
      ],
      correct: 0,
      explanation: "6 siempre es true",
    },

    {
      code: `for i in range(5):
    if i == 3:
        break
    print(i)
print(i)`,
      question: "¿Qué problema puede generar este código?",
      options: [
        "Se usa una variable fuera del flujo esperado",
        "El bucle no recorre correctamente",
        "El break no funciona correctamente",
        "El valor de i se pierde",
      ],
      correct: 0,
      explanation: "Uso de variable fuera de contexto esperado",
    },

    {
      code: `def dividir(a, b):
    return a / b

dividir(10, 0)`,
      question: "¿Qué problema hay?",
      options: [
        "No se controla un caso límite importante",
        "El cálculo es incorrecto",
        "La función no devuelve valor",
        "Los parámetros son inválidos",
      ],
      correct: 0,
      explanation: "División por cero",
    },
  ],

  advanced: [
    {
      code: `def promedio(lista):
    total = 0
    for num in lista:
        total += num
    return total / len(lista)

print(promedio([]))`,
      question: "¿Qué problema crítico tiene este código?",
      options: [
        "No se contempla un caso límite importante",
        "El cálculo del promedio es incorrecto",
        "El bucle no recorre correctamente la lista",
        "La función devuelve un valor inconsistente",
      ],
      correct: 0,
      explanation: "División por cero si la lista está vacía",
    },

    {
      code: `def procesar_datos(datos):
    resultado = []
    for i in range(len(datos)):
        if datos[i] % 2 == 0:
            resultado.append(datos[i])
        else:
            datos.pop(i)
    return resultado

print(procesar_datos([1,2,3,4,5]))`,
      question: "¿Qué bug tiene este código?",
      options: [
        "Se modifica la lista mientras se recorre",
        "El filtro de números es incorrecto",
        "El resultado no contiene todos los valores esperados",
        "El índice no se maneja correctamente",
      ],
      correct: 0,
      explanation: "Modificar lista mientras iterás rompe los índices",
    },

    {
      code: `def actualizar_usuario(user, datos):
    for key in datos:
        user[key] = datos[key]
    return user

u = {"nombre": "Ana"}
nuevos = {"edad": 20}

actualizar_usuario(u, nuevos)
print(u)`,
      question: "¿Qué comportamiento puede ser problemático?",
      options: [
        "Se modifica el objeto original directamente",
        "Los datos no se actualizan correctamente",
        "El bucle no recorre correctamente las claves",
        "La función no devuelve el resultado esperado",
      ],
      correct: 0,
      explanation: "Mutación directa del objeto original",
    },

    {
      code: `def buscar(lista, valor):
    for i in range(len(lista)):
        if lista[i] == valor:
            return i
    return -1

resultado = buscar([1,2,3], 4)
print(lista[resultado])`,
      question: "¿Cuál es el problema principal?",
      options: [
        "Se usa un índice inválido sin validación",
        "La función no encuentra correctamente el valor",
        "El retorno de la función es incorrecto",
        "El print no utiliza bien el resultado",
      ],
      correct: 0,
      explanation: "resultado = -1 → acceso inválido",
    },

    {
      code: `def agregar_item(item, lista=[]):
    lista.append(item)
    return lista

a = agregar_item(1)
b = agregar_item(2)

print(a, b)`,
      question: "¿Qué bug hay?",
      options: [
        "El valor por defecto se comparte entre llamadas",
        "La lista no se modifica correctamente",
        "Los valores se sobrescriben",
        "La función retorna valores inconsistentes",
      ],
      correct: 0,
      explanation: "Lista mutable compartida",
    },

    {
      code: `def calcular_descuento(precio, descuento):
    if descuento > 0:
        precio = precio - precio * descuento
    return precio

print(calcular_descuento(100, 10))`,
      question: "¿Cuál es el problema lógico?",
      options: [
        "El descuento no se interpreta correctamente",
        "El cálculo matemático es incorrecto",
        "La condición no se evalúa bien",
        "El retorno no refleja el cálculo",
      ],
      correct: 0,
      explanation: "Debería dividir descuento por 100",
    },

    {
      code: `def eliminar_negativos(lista):
    for i in range(len(lista)):
        if lista[i] < 0:
            lista.remove(lista[i])
    return lista

print(eliminar_negativos([1,-2,3,-4]))`,
      question: "¿Qué problema tiene este código?",
      options: [
        "Se alteran los índices durante la iteración",
        "Los negativos no se eliminan correctamente",
        "El bucle no recorre todos los elementos",
        "La función devuelve valores incorrectos",
      ],
      correct: 0,
      explanation: "Modificar lista mientras iterás",
    },

    {
      code: `def dividir_lista(lista, n):
    resultado = []
    for i in range(0, len(lista), n):
        resultado.append(lista[i:i+n])
    return resultado

print(dividir_lista([1,2,3,4], 0))`,
      question: "¿Cuál es el problema crítico?",
      options: [
        "No se valida un valor inválido en los parámetros",
        "El slicing está mal implementado",
        "El bucle no recorre correctamente",
        "La lista no se divide bien",
      ],
      correct: 0,
      explanation: "Paso 0 en range → error",
    },

    {
      code: `def obtener_promedio(datos):
    total = sum(datos)
    return total / len(datos)

datos = None
print(obtener_promedio(datos))`,
      question: "¿Qué falla aquí?",
      options: [
        "No se valida el tipo de entrada",
        "El cálculo del promedio es incorrecto",
        "La función no maneja bien los datos",
        "El retorno es inválido",
      ],
      correct: 0,
      explanation: "None no es iterable",
    },

    {
      code: `def actualizar(lista):
    nueva = lista
    nueva.append(10)
    return nueva

l = [1,2]
actualizar(l)
print(l)`,
      question: "¿Qué problema hay?",
      options: [
        "Se modifica la lista original sin intención",
        "La función no devuelve correctamente",
        "La lista no se actualiza bien",
        "El append no funciona",
      ],
      correct: 0,
      explanation: "Referencia compartida",
    },

    {
      code: `def procesar(lista):
    resultado = []
    for i in range(len(lista)):
        if i % 2 == 0:
            resultado.append(lista[i])
    return resultado

print(procesar([10,20,30,40]))`,
      question: "¿Qué problema lógico hay?",
      options: [
        "Se usan índices en lugar de valores",
        "El filtro no aplica sobre los datos correctos",
        "El resultado no es el esperado según la lógica",
        "El bucle recorre incorrectamente la lista",
      ],
      correct: 0,
      explanation: "Usa índice, no valor",
    },

    {
      code: `def login(user, password):
    if user == "admin" and password == "1234":
        return True
    else:
        return False

print(login("admin", "1234 "))`,
      question: "¿Qué bug puede causar esto?",
      options: [
        "No se manejan correctamente espacios en los datos",
        "La comparación es incorrecta",
        "El retorno no es consistente",
        "La condición no se evalúa bien",
      ],
      correct: 0,
      explanation: "Espacio extra rompe login",
    },

    {
      code: `def merge(a, b):
    return a.extend(b)

x = [1,2]
y = [3,4]

resultado = merge(x, y)
print(resultado)`,
      question: "¿Qué problema tiene este código?",
      options: [
        "Se usa un método que no devuelve el resultado esperado",
        "La lista no se combina correctamente",
        "El retorno es incorrecto",
        "El método extend no funciona",
      ],
      correct: 0,
      explanation: "extend devuelve None",
    },

    {
      code: `def check(valor):
    if valor == True:
        return "ok"
    return "no"

print(check(1))`,
      question: "¿Qué problema hay?",
      options: [
        "Se hace una comparación poco robusta",
        "El valor no se evalúa correctamente",
        "El flujo del programa es incorrecto",
        "El retorno es inconsistente",
      ],
      correct: 0,
      explanation: "1 == True → comportamiento engañoso",
    },

    {
      code: `def calcular_total(precios):
    total = 0
    for p in precios:
        total += p

    if total > 100:
        descuento = total * 0.1

    return total - descuento

print(calcular_total([10,20]))`,
      question: "¿Qué bug tiene este código?",
      options: [
        "Se usa una variable que puede no existir",
        "El cálculo del total es incorrecto",
        "El descuento no se aplica correctamente",
        "El bucle no suma bien",
      ],
      correct: 0,
      explanation: "descuento no definido si total <= 100",
    },
  ],
};
