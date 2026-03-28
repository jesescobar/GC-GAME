// ============================================
// ENCUENTRA EL BUG - Question Database
// Girls Code Paraguay
// ============================================

const QUESTIONS = {
  easy: [
    {
      code: `print("Hola mundo"`,
      question: "¿Qué error hay?",
      options: [
        "Falta cerrar paréntesis",
        "Error de variable",
        "Error de indentación",
        "Nada está mal",
      ],
      correct: 0,
      explanation: "Falta cerrar el paréntesis",
    },

    {
      code: `x = 10
print(y)`,
      question: "¿Cuál es el problema?",
      options: [
        "Error de sintaxis",
        "Variable no definida",
        "Error de tipo",
        "Nada está mal",
      ],
      correct: 1,
      explanation: "y no está definida",
    },

    {
      code: `for i in range(5)
    print(i)`,
      question: "¿Qué falta?",
      options: ["Nada", "Un print", "Dos puntos ':'", "Un break"],
      correct: 2,
      explanation: "Falta ':' en el for",
    },

    {
      code: `if 5 > 3:
print("ok")`,
      question: "¿Cuál es el error?",
      options: [
        "Error de indentación",
        "Error de comparación",
        "Error de print",
        "Nada está mal",
      ],
      correct: 0,
      explanation: "Falta indentación",
    },

    {
      code: `print("Hola" + 5)`,
      question: "¿Qué ocurre?",
      options: ["Funciona", "Error de tipo", "Error de sintaxis", "Nada"],
      correct: 1,
      explanation: "No se puede concatenar string con int",
    },
  ],

  medium: [
    {
      code: `numeros = [1,2,3]
for i in range(4):
    print(numeros[i])`,
      question: "¿Cuál es el problema REAL?",
      options: [
        "Error de sintaxis",
        "Índice fuera de rango",
        "Error de lista",
        "Nada",
      ],
      correct: 1,
      explanation: "range(4) accede a índice inexistente",
    },

    {
      code: `total = 0
for i in range(1,4):
    total += i
print("Total: " + total)`,
      question: "¿Qué error hay?",
      options: [
        "Error en range",
        "Concatenación incorrecta",
        "Error en suma",
        "Nada",
      ],
      correct: 1,
      explanation: "No se puede concatenar string con int",
    },

    {
      code: `x = "5"
y = 2
print(x * y)`,
      question: "¿Qué pasará?",
      options: ["Error", "Imprime 10", "Imprime 55", "Nada"],
      correct: 2,
      explanation: `"5" * 2 = "55"`,
    },

    {
      code: `for i in range(3):
    for j in range(2):
        print(i,j)
  print("fin")`,
      question: "¿Dónde está el problema?",
      options: [
        "Indentación incorrecta",
        "Error de for",
        "Error de print",
        "Nada",
      ],
      correct: 0,
      explanation: "El último print está mal indentado",
    },

    {
      code: `lista = []
print(lista[0])`,
      question: "¿Qué ocurre?",
      options: [
        "Nada",
        "Error de índice",
        "Error de sintaxis",
        "Error de tipo",
      ],
      correct: 1,
      explanation: "La lista está vacía",
    },
  ],

  advanced: [
    {
      code: `def dividir(a,b):
    return a/b

print(dividir(10,0))`,
      question: "¿Cuál es el problema MÁS importante?",
      options: [
        "Error de sintaxis",
        "División por cero",
        "Error de función",
        "Nada",
      ],
      correct: 1,
      explanation: "División por cero rompe el programa",
    },

    {
      code: `def agregar(lista, item=[]):
    lista.append(item)
    return lista

print(agregar([1]))
print(agregar([2]))`,
      question: "¿Qué error hay?",
      options: [
        "Nada",
        "Error de append",
        "Parámetro mutable peligroso",
        "Error de print",
      ],
      correct: 2,
      explanation: "Las listas como default son peligrosas",
    },

    {
      code: `class Persona:
    def __init__(self,nombre):
        self.nombre = nombre

    def saludar():
        print("Hola " + self.nombre)

p = Persona("Ana")
p.saludar()`,
      question: "¿Cuál es el problema?",
      options: [
        "Nada",
        "Falta self en método",
        "Error en clase",
        "Error en print",
      ],
      correct: 1,
      explanation: "Falta self en saludar()",
    },

    {
      code: `def suma(a,b):
    return a + b

print(suma("2",3))`,
      question: "¿Qué ocurre?",
      options: ["Funciona", "Error de tipo", "Error de sintaxis", "Nada"],
      correct: 1,
      explanation: "No se puede sumar string + int",
    },

    {
      code: `def f():
    try:
        return 10/0
    except:
        print("error")

print(f())`,
      question: "¿Cuál es el problema?",
      options: [
        "Nada",
        "No retorna valor en except",
        "Error de sintaxis",
        "Error de try",
      ],
      correct: 1,
      explanation: "La función retorna None",
    },
  ],
};
