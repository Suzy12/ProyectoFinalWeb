import { Exercise } from './exercise.model';

export const EXERCISES: Exercise[] = [
    {
        key: 0,
        call: "cantidadDeDigitos (num)",
        creator: "Natalia Vargas",
        code: "00001",
        examples: [
            {
                call: "cantidadDeDigitos(12345)",
                result: "5",
                comment: ""
            },
            {
                call: "cantidadDeDigitos(0)",
                result: "1",
                comment: "Cero tiene un digito"
            },
            {
                call: "cantidadDeDigitos(9)",
                result: "1",
                comment: ""
            },
            {
                call: "cantidadDeDigitos(12)",
                result: "2",
                comment: "Dos dígitos"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "numero entero"
                }
            ],
            code: "def cantidadDigitos (num):\n\n    if num == 0: # El 0 es una excepción\n        return 1\n    num = abs(num) #lo hace positivo siempre\n    contador = 0\n    while num > 0:\n        contador = contador + 1\n        num = num \/\/ 10\n    return contador",
            inputs: [
                {
                    name: "num",
                    type: "numero entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-04-03",
        name: "Cantidad de digitos",
        section: "Algoritmos numéricos",
        details: "Realice un programa que determine cuantos dígitos decimales tiene un número entero positivo o cero"
    },
    {
        key: 1,
        call: "cantidadPares(num)",
        creator: "Natalia Vargas",
        code: "00002",
        examples: [
            {
                call: "cantidadPares(16890742)",
                result: "4",
                comment: ""
            },
            {
                call: "cantidadPares(912345678)",
                result: "4",
                comment: ""
            },
            {
                call: "cantidadPares(0712304488)",
                result: "5",
                comment: "Cero se toma como impar"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "numero entero positivo"
                }
            ],
            code: "def cantidadPares (num):\n\n    num = abs(num)\n    contador = 0\n    iteracion = 1\n    while num > 0:\n        print ('iteracion no. ', iteracion, '     contador = ', contador, 'numero = ', num)\n        if num%2 == 0 and num%10 != 0:\n            contador = contador + 1\n\n        num = num \/\/ 10\n        iteracion +=1\n    return contador",
            inputs: [
                {
                    name: "num",
                    type: "numero entero positivo"
                }
            ]
        },
        level: "5",
        created: "2021-05-01",
        name: "Cantidad de pares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que determine la cantidad de dígitos pares de un número entero positivo, considerando 0 como no par"
    },
    {
        key: 2,
        call: "sumaDigitos(num)",
        creator: "Diego Mora",
        code: "00003",
        examples: [
            {
                call: "sumaDigitos(12345)",
                result: "15",
                comment: ""
            },
            {
                call: "sumaDigitos(6661)",
                result: "19",
                comment: ""
            },
            {
                call: "sumaDigitos(010)",
                result: "1",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un numero entero"
                }
            ],
            code: "def sumaDigitos(num):\n\n    resultado = 0\n    while  num > 0 :\n        resultado = resultado + num%10\n        num = num\/\/10\n\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un numero entero postivo o cero"
                }
            ]
        },
        level: "3",
        created: "2021-05-05",
        name: "Suma dígitos",
        section: "Algoritmos numéricos",
        details: "Realice un programa que sume todos los digitos de un número entero positivo"
    },
    {
        key: 3,
        call: "sumaDigitosConSigno(num)",
        creator: "Diego Mora",
        code: "00004",
        examples: [
            {
                call: "sumaDigitosConSigno (169304)",
                result: "-3",
                comment: "(-1+6-9-3+0+4 = -3)"
            },
            {
                call: "sumaDigitosConSigno (457101)",
                result: "-10",
                comment: "(+4-5-7-1+0-1 = -10)"
            },
            {
                call: "sumaDigitosConSigno (12683)",
                result: "13",
                comment: "(+2+6+8-3 = 13)"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def sumaDigitosConSigno(num):\n\n    resultado = 0\n    while  num > 0 :\n        if num % 2 == 0:\n            resultado = resultado + num%10\n        else:\n            resultado = resultado - num%10\n        num = num\/\/10\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un numero entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-04-03",
        name: "Suma dígitos con signo",
        section: "Algoritmos numéricos",
        details: "Realice un programa que dé el resultado de la suma de los dígitos pares (incluyendo el cero) y la resta de los impares."
    },
    {
        key: 4,
        call: "esBinario(num)",
        creator: "Diego Mora",
        code: "00005",
        examples: [
            {
                call: "esBinario (101002)",
                result: "False",
                comment: ""
            },
            {
                call: "esBinario (111001110)",
                result: "True",
                comment: ""
            },
            {
                call: "esBinario (101001000)",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def esBinario(num):\n    \n    while num > 0:\n        if num % 10 == 1 or  num%10 == 0:\n            num = num \/\/10\n        else:        \n            return False\n    return True",
            inputs: [
                {
                    name: "num",
                    type: "Un número"
                }
            ]
        },
        level: "2",
        created: "2021-04-03",
        name: "Es binario",
        section: "Algoritmos numéricos",
        details: "Realice un programa que diga si un número es binario o no."
    },
    {
        key: 5,
        call: "sumaImpares(num)",
        creator: "Diego Mora",
        code: "00006",
        examples: [
            {
                call: "sumaImpares(8532)",
                result: "8",
                comment: ""
            },
            {
                call: "sumaImpares(13372)",
                result: "14",
                comment: ""
            },
            {
                call: "sumaImpares(246822)",
                result: "0",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def sumaImpares(num):\n\n    resultado = 0\n    while  num > 0 :\n        if num % 2 == 1:\n            resultado += num%10\n        num = num\/\/10\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "4",
        created: "2021-05-15",
        name: "Suma de impares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que sume los dígitos impares de un número."
    },
    {
        key: 6,
        call: "sumaPares(num)",
        creator: "Diego Mora",
        code: "00007",
        examples: [
            {
                call: "sumaPares(8532)",
                result: "10",
                comment: ""
            },
            {
                call: "sumaPares (13372)",
                result: "2",
                comment: ""
            },
            {
                call: "sumaPares (246822)",
                result: "24",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def sumaPares(num):\n\n    resultado = 0\n    while  num > 0 :\n        if num % 2 == 0:\n            resultado += num%10\n        num = num\/\/10\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Suma de pares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que sume los dígitos impares de un número."
    },
    {
        key: 7,
        call: "todosPares(num)",
        creator: "Diego Mora",
        code: "00008",
        examples: [
            {
                call: "todosPares(8532) ",
                result: "False",
                comment: ""
            },
            {
                call: "todosPares (402)",
                result: "True",
                comment: "Se toma 0 como par"
            },
            {
                call: "todosPares (246822)",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def todosPares(num):\n\n    if num == 0:\n        return False\n\n    while  num > 0 :\n        if num%2 == 1 or num%10 == 0:\n            return False\n        num = num\/\/10\n    return True\n",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Todos pares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que diga si todos los dígitos de un número son pares o no."
    },
    {
        key: 8,
        call: "estanOrdenados(num)",
        creator: "Diego Mora",
        code: "00009",
        examples: [
            {
                call: "estanOrdenados(8532)",
                result: "True",
                comment: ""
            },
            {
                call: "estanOrdenados(13372)",
                result: "False",
                comment: ""
            },
            {
                call: "estanOrdenados(864322)",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "\ndef estanOrdenados(num):\n\n    digitoAnterior = num % 10\n    while num > 0:\n        if num%10 < digitoAnterior:\n            return False\n        digitoAnterior = num%10\n        num = num \/\/ 10\n    return True",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Números ordenados",
        section: "Algoritmos numéricos",
        details: "Realice un programa que verifique si los dígitos de un número están ordenados de mayor a menor."
    },
    {
        key: 9,
        call: "enPosicionesPares(num)",
        creator: "Diego Mora",
        code: "00010",
        examples: [
            {
                call: "enPosicionesPares(94322)",
                result: "True",
                comment: ""
            },
            {
                call: "enPosicionesPares(23296689)",
                result: "True",
                comment: ""
            },
            {
                call: "enPosicionesPares(963422)",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def enPosicionesPares(num):\n\n    pos = 1\n    while num > 0:\n        #si estoy en posicion par y el numero no es par\n        if pos % 2 == 0 and num % 2 != 0:  \n            return False\n        pos = pos + 1   #incrementa la posicion\n        num = num\/\/10\n\n    return True\n",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "En posiciones pares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que verifique si todos los dígitos en posiciones pares del número, empezando en 1 de derecha a izquierda, son digitos pares."
    },
    {
        key: 10,
        call: "weirdSum(num)",
        creator: "Diego Mora",
        code: "00011",
        examples: [
            {
                call: "weirdSum(1234)",
                result: "26",
                comment: ""
            },
            {
                call: "weirdSum(6700234)",
                result: "50",
                comment: ""
            },
            {
                call: "weirdSum(963422)",
                result: "1",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "acumulador",
                    type: "Número"
                }
            ],
            code: "def weirdSum(num):\n\n    acumulador = 0\n    while num > 0:\n        digito = num%10\n        if digito == 0 or digito == 1:\n            acumulador += 20\n        elif digito % 3 == 0 :\n            acumulador += -3\n        elif digito % 4 == 0 :\n            acumulador += digito * 2\n        elif digito > 3 and (digito == 5 or digito == 7):\n            acumulador += digito\n        else:\n            acumulador += 1\n        num = num \/\/ 10\n    #fuera del while retorna lo que acumulo\n    return acumulador",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Suma con condiciones",
        section: "Algoritmos numéricos",
        details: "Realice un programa que recorra cada dígito de un múmero y sume 20 si es un 1 o un 0, reste 3 si es multiplo de 3, sume la multiplicación del dígito con 2 solo si es multiplo de 4, sume el dígito si este es 5 o 7, en otro caso sume 1.."
    },
    {
        key: 11,
        call: "cantidadDivisiblesPor(num, divisor)",
        creator: "Diego Mora",
        code: "00012",
        examples: [
            {
                call: "antidadDivisiblesPor(66, 6)",
                result: "2",
                comment: ""
            },
            {
                call: "cantidadDivisiblesPor(84265, 2)",
                result: "4",
                comment: ""
            },
            {
                call: "cantidadDivisiblesPor(649610, 3)",
                result: "4",
                comment: "El dígito cero se toma como divisible"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "contador",
                    type: "Un número entero"
                }
            ],
            code: "def cantidadDivisiblesPor(num, divisor):\n\n    if divisor == 0 or divisor > 9:\n        return 0\n    contador = 0\n    while num > 0:\n        digito = num%10\n        if digito % divisor == 0:  #si el dígito es divisible\n            contador += 1\n        num = num \/\/ 10\n\n    return contador",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                },
                {
                    name: "divisor",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Cantidad de divisibles",
        section: "Algoritmos numéricos",
        details: "Realice un programa que indique la cantidad de dígitos divibles por un divisor (entero positivo menor a 10) dado para un número dado"
    },
    {
        key: 12,
        call: "ceroIntercalados(num)",
        creator: "Diego Mora",
        code: "00013",
        examples: [
            {
                call: "ceroIntercalados(908040) ",
                result: "True",
                comment: ""
            },
            {
                call: "ceroIntercalados(918040)",
                result: "False",
                comment: ""
            },
            {
                call: "ceroIntercalados(010504020)",
                result: "Error",
                comment: "Un entero decimal no puede empezar con cero en python"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def ceroIntercalados(num):\n\n    mustBeZero = num % 10 == 0\n    while num > 0:\n        if mustBeZero == True and num % 10 != 0:\n            return False\n        mustBeZero = not mustBeZero\n        num = num \/\/10\n\n    return True",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Ceros intercalados",
        section: "Algoritmos numéricos",
        details: "Realice un programa que verifique si un número tiene ceros intercalados."
    }
]
/*    {
        call: "countDivisores(num)",
        creator: "Diego Mora",
        code: "00014",
        examples: [
            {
                call: "countDivisores(5)",
                result: "2",
                comment: ""
            },
            {
                call: "countDivisores(30)",
                result: "8",
                comment: ""
            },
            {
                call: "countDivisores(67)",
                result: "2",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número entero positivo "
                }
            ],
            code: "def countDivisores(num):\n\n    resultado = 0\n    divisor = 1\n\n    while divisor <= num :\n        if num % divisor == 0:\n            print(divisor,\"es divisor de\",num)\n            resultado += 1\n        divisor += 1\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Contar divisores",
        section: "Algoritmos numéricos",
        details: "Realice un programa que cuente los divisores de un número dado."
    },
    {
        call: "sumaParImpar(num)",
        creator: "Diego Mora",
        code: "00015",
        examples: [
            {
                call: "sumaParImpar(32982)",
                result: "True",
                comment: ""
            },
            {
                call: "sumaParImpar(1113)",
                result: "True",
                comment: ""
            },
            {
                call: "sumaParImpar(67125342)",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def sumaParImpar(num):\n\n    sumaPares = 0\n    sumaImpares = 0\n    while num > 0:\n        if num % 2 == 0:\n            sumaPares += num%10\n        else:\n            sumaImpares += num%10\n        num = num \/\/ 10\n\n    return sumaPares == sumaImpares",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Sumar pares e impares",
        section: "Algoritmos numéricos",
        details: "Realice un programa que sume los dígitos pares e impares de un dígito y diga si ambas sumas dan lo mismo"
    },
    {
        call: "quitarPares(num)",
        creator: "Diego Mora",
        code: "00016",
        examples: [
            {
                call: "quitarPares(12345678)",
                result: "1357 ",
                comment: ""
            },
            {
                call: "quitarPares(9852156)",
                result: "9515",
                comment: ""
            },
            {
                call: "quitarPares(392403581)",
                result: "39351",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número compuesto solo por dígitos impares"
                }
            ],
            code: "def quitarPares (num):\n\n    resultado = 0\n    exponente = 0\n    while num > 0:\n        if num % 2 == 1:\n            print (\"Exponente es :\", exponente, \"     num = \", num, \"     r+= \", (num%10)*(10**exponente))\n            resultado += (num%10)*(10**exponente)\n            exponente += 1\n        else:\n            print (\"Exponente es :\", exponente, \"     num = \", num, \"     NO SUMA\")\n        num = num \/\/ 10\n\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Quitar pares",
        section: "Algoritmos numéricos",
        details: " Realice un programa quite los dígitos pares de número y devuelva solo los impares"
    },
    {
        call: "eliminar(dig, num)",
        creator: "Diego Mora",
        code: "00017",
        examples: [
            {
                call: "eliminar(0,1280138104)",
                result: "12813814",
                comment: ""
            },
            {
                call: "eliminar(1,231412831)",
                result: "234283",
                comment: ""
            },
            {
                call: "eliminar(9,937292699)",
                result: "37226",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número entero positivo"
                }
            ],
            code: "def eliminar(dig, num):    \n\n    exponente = 0\n    resultado = 0\n    while num > 0:\n        if num%10 != dig:\n            resultado += (num%10) * (10**exponente)\n            exponente += 1\n        num = num \/\/ 10\n    return resultado",
            inputs: [
                {
                    name: "dig",
                    type: "Un dígito decimal"
                },
                {
                    name: "num",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Eliminar dígitos",
        section: "Algoritmos numéricos",
        details: "Realice un programa que elimine todas las apariciones de un dígito en un número."
    },
    {
        call: "eliminarPrimera(dig, num)",
        creator: "Diego Mora",
        code: "00018",
        examples: [
            {
                call: "eliminarPrimera(4,94344234)",
                result: "9434423",
                comment: ""
            },
            {
                call: "eliminarPrimera(8,2834748)",
                result: "283474",
                comment: ""
            },
            {
                call: "eliminarPrimera(0,1240300)",
                result: "124030",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def eliminarPrimera(dig, num):    \n\n    exponente = 0\n    resultado = 0\n\n    while num > 0:\n        if num%10 != dig:\n            resultado += (num%10) * (10**exponente)\n            exponente += 1\n        else:\n            return (num\/\/10)*(10**exponente) + resultado\n\n        num = num \/\/ 10\n        \n    return resultado",
            inputs: [
                {
                    name: "dig",
                    type: "Un dígito decimal"
                },
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Elimina primera aparición",
        section: "Algoritmos numéricos",
        details: "Realice un programa que elimine la primera aparición de dígito en el número, de derecha a izquierda."
    },
    {
        call: "apariciones(dig, num)",
        creator: "Diego Mora",
        code: "00019",
        examples: [
            {
                call: "apariciones(5,9554356)",
                result: "3",
                comment: ""
            },
            {
                call: "apariciones(4,9554356)",
                result: "1",
                comment: ""
            },
            {
                call: "apariciones(0,1323)",
                result: "0",
                comment: "El dígito no aparece ninguna vez"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def apariciones(dig, num):\n\n    num = abs(num)\n    if dig ==  num:\n        return 1\n    resultado = 0\n    \n    while num > 0:\n        if num%10 == dig:\n            resultado += 1\n        num = num \/\/ 10\n\n    return resultado",
            inputs: [
                {
                    name: "dig",
                    type: "Un dígito decimal"
                },
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Apariciones",
        section: "Algoritmos numéricos",
        details: "Realice un programa que cuente la cantidad de apariciones de un dígito en un número."
    },
    {
        call: "maximoDigito(num)",
        creator: "Diego Mora",
        code: "00020",
        examples: [
            {
                call: "maximoDigito (823546)",
                result: "8",
                comment: ""
            },
            {
                call: "maximoDigito (7539)",
                result: "9",
                comment: ""
            },
            {
                call: "maximoDigito (10)",
                result: "1",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "maxActual",
                    type: "Un número"
                }
            ],
            code: "def maximoDigito (num):\n\n    maxActual = 0 \n    while num > 0:\n        if num%10 > maxActual:\n            maxActual = num%10\n        num = num \/\/ 10\n\n    return maxActual",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Máximo dígito",
        section: "Algoritmos numéricos",
        details: "Realice un programa que dé el dígito mayor de un número."
    },
    {
        call: "sustituir(digOriginal, digNuevo, num)",
        creator: "Diego Mora",
        code: "00021",
        examples: [
            {
                call: "sustituir(1,2,12891)",
                result: "22892",
                comment: ""
            },
            {
                call: "sustituir(2,4,21246291)",
                result: "41446491",
                comment: ""
            },
            {
                call: "sustituir(1,0,21246291)",
                result: "20246290",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def sustituir(digOriginal, digNuevo, num):\n\n    signo = 1\n    if num < 0:\n        signo = -1\n    num = abs(num)\n\n    exponente = 0\n    resultado = 0\n    \n    while num > 0:\n        if num%10 == digOriginal:\n            resultado += digNuevo * (10**exponente)\n        else:\n            resultado += (num%10) * (10**exponente)\n        exponente += 1\n        num = num \/\/ 10\n\n    return resultado * signo",
            inputs: [
                {
                    name: "digOriginal",
                    type: "Un dígito decimal"
                },
                {
                    name: "digNuevo",
                    type: "Un dígito decimal"
                },
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Sustituir dígito",
        section: "Algoritmos numéricos",
        details: "Realice un programa que dado un dígito a sustituir, un dígito sustituyente y número, sustituya el nuevo por el dado."
    },
    {
        call: "invertir (num)",
        creator: "Diego Mora",
        code: "00022",
        examples: [
            {
                call: "invertir(1232)",
                result: "2321",
                comment: ""
            },
            {
                call: "invertir(456891)",
                result: "198654",
                comment: ""
            },
            {
                call: "invertir(129010)",
                result: "10921",
                comment: "El primero cero lo omite pues un numero entero no puede empezar con cero"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def invertir (num):\n\n    resultado = 0\n    exponente = cantidadDigitos(num) - 1  # Se hace uso de un función ya existente\n    while num > 0:\n        resultado += (num%10)*(10**exponente)\n        exponente -= 1\n        num = num \/\/ 10\n    return resultado",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Invertir número",
        section: "Algoritmos numéricos",
        details: "Realice un programa que invierta los dígitos de un número."
    },
    {
        call: "esPalindromo(num)",
        creator: "Diego Mora",
        code: "00023",
        examples: [
            {
                call: "esPalindromo(1234321)",
                result: "True",
                comment: ""
            },
            {
                call: "esPalindromo(6754576)",
                result: "True",
                comment: ""
            },
            {
                call: "esPalindromo(6752454)",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "#Solución 1\ndef esPalindromo(num):\n\n    expMayor = cantidadDigitos(num) - 1   # Se hace uso de un función ya existente\n    expMenor = 0\n\n    while expMayor > -1:\n        digitoDerecha = (num \/\/ (10**expMayor)) % 10\n        digitoIzquierda = (num \/\/ (10**expMenor)) % 10\n\n        if  digitoDerecha !=  digitoIzquierda:\n            return False\n        \n        expMayor -= 1\n        expMenor += 1\n        \n    return True\n\n#Solución 2\ndef esPalindromo2(num):\n\n    while num > 0:\n        divisionEntera = cantidadDigitos(num) - 1\n        if num%10 != (num\/\/10**divisionEntera) % 10:\n            return False\n        num = num%(10**divisionEntera) #quitar mas significativo\n        num = num \/\/ 10   #quitar el menos significativo\n    return True",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Es palíndromo",
        section: "Algoritmos numéricos",
        details: "Realice un programa que verifique si un número es palíndromo, es decir que se sea el mismo de izquierda a derecha y viceversa."
    },
    {
        call: "esPrimo(num)",
        creator: "Diego Mora",
        code: "00024",
        examples: [
            {
                call: "esPrimo(18)",
                result: "False",
                comment: ""
            },
            {
                call: "esPrimo(23)",
                result: "True",
                comment: ""
            },
            {
                call: "esPrimo(97)",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def esPrimo(num):\n\n    divisor = 2\n    while divisor < num:\n        print (num, \"%\",divisor)\n        if num % divisor == 0:\n            return False\n        divisor += 1\n\n    return True\n",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Es primo",
        section: "Algoritmos numéricos",
        details: "Realice un programa que diga si un número es primo."
    },
    {
        call: "esConjunto(num)",
        creator: "Diego Mora",
        code: "00025",
        examples: [
            {
                call: "esConjunto(12356)",
                result: "True",
                comment: ""
            },
            {
                call: "esConjunto(815429)",
                result: "True",
                comment: ""
            },
            {
                call: "esConjunto(3742857)",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Booleano"
                }
            ],
            code: "def esConjunto(num):\n\n    while num >= 10:\n        if esta(num%10, num\/\/10):\n            return False\n        num = num \/\/ 10\n\n    return True\n\n\n# Verificar si el dígito está en el número\n# después de haberlo sacado\ndef esta(dig, num):\n\n    if dig == num:\n        return True\n    while num > 0:\n        if dig == num%10:\n            return True\n        num = num \/\/ 10\n\n    return False",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "1",
        created: "2021-05-15",
        name: "Es conjunto",
        section: "Algoritmos numéricos",
        details: "Realice un programa que verifique si un número no tiene dígitos repetidos, es decir, que sea conjunto."
    },
    {
        call: "borrarPosicion(num, pos)",
        creator: "Diego Mora",
        code: "00026",
        examples: [
            {
                call: "borrarPosicion(348528, 6)",
                result: "48528 ",
                comment: ""
            },
            {
                call: "borrarPosicion(324342, 3)",
                result: "32442",
                comment: ""
            },
            {
                call: "borrarPosicion(10, 1)",
                result: "1",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def borrarPosicion(num, pos):\n\n    exp = 0\n    resultado = 0\n    while num > 0:\n        print (num, pos, resultado, exp)\n        if pos == 1:\n            return resultado + (num\/\/10)* (10**exp)\n\n        resultado += (num%10) * (10**exp)\n        pos = pos - 1\n        exp = exp + 1\n        num = num \/\/ 10\n\n    return resultado\n",
            inputs: [
                {
                    name: "num",
                    type: "Un número entero positivo o cero"
                },
                {
                    name: "pos",
                    type: "Un número entero positivo o cero"
                }
            ]
        },
        level: "2",
        created: "2021-05-15",
        name: "Borrar en posición",
        section: "Algoritmos numéricos",
        details: "Realice un programa que borre el dígito de un número en una posición dada, de derecha a izquierda comenzando en la posición 1, y retorne el nuevo número."
    },
    {
        call: "largo (lista)",
        creator: "Diego Mora",
        code: "00027",
        examples: [
            {
                call: "largo ([3,5,7,8,[[1],2]])",
                result: "5",
                comment: "[[1],2] cuenta como un elemento"
            },
            {
                call: "largo ([7,2,[1]]) ",
                result: "3",
                comment: "La sublista [1] es un elemento"
            },
            {
                call: "largo ([\"A\",\"E\",\"I\",2,3])",
                result: "5",
                comment: "Se pueden combinar los tipos de datos que tiene la lista"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un entero positivo o cero"
                }
            ],
            code: "\n# Forma 1\ndef largo (lista):\n\n    resultado = 0\n\n    while lista != []:\n        resultado += 1\n        lista = lista[1:]\n\n    return resultado\n\n# Forma 2\ndef largoFor (lista):\n    resultado = 0\n    \n    for elem in lista:\n        resultado += 1\n\n    return resultado",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Largo de una lista",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne el largo de una lista."
    },
    {
        call: "sumatoria(lista)",
        creator: "Diego Mora",
        code: "00028",
        examples: [
            {
                call: "sumatoria([1,5,9,4])",
                result: "19",
                comment: ""
            },
            {
                call: "sumatoria([5,9,8,8])",
                result: "30",
                comment: ""
            },
            {
                call: "sumatoria([1,5,8.9,4])",
                result: "18.9",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un entero positivo o cero"
                }
            ],
            code: "# Forma 1    \ndef sumatoria(lista):\n\n    resultado = 0\n    while lista != []:\n        resultado += lista[0]\n        lista = lista[1:]\n\n    return resultado\n\n\n# Forma 2\ndef sumatoriaFor(listaEnteros):\n\n    resultado = 0\n    for numero in listaEnteros:\n        resultado += numero\n\n    return resultado",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Sumatoria",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que sume todos los elementos numéricos de una lista."
    },
    {
        call: "todosPares(lista)",
        creator: "Diego Mora",
        code: "00029",
        examples: [
            {
                call: "todosPares([1,4,6,2])",
                result: "False",
                comment: ""
            },
            {
                call: "todosPares([8,6,2,12])",
                result: "True",
                comment: ""
            },
            {
                call: "todosPares([16,26,6,4,2])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleno"
                }
            ],
            code: "def todosPares (lista):\n    for elem in lista:\n        if elem % 2 == 1:\n            return False\n\n    return True",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Elementos pares",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne True si todos los elementos son pares."
    },
    {
        call: "sumaImpares(lista)",
        creator: "Diego Mora",
        code: "00030",
        examples: [
            {
                call: "sumaImpares([8,7,3,1])",
                result: "11",
                comment: ""
            },
            {
                call: "sumaImpares([4,6,9,1])",
                result: "10",
                comment: ""
            },
            {
                call: "sumaImpares([2,12,88,54])",
                result: "0",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "res",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def sumaImpares (lista):\n    res = 0\n    for elem in lista:\n        if elem % 2 == 1:\n            res += elem\n\n    return res\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Suma impares",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que sume los números impares de una lista."
    },
    {
        call: "divisoresDe (lista, divisor)",
        creator: "Diego Mora",
        code: "00031",
        examples: [
            {
                call: "divisoresDe ([4,7,2,9], 3)",
                result: "1",
                comment: ""
            },
            {
                call: "divisoresDe ([28,4,7,42,112,9], 14)",
                result: "3",
                comment: "28,42 y 112 son divisibles entre 14"
            },
            {
                call: "divisoresDe ([8,14,7,63,112,1], 7)",
                result: "4",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "contardor",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def divisoresDe (lista, divisor):\n    if divisor == 0:\n        return 0\n    contador = 0\n\n    for elem in lista:\n        if elem % divisor == 0:\n            contador += 1\n\n    return contador",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                },
                {
                    name: "divisor",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Cantidad de divisores",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que dada una lista y un divisor, cuente cuantos números son divisibles entre ese divisor."
    },
    {
        call: "eliminar(elemento,lista)",
        creator: "Diego Mora",
        code: "00032",
        examples: [
            {
                call: "eliminar('a',[5,'a',10.2,True,'a','c'])",
                result: "[5,10.2,True,'c']",
                comment: ""
            },
            {
                call: "eliminar(True,[True,1,5,'A',True,[True]])",
                result: "[1,5,'A',[True]]",
                comment: "El True de la sublista no se borra precisamente por estar en una sublista"
            },
            {
                call: "eliminar(2,['r',3,7,2,'Active',2])",
                result: "['r',3,7,'Active']",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "listaResultado",
                    type: "Una lista"
                }
            ],
            code: "def eliminar (elemento, lista):\n    listaResultado = []\n    for elementoEnLista  in lista:\n        if elementoEnLista != elemento or type(elementoEnLista) != type(elemento):\n            listaResultado += [elementoEnLista]\n\n    return listaResultado\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                },
                {
                    name: "elemento",
                    type: "elemento de cualquier tipo"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Eliminar apariciones",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que elimine las apariciones de un elemento en una lista."
    },
    {
        call: "eliminarPrimera(elemento, lista)",
        creator: "Diego Mora",
        code: "00033",
        examples: [
            {
                call: "eliminarPrimera('a',[5,'a',10.2,True,'a','c'])",
                result: "[5,10.2,True,'a','c'] ",
                comment: ""
            },
            {
                call: "eliminarPrimera(True,[True,1,5,'A',True,[True]])",
                result: "[1,5,'A',True,[True]]",
                comment: ""
            },
            {
                call: "eliminarPrimera(2,['r',3,7,2,'Active',2])",
                result: "['r',3,7,'Active',2]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "listaResultado",
                    type: "Una lista"
                }
            ],
            code: "# Forma 1\ndef eliminarPrimera (elemento, lista):\n    listaResultado = []\n    encontroPrimero = False\n    \n    for elementoEnLista  in lista:\n        if encontroPrimero or elementoEnLista != elemento:\n            listaResultado += [elementoEnLista]\n        else:   # esto se cumple solo cuando lo encontro y es la primera vez, \n            encontroPrimero = True  #cambia el valor de la bandera\n\n    return listaResultado\n\n# Forma 2\ndef eliminarPrimera2 (elemento, lista):\n    listaResultado = []\n    index = 0\n    for elementoEnLista  in lista:\n        if elementoEnLista != elemento:\n            listaResultado += [elementoEnLista]\n        else:\n            return listaResultado + lista[index+1:]\n        index += 1\n\n    return listaResultado\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                },
                {
                    name: "elemento",
                    type: "elemento de cualquier tipo"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Eliminar primera aparicion",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que elimine la primer aparición de un elemento en una lista."
    },
    {
        call: "getMax(lista)",
        creator: "Diego Mora",
        code: "00034",
        examples: [
            {
                call: "getMax([6,8,2,10])",
                result: "10",
                comment: ""
            },
            {
                call: "getMax([76,8,2,19,18])",
                result: "76",
                comment: ""
            },
            {
                call: "getMax([0,5,1,7,43,21])",
                result: "43",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "currentMax",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def getMax(lista):\n\n    currentMax = lista[0]\n\n    for num in lista[1:]:\n        if num > currentMax:\n            currentMax = num\n\n    return currentMax",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Mayor en lista",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne el numero mayor de una lista sin usar la función MAX."
    },
    {
        call: "getMin(lista)",
        creator: "Diego Mora",
        code: "00035",
        examples: [
            {
                call: "getMin([6,8,2,10])",
                result: "2",
                comment: ""
            },
            {
                call: "getMin([76,8,2,19,18])",
                result: "2",
                comment: ""
            },
            {
                call: "getMin([0,5,1,7,43,21])",
                result: "0",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "currentMin",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def getMin(lista):\n\n    currentMin = lista[0]\n\n    for num in lista[1:]:\n        if num < currentMin:\n            currentMin = num\n\n    return currentMin\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Menor en lista",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne el numero menor de la lista sin usar MIN."
    },
    {
        call: "substitute(original, newValue, sequence)",
        creator: "Diego Mora",
        code: "00036",
        examples: [
            {
                call: "substitute('a', 65, [1, 'a', 'a', True, 2, 56])",
                result: "[1, 65, 65, True, 2, 56] ",
                comment: ""
            },
            {
                call: "substitute(10, 'X', [10, 'XI', 'XII', 13, 10, 10])",
                result: "['X', 'XI', 'XII', 13, 'X', 'X']",
                comment: ""
            },
            {
                call: "substitute(5, 'Cinco', ['1', 2, '5', 5, 6, 'Cinco'])",
                result: "['1', 2, '5', 'Cinco', 6, 'Cinco']",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "result",
                    type: "Una lista"
                }
            ],
            code: "def substitute(original, newValue, sequence):\n    result = []\n    for element in sequence:\n        if element == original:\n            result += [newValue]\n        else:\n            result += [element]\n\n    return result",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Sustituir",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que sustituya un elemento por otro, en una lista. "
    },
    {
        call: "toNumber(sequence)",
        creator: "Diego Mora",
        code: "00037",
        examples: [
            {
                call: "toNumber([-10,-256,32,10,0,1])",
                result: "10256321001",
                comment: ""
            },
            {
                call: "toNumber([909,-87,431,11])",
                result: "9098743111",
                comment: ""
            },
            {
                call: "toNumber([5,-3,-90,-1,-9]) ",
                result: "539019",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "result",
                    type: "Un número entero positivo"
                }
            ],
            code: "\ndef toNumber (sequence):\n    result = 0\n\n    for number in sequence:\n        result = result * (10**getNumberLength(abs(number))) + abs(number)\n\n    return result\n\n#integer number digits count\ndef getNumberLength(num):\n    counter = 1\n    while num >= 10:\n        counter += 1\n        num \/\/= 10\n    return counter\n",
            inputs: [
                {
                    name: "sequence",
                    type: "Una lista de números enteros positivos o negativos."
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Convertir a un solo número",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que una una lista de números en un solo número, los elementos deben ser números enteros positivos o negativos."
    },
    {
        call: "descomponer(lista)",
        creator: "Diego Mora",
        code: "00038",
        examples: [
            {
                call: "descomponer([909,-87,431,11,0])",
                result: "[[-87], [0], [909, 431, 11]]",
                comment: ""
            },
            {
                call: "descomponer([0,-9,0,11,0,4,98,-25])",
                result: "[[-9, -25], [0, 0, 0], [11, 4, 98]",
                comment: ""
            },
            {
                call: "descomponer([-76,-90,-2,0,1,0,3,0,82.2])",
                result: "[[-76, -90, -2], [0, 0, 0], [1, 3, 82.2]]",
                comment: "Puden haber números con fracción decimal"
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista con tres listas"
                }
            ],
            code: "def descomponer(lista):\n    negativos = []\n    positivos = []\n    ceros = []\n\n    for num in lista:\n        if num > 0:\n            positivos.append(num) # positivos += [num]\n        elif num < 0:\n            negativos.append(num) # negativos += [num]\n        else:\n            ceros.append(num)  # ceros += [num]\n\n    return [negativos, ceros, positivos]\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista con números"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Descomponer lista",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que descomponga un lista en una lista de positivos, una de negativos y una de ceros, y las retorne en una sola lista. "
    },
    {
        call: "crearLista (elemento, veces)",
        creator: "Diego Mora",
        code: "00039",
        examples: [
            {
                call: "crearLista(3, 6)",
                result: "[3, 3, 3, 3, 3]",
                comment: ""
            },
            {
                call: "crearLista('Hello world', 3)",
                result: "['Hello world', 'Hello world', 'Hello world']",
                comment: ""
            },
            {
                call: "crearLista(['IC1802'], 4)",
                result: "[['IC1802'], ['IC1802'], ['IC1802'], ['IC1802']]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Una lista"
                }
            ],
            code: "Forma 1\ndef crearLista (elemento, veces):\n    resultado = []\n    while veces > 0:\n        resultado += [elemento]\n        veces -= 1\n    return resultado\n\n# Forma 2\ndef crearListaFor (elemento, veces):\n    resultado = []\n    for i in range (veces):\n        resultado += [elemento]\n        \n    return resultado\n",
            inputs: [
                {
                    name: "elemento",
                    type: "Elemento de cualquier tipo"
                },
                {
                    name: "veces",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Crear lista",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne una lista con un elemento repetido n veces"
    },
    {
        call: "multiplicar(lista, elemBuscado, veces)",
        creator: "Diego Mora",
        code: "00040",
        examples: [
            {
                call: "multiplicar([1,2,34], 2, 5)",
                result: "[1, 2, 2, 2, 2, 2, 34]",
                comment: ""
            },
            {
                call: "multiplicar(['j',6,8,10,'a'],'a', 3)",
                result: "['j', 6, 8, 10, 'a', 'a', 'a']",
                comment: ""
            },
            {
                call: "multiplicar([3,[4],5,'six',True],True,2)",
                result: "[3, [4], 5, 'six', True, True]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Una lista"
                }
            ],
            code: "def multiplicar(lista, elemBuscado, veces):\n    resultado = []\n    for elem in lista:\n        if elem == elemBuscado:\n            resultado += [elem]*veces #crearLista(elem, veces)\n        else:\n            resultado += [elem]\n\n    return resultado",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                },
                {
                    name: "elemBuscado",
                    type: "elemento de cualquier tipo"
                },
                {
                    name: "veces",
                    type: "Un número entero positivo"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Multiplicar elemento",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que multiplique un elemento de una lista, n veces."
    },
    {
        call: "getGradesAverage(listaDeNotas)",
        creator: "Diego Mora",
        code: "00041",
        examples: [
            {
                call: "getGradesAverage([90,80,100,90,100,45])",
                result: "84.16 ",
                comment: ""
            },
            {
                call: "getGradesAverage([60,45,69,100])",
                result: "68.5",
                comment: ""
            },
            {
                call: "getGradesAverage([90,54,92,100,98])",
                result: "86.8",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número fraccionario o cero"
                }
            ],
            code: "def getGradesAverage(listaDeNotas):\n    if len(listaDeNotas) != 0:\n        return sumatoria (listaDeNotas) \/ len (listaDeNotas)\n    return 0\n    ",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista de notas"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Obtener promedio",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne el promedio de los valores de la lista."
    },
    {
        call: "getAverage(lista)",
        creator: "Diego Mora",
        code: "00042",
        examples: [
            {
                call: "getAverage([[\"Diego\", \"En curso\", [90,80,100,90], 90],[\"Ana\", \"En curso\", [90,0,0,80], 90]])",
                result: "66.25",
                comment: ""
            },
            {
                call: "getAverage([[\"Fede\", \"En curso\", [70,70,70,0], 90],[\"Allen\", \"En curso\", [90,90,90,90], 90]])",
                result: "71.25",
                comment: ""
            },
            {
                call: "getAverage([[\"Allen\", \"En curso\", [90,90,90,90], 90],[\"Tony\", \"En curso\", [85,80,95,99], 90],[\"Lucas\", \"En curso\", [100,100,100,97], 90]])",
                result: "93.0",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número fraccionario o cero"
                }
            ],
            code: "def getAverage(lista):\n\n    sumaDeNotas = 0\n    cantidadDeNotas = 0\n\n    for estudiante in lista:\n        # Se hacer uso de una funcion que anteriormente se había programado, sumatoria(lista).\n        sumaDeNotas += sumatoria (estudiante[2])\n        cantidadDeNotas += len(estudiante[2])\n\n    if cantidadDeNotas > 0:\n        return sumaDeNotas \/ cantidadDeNotas\n    else:\n        return 0",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista con formato estudiante"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Obtener promedio general",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que obtenga la suma de todas las notas,cantidad de notas y saque el promedio general.\nRecibe una lista con formato estudiante, es decir [[\"Nombre\", \"Estado(En curso\/Aprobado\/Reprobado)\", [Nota1,Nota2,Nota3,...], NotaFinal]], donde las notas son número enteros o fraccionarios."
    },
    {
        call: "actualizarEstado(lista)",
        creator: "Diego Mora",
        code: "00043",
        examples: [
            {
                call: "actualizarEstado([[\"Diego\", \"En curso\", [90,80,100,90], 90],[\"Ana\", \"En curso\", [90,0,0,80], 90]])",
                result: "[['Diego', 'Aprobado', [90, 80, 100, 90], 90.0], ['Ana', 'Reprobado', [90, 0, 0, 80], 42.5]]",
                comment: ""
            },
            {
                call: "actualizarEstado([[\"Fede\", \"En curso\", [70,70,70,0], 90],[\"Allen\", \"En curso\", [90,90,90,90], 90]])",
                result: "[['Fede', 'Reprobado', [70, 70, 70, 0], 52.5], ['Allen', 'Aprobado', [90, 90, 90, 90], 90.0]]",
                comment: ""
            },
            {
                call: "actualizarEstado([[\"Allen\", \"En curso\", [90,90,90,90], 90],[\"Tony\", \"En curso\", [85,80,95,99], 90],[\"Lucas\", \"En curso\", [100,100,100,97], 90]])",
                result: "[['Allen', 'Aprobado', [90, 90, 90, 90], 90.0], ['Tony', 'Aprobado', [85, 80, 95, 99], 89.75], ['Lucas', 'Aprobado', [100, 100, 100, 97], 99.25]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "lista",
                    type: "La lista actualizada"
                }
            ],
            code: "def actualizarEstado(lista):\n    for estudiante in lista:\n        estudiante[3] = getGradesAverage(estudiante[2])\n        if estudiante[3] >= 67.5:\n            estudiante[1] = 'Aprobado'\n        else:\n            estudiante[1] = 'Reprobado'\n\n    return lista",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista con formato estudiante"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Actulizar estado",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que actualice el estado y la nota final del curso de cada estudiante según su promedio, haciendo uso de la función getGradesAverage(listaDeNotas) realizada en un ejercicio anterior.\nRecibe una lista con formato estudiante, es decir [[\"Nombre\", \"Estado(En curso\/Aprobado\/Reprobado)\", [Nota1,Nota2,Nota3,...], NotaFinal]], donde las notas son número enteros o fraccionarios."
    },
    {
        call: "apariciones (elemento, lista)",
        creator: "Diego Mora",
        code: "00044",
        examples: [
            {
                call: "apariciones('a',[5,'a',10.2,True,'a','c'])",
                result: "2",
                comment: ""
            },
            {
                call: "apariciones(True,[True,1,5,'A',True,[True]])",
                result: "3",
                comment: ""
            },
            {
                call: "apariciones(2,['r',2,2,3,7,2,'Active',2])",
                result: "4",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def apariciones (elemento, lista):\n\n    resultado = 0\n    for elem in lista:\n        if elem == elemento:\n            resultado += 1\n    return resultado",
            inputs: [
                {
                    name: "elemento",
                    type: "Un elemento de cualquier tipo"
                },
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Cantidad de apariciones",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne la cantidad de veces que aparece un elemento en una lista."
    },
    {
        call: "esConjunto (lista)",
        creator: "Diego Mora",
        code: "00045",
        examples: [
            {
                call: "esConjunto ([1,5,7,3,2])",
                result: "True",
                comment: ""
            },
            {
                call: "esConjunto ([1,5,[1,7],[1,7],0,[9]])",
                result: "False",
                comment: ""
            },
            {
                call: "esConjunto ([7,3,2,90,56])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def esConjunto (lista):\n\n    for elem in lista:\n        # Usando una función programada en un ejercicio anterior\n        if apariciones(elem,lista)>1:\n            return False\n    return True",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Es conjunto",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorna si la lista es conjunto , es decir si no tiene elementos repetidos"
    },
    {
        call: "sonIguales(conjunto1,conjunto2)",
        creator: "Diego Mora",
        code: "00046",
        examples: [
            {
                call: "sonIguales([898,65,3,8,0],[65,3,8,0,898])",
                result: "True",
                comment: ""
            },
            {
                call: "sonIguales(['r',4,7,'r'],['r',4,7,'r'])",
                result: "False",
                comment: ""
            },
            {
                call: "sonIguales([87,9,1,2,4],[87,9,3,2,4])",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "rue o False",
                    type: "Un booleano"
                }
            ],
            code: "def sonIguales(conjunto1,conjunto2):\n    #Usando la funcion esConjunto(lista) anteriormente realizada\n    if(esConjunto(conjunto1) and esConjunto(conjunto2)):\n        if len(conjunto1) != len (conjunto2):\n            return False\n        for elem in conjunto1:\n            if elem not in conjunto2:\n                return False\n        return True\n    return False",
            inputs: [
                {
                    name: "conjunto1",
                    type: "Una lista"
                },
                {
                    name: "conjunto2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Conjuntos iguales",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne True si los dos conjuntos son iguales"
    },
    {
        call: "unionConjuntos(conjunto1,conjunto2)",
        creator: "Diego Mora",
        code: "00047",
        examples: [
            {
                call: "unionConjuntos([1,2,3,4,5],[5,6,7])",
                result: "[1, 2, 3, 4, 5, 6, 7] ",
                comment: ""
            },
            {
                call: "unionConjuntos(['e',[4],8,0,'i'],['a','o',[4],8,0,'u'])",
                result: "['e', [4], 8, 0, 'i', 'a', 'o', 'u']",
                comment: ""
            },
            {
                call: "unionConjuntos([87,9,1,2,4],[87,9,3,2,4])",
                result: "[87, 9, 1, 2, 4, 3]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "conjunto",
                    type: "Una lista"
                }
            ],
            code: "# Forma 1\ndef unionConjuntos(conjunto1,conjunto2):\n    \n    sumando = []\n    for elem in conjunto2:\n        if elem not in conjunto1:\n            sumando += [elem]\n    return conjunto1 + sumando\n\n# Forma 2\ndef union (conj1, conj2):\n    \n    resultado = conj1\n    for elem in conj2:\n        #Si no esta (elem, resultado):\n        if elem not in resultado:\n            resultado += [elem]\n            #Lo mismo que --> resultado.append(elem)\n\n    return resultado",
            inputs: [
                {
                    name: "conjunto1",
                    type: "Una lista"
                },
                {
                    name: "conjunto2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Union de dos conjuntos",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que genera un conjunto constituido por la union de los dos conjuntos"
    },
    {
        call: "interseccionConjuntos(conjunto1,conjunto2)",
        creator: "Diego Mora",
        code: "00048",
        examples: [
            {
                call: "interseccionConjuntos([1,2,3,4,5],[9,6,7])",
                result: "[]",
                comment: ""
            },
            {
                call: "interseccionConjuntos(['e',[4],8,0,'i'],['a','o',[4],8,0,'u'])",
                result: "[[4], 8, 0]",
                comment: ""
            },
            {
                call: "interseccionConjuntos([87,9,1,2,4],[87,9,3,2,4])",
                result: "[87, 9, 2, 4]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "conjunto",
                    type: "Una lista"
                }
            ],
            code: "def interseccionConjuntos(conjunto1,conjunto2):\n    sumando = []\n    for elem in conjunto2:\n        if elem in conjunto1:\n            sumando += [elem]\n            #Lo mismo que --> resultado.append (elem)\n    return sumando",
            inputs: [
                {
                    name: "conjunto1",
                    type: "Una lista"
                },
                {
                    name: "conjunto2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Interseccion de conjuntos",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que genere un conjunto constituido por la interseccion de los dos conjuntos "
    },
    {
        call: "restrestaConjuntos(conjunto1,conjunto2)",
        creator: "Diego Mora",
        code: "00049",
        examples: [
            {
                call: "restaConjuntos(['e',[4],8,0,'i'],['a','o',[4],8,0,'u'])",
                result: "['e', 'i']",
                comment: ""
            },
            {
                call: "restaConjuntos([5,78,2,90,3],[78,9,3,21])",
                result: "[5, 2, 90]",
                comment: ""
            },
            {
                call: "restaConjuntos([12,54,67,90],[54,90,12,67])",
                result: "[]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "conjunto",
                    type: "Una lista"
                }
            ],
            code: "def restaConjuntos(conjunto1,conjunto2):\n    sumando = []\n    for elem in conjunto1:\n        if elem not in conjunto2:\n            sumando += [elem]\n            #Lo mismo que --> resultado.append (elem) \n\n    return sumando",
            inputs: [
                {
                    name: "conjunto1",
                    type: "Una lista"
                },
                {
                    name: "conjunto2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Resta de conjuntos",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que genere un conjunto constituido por la resta de los elementos del primer conjunto que esten en el segundo conjunto"
    },
    {
        call: "vectoresIguales (v1, v2)",
        creator: "Diego Mora",
        code: "00050",
        examples: [
            {
                call: "vectoresIguales ([6,8,3],[6,8,3])",
                result: "True",
                comment: ""
            },
            {
                call: "vectoresIguales ([6,8,3],[6,8,2])",
                result: "False",
                comment: ""
            },
            {
                call: "vectoresIguales ([7,4,5],[1,5,90])",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def vectoresIguales (v1, v2):\n    return v1 == v2",
            inputs: [
                {
                    name: "v1",
                    type: "Una lista"
                },
                {
                    name: "v2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Vectores iguales",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que verifique si dos vectores son iguales"
    },
    {
        call: "esVectorNulo (vector)",
        creator: "Diego Mora",
        code: "00051",
        examples: [
            {
                call: "esVectorNulo ([])",
                result: "True",
                comment: ""
            },
            {
                call: "esVectorNulo ([1])",
                result: "False",
                comment: ""
            },
            {
                call: "esVectorNulo ([0,1])",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def esVectorNulo (vector):\n\n    for i in vector:\n        if i != 0:\n            return False\n    return True\n\n",
            inputs: [
                {
                    name: "lista",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Vector nulo",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que verifique si un vector es nulo."
    },
    {
        call: "sumarVectores (v1, v2)",
        creator: "Diego Mora",
        code: "00052",
        examples: [
            {
                call: "sumarVectores ([1,2,3],[10,11,12])",
                result: "[11,13,15]",
                comment: ""
            },
            {
                call: "sumarVectores ([4,6,7],[23,65,1])",
                result: "[27, 71, 8]",
                comment: ""
            },
            {
                call: "sumarVectores ([6,34,1,8],[0,6,43,2])",
                result: "[6, 40, 44, 10]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def sumarVectores (v1, v2):\n    resultado = []\n\n    for i in range(len (v1)):\n        #print (\"i: \", i, v1[i] , v2[i], v1[i] + v2[i])\n        resultado.append(v1[i] + v2[i])\n        #Lo mismo que --> resultado += [v1[i] + v2[i]]\n\n    return resultado\n",
            inputs: [
                {
                    name: "v1",
                    type: "Una lista"
                },
                {
                    name: "v2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Suma de vectores",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne la suma de dos vectores de igual orden"
    },
    {
        call: "multiplicarVectores (v1, v2)",
        creator: "Diego Mora",
        code: "00053",
        examples: [
            {
                call: "multiplicarVectores ([1,2,3],[10,11,12])",
                result: "68",
                comment: ""
            },
            {
                call: "multiplicarVectores ([4,6,7],[23,65,1])",
                result: "489",
                comment: ""
            },
            {
                call: "multiplicarVectores ([6,34,1,8],[0,6,43,2]) ",
                result: "263",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "resultado",
                    type: "Un número"
                }
            ],
            code: "def multiplicarVectores (v1, v2):\n    resultado = 0\n\n    for i in range(len(v1)):\n        resultado += v1[i] * v2[i]\n        #print (\"i: \", i, v1[i] , v2[i], v1[i] * v2[i], resultado)\n\n    return resultado",
            inputs: [
                {
                    name: "v1",
                    type: "Una lista"
                },
                {
                    name: "v2",
                    type: "Una lista"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Multiplicacion de vectores",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne la multiplicacion de dos vectores de mismo orden"
    },
    {
        call: "esCuadrada(matriz)",
        creator: "Diego Mora",
        code: "00054",
        examples: [
            {
                call: "esCuadrada([[1,2,3],[4,5,7],[9,10,11]])",
                result: "True",
                comment: ""
            },
            {
                call: "esCuadrada([[1,2],[4,5,7],[9,10,11]])",
                result: "False",
                comment: ""
            },
            {
                call: "esCuadrada([[1,2],[5,7]])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def esCuadrada(matriz):\n    return len(matriz) == len (matriz[0])",
            inputs: [
                {
                    name: "matriz",
                    type: "Una matriz"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Matriz cuadrada",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne True si la matriz es cuadrada"
    },
    {
        call: "getDiagonal (matriz)",
        creator: "Diego Mora",
        code: "00055",
        examples: [
            {
                call: "getDiagonal([[1,2,3],[4,5,7],[9,10,11]])",
                result: "[1, 5, 11] ",
                comment: ""
            },
            {
                call: "getDiagonal([[1,2],[5,7]])",
                result: "[1, 7]",
                comment: ""
            },
            {
                call: "getDiagonal([[1,5,3,4],[1,8,5,73],[4,9,10,11],[5,2,1,0]])",
                result: "[1, 8, 10, 0]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "diagonal",
                    type: "Una lista"
                }
            ],
            code: "def getDiagonal (matriz):\n    diagonal = []\n    for i in range (len(matriz)):\n        diagonal.append(matriz[i][i])\n        #Es lo mismo que --> diagonal += [matriz[i][i]]\n    return diagonal\n",
            inputs: [
                {
                    name: "matriz",
                    type: "Una matriz cuadrada"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Obtener diagonal",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne la diagonal de una matriz cuadrada"
    },
    {
        call: "validarMatriz(matriz)",
        creator: "Diego Mora",
        code: "00056",
        examples: [
            {
                call: "validarMatriz([[1,2,3],[4,5,7],[9,10,11]])",
                result: "True",
                comment: ""
            },
            {
                call: "validarMatriz([[2,3],[4,5,7],[9,10,11]])",
                result: "False",
                comment: ""
            },
            {
                call: "validarMatriz([[5,78,9,3],[4,5,7,5],[9,1,0,78]])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "# Foma 1\ndef validarMatriz(matriz):\n    if len(matriz) == 0:\n        return False\n\n    tamano = len(matriz[0])\n    for fila in matriz:\n        if len(fila) != tamano or fila == []:\n            return False\n\n    return True\n\n# Foma 2\ndef validarMatriz2(M):\n    if len(M) == 0:\n        return False\n\n    for i in range(len(M)-1):\n        print (i, i+1, M[i], M[i+1], len(M[i]), len(M[i+1]))\n        if len(M[i]) != len(M[i+1]):\n            return False\n    return True\n",
            inputs: [
                {
                    name: "matriz",
                    type: "Una matriz "
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Validar matriz",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne True si todas las filas tienen la misma cantidad de columnas"
    },
    {
        call: "getContradiagonal(M)",
        creator: "Diego Mora",
        code: "00057",
        examples: [
            {
                call: "getContradiagonal([[1,2,3],[4,5,7],[9,10,11]])",
                result: "[3, 5, 9]",
                comment: ""
            },
            {
                call: " getContradiagonal([[1,2],[5,7]])",
                result: "[2, 5]",
                comment: ""
            },
            {
                call: "getContradiagonal([[1,5,3,4],[1,8,5,73],[4,9,10,11],[5,2,1,0]])",
                result: "[4, 5, 9, 5]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "contraD",
                    type: "Una lista"
                }
            ],
            code: "\n# Forma 1\ndef getContradiagonal(M):\n    fila = 0\n    columna = len(M)-1\n    contraD = []\n\n    for i in range(len(M)):\n        #print (fila, columna, M[fila][columna])\n        contraD.append(M[fila][columna])\n        fila += 1\n        columna -= 1\n\n    return contraD\n\n# Forma 2\ndef getContradiagonal2(M):\n    columna = len(M)-1\n    contraD = []\n\n    for fila in M:\n        #print (fila, columna, fila[columna])\n        contraD.append(fila[columna])\n        columna -= 1\n\n    return contraD\n\n# Forma 3\ndef getContradiagonal3(M):\n    contraD = []\n    for i in range(len(M)):\n        #print (i, (len(M)-1)-i, M[i][(len(M)-1)-i], \"len(M)-1)-i\")\n        contraD.append(M[i][(len(M)-1)-i])\n    return contraD\n",
            inputs: [
                {
                    name: "M",
                    type: "Una matriz cuadrada"
                }
            ]
        },
        level: "2",
        created: "2021-06-09",
        name: "Diagonal inversa",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne la contra diagonal de la matriz cuadrada "
    },
    {
        call: "getColumn(M, columnNbr)",
        creator: "Diego Mora",
        code: "00058",
        examples: [
            {
                call: "getColumn([[1,2,3],[4,5,7],[9,10,11]],2)",
                result: "[3, 7, 11]",
                comment: ""
            },
            {
                call: "getColumn([[1,5,3,4],[1,8,5,73],[4,9,10,11],[5,2,1,0]],1)",
                result: "[5, 8, 9, 2]",
                comment: ""
            },
            {
                call: "getColumn([[11,15,32,5],[6,84,5,7])",
                result: "[11, 6]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "column",
                    type: "Una lista "
                }
            ],
            code: "def getColumn(M, columnNbr):\n    column = []\n\n    for fila in M:\n        column.append(fila[columnNbr])\n    return column\n",
            inputs: [
                {
                    name: "M",
                    type: "Una matriz"
                },
                {
                    name: "columnNbr",
                    type: "Un número entero que indica la columna"
                }
            ]
        },
        level: "1",
        created: "2021-06-09",
        name: "Obtener columna",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que retorne una columna solicitada"
    },
    {
        call: "vectorPorMatriz (vector, M)",
        creator: "Diego Mora",
        code: "00059",
        examples: [
            {
                call: "vectorPorMatriz([3,5,6],[[1,2,3],[4,5,7],[9,10,11]])",
                result: "[77, 91, 110] ",
                comment: ""
            },
            {
                call: "vectorPorMatriz([3,6],[[3,5],[3,7],[2,1],[0,9]])",
                result: "[27, 57]",
                comment: ""
            },
            {
                call: "vectorPorMatriz([3,6,6,1],[[2,1],[12,9],[67,3],[0,0]])",
                result: "[480, 75]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "vectorResultado",
                    type: "Una lista"
                }
            ],
            code: "def vectorPorMatriz (vector, M):\n\n    #obtiene el largo de la fila 0 que es las columans\n    cantidadColumnas = len(M[0])\n    vectorResultado = []\n    for col in range (cantidadColumnas):\n        columnaActual = getColumn(M, col)\n        multiplicacion = multiplicarVectores (vector, columnaActual)\n        vectorResultado.append (multiplicacion)\n        print (col, columnaActual, multiplicacion, vectorResultado)\n\n    return vectorResultado",
            inputs: [
                {
                    name: "V",
                    type: "Una lista"
                },
                {
                    name: "M",
                    type: "Una matriz"
                }
            ]
        },
        level: "2",
        created: "2021-06-09",
        name: "Multiplicación vector-matriz",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que multiplique un vector por una matriz, recordando la propiedad que permite la multiplicación de matrices."
    },
    {
        call: "multiplicarMatrices (M1, M2)",
        creator: "Diego Mora",
        code: "00060",
        examples: [
            {
                call: "multiplicarMatrices([[1,2,3],[4,5,7]],[[9,10],[91,0],[1,2]])",
                result: "[[194, 16], [498, 54]]",
                comment: ""
            },
            {
                call: "multiplicarMatrices([[2,0],[5,9]],[[0,1,2,3,4],[1,0,3,12,5]])",
                result: "[[0, 2, 4, 6, 8], [9, 5, 37, 123, 65]]",
                comment: ""
            },
            {
                call: "multiplicarMatrices([[1,1,1,1],[0,5,2,1]],[[4,10],[6,0],[1,2],[0,0]])",
                result: "[[11, 12], [32, 4]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "res",
                    type: "Una matriz"
                }
            ],
            code: "def multiplicarMatrices (M1, M2):\n    res = []\n\n    for fila in M1:\n        res.append(vectorPorMatriz(fila, M2))\n    return res",
            inputs: [
                {
                    name: "M1",
                    type: "Una matriz"
                },
                {
                    name: "M2",
                    type: "Una matriz"
                }
            ]
        },
        level: "2",
        created: "2021-06-09",
        name: "Multiplica matrices",
        section: "Listas, vectores y matrices",
        details: "Realice un programa que multiplique dos matrices nxp y pxm, puede hacer uso de alguno de los programas hechos anteriormente.\n"
    },
    {
        call: "arbol (centro, hijoizquierdo, hijoderecho)",
        creator: "Diego Mora",
        code: "00061",
        examples: [
            {
                call: "arbol(100,[],[])",
                result: "100",
                comment: "En este caso este árbol aún no tiene hijos"
            },
            {
                call: "arbol(100,[90,80],[110,105])",
                result: "[10, [5, 4, 6], [7, 8, 9]]",
                comment: ""
            },
            {
                call: "arbol(10,[5,4,6],[7,8,9])",
                result: "[10, [5, 4, 6], [7, 8, 9]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def arbol (centro, hijoizquierdo, hijoderecho):\n    if hijoizquierdo == [] and hijoderecho == []:\n        return centro\n    else:\n        return [centro] + [hijoizquierdo] + [hijoderecho]\n\n",
            inputs: [
                {
                    name: "centro",
                    type: "Un valor para la raiz"
                },
                {
                    name: "hijoizquierdo",
                    type: "Una lista de un subarbol izquierdo"
                },
                {
                    name: "hijoderecho",
                    type: "Una lista de un subarbol derecho"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Árbol",
        section: "Árboles",
        details: "Realice una función que retorne una lista que simboliza un árbol, por lo que se conforma por hijo derecha e izquierdo y el valor que simboliza la raíz."
    },
    {
        call: "atomo(x)",
        creator: "Diego Mora",
        code: "00062",
        examples: [
            {
                call: "atomo([100, [80, 70, 85], [120, 110, 125]])",
                result: "False",
                comment: ""
            },
            {
                call: "atomo([100, 1]) ",
                result: "False",
                comment: ""
            },
            {
                call: "atomo(100)",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def atomo(x):\n    return not isinstance (x, list)\n",
            inputs: [
                {
                    name: "x",
                    type: "Un valor o un subárbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Átomo",
        section: "Árboles",
        details: "Realice una función que retorne True si el parámetro dado no es lista, y False si es lista; ésta servirá para otras funciones del árbol para saber  si es un valor o un subarbol"
    },
    {
        call: "raiz (arbol)",
        creator: "Diego Mora",
        code: "00063",
        examples: [
            {
                call: "raiz([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "100",
                comment: ""
            },
            {
                call: "raiz([40, 30, 45])",
                result: "40",
                comment: ""
            },
            {
                call: "raiz([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "1",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "valor",
                    type: "Valor que representa la raíz"
                }
            ],
            code: "def raiz (arbol):\n    if atomo(arbol):\n        return arbol\n    else:\n        return arbol[0]\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Árbol o valor"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Raiz de un árbol",
        section: "Árboles",
        details: "Realice una función que devuelva la raiz de un árbol."
    },
    {
        call: "hijoizq(arbol)",
        creator: "Diego Mora",
        code: "00064",
        examples: [
            {
                call: "hijoizq([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[80, [70, 65, []], 85] ",
                comment: ""
            },
            {
                call: "hijoizq([40, 30, 45])",
                result: "30",
                comment: ""
            },
            {
                call: "hijoizq([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "[3, 5, 2]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "subarbol",
                    type: "Lista que representa hijo izquierdo"
                }
            ],
            code: "def hijoizq(arbol):\n    if atomo(arbol):\n        return []\n    else:\n        return arbol[1]\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Hijo izquierdo",
        section: "Árboles",
        details: "Realice una función que retorne el hijo izquierdo de un árbol."
    },
    {
        call: "hijoder(arbol)",
        creator: "Diego Mora",
        code: "00065",
        examples: [
            {
                call: "hijoder([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[120, 110, 125]",
                comment: ""
            },
            {
                call: "hijoder([40, 30, 45])",
                result: "45",
                comment: ""
            },
            {
                call: "hijoder([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "[12, 11, [14, 13, 15]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "subarbol",
                    type: "Lista que representa hijo izquierdo"
                }
            ],
            code: "def hijoder(arbol):\n    if atomo(arbol):\n        return []\n    else:\n        return arbol[2]\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Hijo derecho",
        section: "Árboles",
        details: "Realice una función que retorne el hijo derecho de un árbol."
    },
    {
        call: "hoja(nodo)",
        creator: "Diego Mora",
        code: "00066",
        examples: [
            {
                call: "hoja([10,[],[]])",
                result: "True",
                comment: ""
            },
            {
                call: "hoja([40, 30, 45])",
                result: "False",
                comment: ""
            },
            {
                call: "hoja([10,[4],[]])",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def hoja(nodo):\n    if nodo == []:\n        return False\n    elif atomo(nodo):\n        return True\n    elif hijoizq(nodo) == [] and hijoder(nodo) == []:\n        return True\n    else:\n        return False",
            inputs: [
                {
                    name: "nodo",
                    type: "árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Hoja",
        section: "Árboles",
        details: "Realice una función que indique si un árbol o nodo es hoja, es decir, no tiene ni hijo izquierdo ni hijo derecho."
    },
    {
        call: "insertar (ele, arb)",
        creator: "Diego Mora",
        code: "00067",
        examples: [
            {
                call: "insertar (65, [100, [80, 70, 85], [120, 110, 125]])",
                result: "[100, [80, [70, 65, []], 85], [120, 110, 125]]",
                comment: ""
            },
            {
                call: "insertar (124, [100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[100, [80, [70, 65, []], 85], [120, 110, [125, 124, []]]]",
                comment: ""
            },
            {
                call: "insertar (126,[100, [80, [70, 65, []], 85], [120, 110, [125, 124, []]]])",
                result: "[100, [80, [70, 65, []], 85], [120, 110, [125, 124, 126]]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def insertar (ele, arb):\n    if arb == []:\n        return ele\n    elif ele <= raiz(arb):\n        return arbol (raiz(arb), insertar(ele, hijoizq(arb)),\n                      hijoder(arb))\n    else:\n        return arbol (raiz(arb), hijoizq(arb), insertar(ele,hijoder(arb)))\n",
            inputs: [
                {
                    name: "ele",
                    type: "elemento identificador del nodo del árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Insertar en árbol binario",
        section: "Árboles",
        details: "Realice una función que inserte un elemento en un árbol, puede probar para el arbol  [100, [80, 70, 85], [120, 110, 125]]."
    },
    {
        call: "enOrden(arbol)",
        creator: "Diego Mora",
        code: "00068",
        examples: [
            {
                call: "enOrden([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "65 - 70 - 80 - 85 - 100 - 110 - 120 - 125",
                comment: ""
            },
            {
                call: "enOrden([40, 30, 45])",
                result: "30 - 40 - 45",
                comment: ""
            },
            {
                call: "enOrden([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "5 - 3 - 2 - 1 - 11 - 12 - 13 - 14 - 15",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def enOrden(arbol):\n    if arbol != []:\n        enOrden(hijoizq(arbol))\n        print(raiz(arbol),end=' - ')\n        enOrden(hijoder(arbol))\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Recorrido en orden",
        section: "Árboles",
        details: "Realice una función que haga un recorrido en orden de un árbol (hijoizq-raiz-hijoder) y lo imprima."
    },
    {
        call: "inOrden(arbol)",
        creator: "Diego Mora",
        code: "00069",
        examples: [
            {
                call: "inOrden([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[65, 70, 80, 85, 100, 110, 120, 125]",
                comment: ""
            },
            {
                call: "inOrden([40, 30, 45]) ",
                result: "[30, 40, 45]",
                comment: ""
            },
            {
                call: "inOrden([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "[5, 3, 2, 1, 11, 12, 13, 14, 15]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def inOrden(arbol):\n    if arbol!=[]:\n        return inOrden(hijoizq(arbol)) + [raiz(arbol)] + inOrden(hijoder(arbol))\n    return []",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Recorrido en orden ",
        section: "Árboles",
        details: "Realice una función que haga un recorrido en orden de un árbol (hijoizq+raiz+hijoder) y lo devuelva en una lista."
    },
    {
        call: "pre_orden(arbol)",
        creator: "Diego Mora",
        code: "00070",
        examples: [
            {
                call: "pre_orden([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[100, 80, 70, 65, 85, 120, 110, 125]",
                comment: ""
            },
            {
                call: "pre_orden([40, 30, 45])",
                result: "[40, 30, 45]",
                comment: ""
            },
            {
                call: "pre_orden([1, [3,5,2], [12,11,[14,13,15]]]) ",
                result: "[1, 3, 5, 2, 12, 11, 14, 13, 15]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def pre_orden(arbol):\n    if arbol == []:\n        return []\n    elif atomo(arbol):\n        return [arbol]\n    else:\n        return [raiz(arbol)] + pre_orden(hijoizq(arbol)) + pre_orden(hijoder(arbol))\n\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Preorden",
        section: "Árboles",
        details: "Realice una función que haga un recorrido en preorden de un árbol (raiz+hijoizq+hijoder) y lo devuelva en una lista.\n"
    },
    {
        call: "post_orden(arbol)",
        creator: "Diego Mora",
        code: "00071",
        examples: [
            {
                call: "post_orden([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[65, 70, 85, 80, 110, 125, 120, 100]",
                comment: ""
            },
            {
                call: "post_orden([40, 30, 45])",
                result: "[30, 45, 40]",
                comment: ""
            },
            {
                call: "post_orden([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "[5, 2, 3, 11, 13, 15, 14, 12, 1]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def post_orden(arbol):\n    if arbol == []:\n        return []\n    elif atomo(arbol):\n        return [arbol]\n    else:\n        return post_orden(hijoizq(arbol)) + post_orden(hijoder(arbol)) + [raiz(arbol)]\n\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Postorden",
        section: "Árboles",
        details: "Realice una función que haga un recorrido en post-orden de un árbol (hijoizq+hijoder+raiz) y lo devuelva en una lista."
    },
    {
        call: "plastar (arbol)",
        creator: "Diego Mora",
        code: "00072",
        examples: [
            {
                call: "aplastar([100, [80, [70, 65, []], 85], [120, 110, 125]])",
                result: "[100, 80, 70, 65, 85, 120, 110, 125]",
                comment: ""
            },
            {
                call: "aplastar([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "[52, 30, 15, 35, 38, 70, 60, 65, 80]",
                comment: ""
            },
            {
                call: "aplastar([1, [3,5,2], [12,11,[14,13,15]]])",
                result: "[1, 3, 5, 2, 12, 11, 14, 13, 15]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Un árbol representado como una lista."
                }
            ],
            code: "def aplastar(arbol):\n    if arbol == []:\n        return []\n    else:\n        return [raiz(arbol)]+aplastar(hijoizq(arbol))+ aplastar(hijoder(arbol))\n\n",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol."
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Aplastar árbol",
        section: "Árboles",
        details: "Realice una función que convierta un árbol en una lista."
    },
    {
        call: "cantidadHojas(arbol)",
        creator: "Diego Mora",
        code: "00073",
        examples: [
            {
                call: "cantidadHojas([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "4",
                comment: ""
            },
            {
                call: "cantidadHojas([100, [80, [70, 65, 74], 85], [120, 110, 125]])",
                result: "5",
                comment: ""
            },
            {
                call: "cantidadHojas([100, [80, [70, 65, 74], 85], [120, 110, [125, 124, 126]]])",
                result: "4",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def cantidadHojas(arbol):\n        if arbol == []:\n                return 0\n        elif hoja(arbol):\n                return 1\n        else:\n                return cantidadHojas(hijoizq(arbol))+ cantidadHojas(hijoder(arbol))\n        ",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Cantidad de hojas",
        section: "Árboles",
        details: "Realice una función que cuántas hojas tiene un árbol."
    },
    {
        call: "esta(valor, arbol)",
        creator: "Diego Mora",
        code: "00074",
        examples: [
            {
                call: "esta(60, [52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "True",
                comment: ""
            },
            {
                call: "esta(126, [100, [80, [70, 65, 74], 85], [120, 110, 125]])",
                result: "False",
                comment: ""
            },
            {
                call: "esta(5, [20,[10, 5, 15],[30, 25, 35]])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def esta(valor, arbol):\n        if arbol == []:\n                return False\n        elif raiz(arbol) == valor:\n                return True\n        elif raiz(arbol) < valor:\n                return esta(valor, hijoder(arbol))\n        else:\n                return esta(valor,hijoizq(arbol))\n  ",
            inputs: [
                {
                    name: "valor",
                    type: "Un número entero que representa un nodo en el árbol"
                },
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Está en árbol",
        section: "Árboles",
        details: "Realice una función que verifique si un nodo se encuentra en un árbol."
    },
    {
        call: "localizar(ele, arb)",
        creator: "Diego Mora",
        code: "00075",
        examples: [
            {
                call: "localizar(60, [52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "60  en arbol  [52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]] se va a la derecha            60  en arbol  [70, [60, [], 65], 80] se va a la izquierda. True",
                comment: ""
            },
            {
                call: "localizar(126, [100, [80, [70, 65, 74], 85], [120, 110, 125]]) ",
                result: "126  en arbol  [100, [80, [70, 65, 74], 85], [120, 110, 125]] se va a la derecha            126  en arbol  [120, 110, 125] se va a la derecha            126  en arbol  125 se va a la derecha. False",
                comment: ""
            },
            {
                call: "localizar(5, [20,[10, 5, 15],[30, 25, 35]]) ",
                result: "5  en arbol  [20, [10, 5, 15], [30, 25, 35]] se va a la izquierda            5  en arbol  [10, 5, 15] se va a la izquierda. True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def localizar(ele, arb):\n    if arb == []:\n        return False\n    elif ele == raiz (arb):\n        return True\n    elif ele < raiz(arb):\n        print (ele, \" en arbol \", arb, \"se va a la izquierda\")\n        return localizar(ele, hijoizq(arb))\n    else:\n        print (ele, \" en arbol \", arb, \"se va a la derecha\")\n        return localizar(ele, hijoder(arb))\n\n",
            inputs: [
                {
                    name: "ele",
                    type: "Un número entero que representa un nodo en el árbol"
                },
                {
                    name: "arb",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Localizar nodo",
        section: "Árboles",
        details: "Realice una función que imprima hacia qué lado debe ir en cada sub-árbol para llegar a un determinado nodo."
    },
    {
        call: "mayor(arbol)",
        creator: "Diego Mora",
        code: "00076",
        examples: [
            {
                call: "mayor([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "80",
                comment: ""
            },
            {
                call: "mayor([100, [80, [70, 65, 74], 85], [120, 110, []]])",
                result: "120",
                comment: ""
            },
            {
                call: "mayor([20,[10, 5, 15],[30, 25, 35]])",
                result: "35",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero que representa un nodo"
                }
            ],
            code: "def mayor(arbol):\n    if hijoder(arbol) == []:\n        return raiz(arbol)\n    else:\n        return mayor(hijoder(arbol))",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Nodo mayor",
        section: "Árboles",
        details: "Realice una función que determine el nodo mayor de un árbol binario ordenado."
    },
    {
        call: "eliminar(ele, a)",
        creator: "Diego Mora",
        code: "00077",
        examples: [
            {
                call: "eliminar(30, [52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "[52, [15, [], [35, [], 38]], [70, [60, [], 65], 80]]",
                comment: ""
            },
            {
                call: "eliminar(120,[100, [80, [70, 65, 74], 85], [120, 110, []]])",
                result: "[100, [80, [70, 65, 74], 85], 110]",
                comment: ""
            },
            {
                call: "eliminar(35, [20,[10, 5, 15],[30, 25, 35]])",
                result: "[20, [10, 5, 15], [30, 25, []]]",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def eliminar(ele, a):\n    if a == []:\n        return []\n    elif ele < raiz(a):\n        return arbol (raiz(a), eliminar(ele, hijoizq(a)),hijoder(a))\n    elif ele > raiz(a):\n        print(raiz(a),hijoizq(a),hijoder(a))\n        return arbol (raiz(a),hijoizq(a), eliminar(ele, hijoder(a)))\n    # nodo no tiene hijos\n    elif hijoder(a) == [] and hijoizq(a) == []:\n        return []\n    # nodo no tiene hijo izquierdo\n    elif hijoizq(a) == []:\n        return hijoder(a)\n    # nodo no tiene hijo derecho\n    elif hijoder(a) == []:\n        return hijoizq(a)\n    else:\n        return arbol(mayor(hijoizq(a)),eliminar(mayor(hijoizq(a)),hijoizq(a)),hijoder(a)) ",
            inputs: [
                {
                    name: "ele",
                    type: "Un número entero que representa un nodo en el árbol"
                },
                {
                    name: "a",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "3",
        created: "2021-06-17",
        name: "Eliminar nodo",
        section: "Árboles",
        details: "Realice una función que elimine un nodo de un árbol, tomando en cuenta los siguientes casos:\ncaso1: Borrar un nodo sin hijos, se borra simplemente.\ncaso2: Borrar un nodo con 1 hijo, el hijo lo sustituye.\ncaso3: Sustituirlo por el mayor de los menores o el menor de los mayores."
    },
    {
        call: "cant_nodos(arb)",
        creator: "Diego Mora",
        code: "00078",
        examples: [
            {
                call: "cant_nodos([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "9",
                comment: ""
            },
            {
                call: "cant_nodos([100, [80, [70, 65, 74], 85], 120])",
                result: "7",
                comment: ""
            },
            {
                call: "cant_nodos([20,[10, 5, 15],[30, 25, 35]])",
                result: "7",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def cant_nodos(arb):\n    if arb == []:\n        return 0\n    else:\n        return 1 + cant_nodos(hijoder(arb)) +  cant_nodos(hijoizq(arb))",
            inputs: [
                {
                    name: "arb",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Cantidad de nodos",
        section: "Árboles",
        details: "Realice una función que cuente cuántos nodos hay en un árbol."
    },
    {
        call: "profundidad (arb)",
        creator: "Diego Mora",
        code: "00079",
        examples: [
            {
                call: "profundidad([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "4",
                comment: ""
            },
            {
                call: "profundidad([100, [80, [70, 65, 74], 85], 120])",
                result: "4",
                comment: ""
            },
            {
                call: "profundidad([20,[10, 5, 15],[30, 25, 35]])",
                result: "3",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def profundidad (arb):\n    if arb == []:\n        return 0\n    else:\n        return 1 + max (profundidad(hijoder(arb)), profundidad(hijoizq(arb)))\n",
            inputs: [
                {
                    name: "arb",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "2",
        created: "2021-06-17",
        name: "Profubdidad de un árbol",
        section: "Árboles",
        details: "Realice una función que devuelva la profundidad de un árbol."
    },
    {
        call: "altura(a)",
        creator: "Diego Mora",
        code: "00080",
        examples: [
            {
                call: "altura([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "3",
                comment: ""
            },
            {
                call: "altura([100, [80, [70, 65, 74], 85], 120])",
                result: "3",
                comment: ""
            },
            {
                call: "altura([20,[10, 5, 15],[30, 25, 35]])",
                result: "2",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def altura(a):\n    return profundidad (a) -1\n",
            inputs: [
                {
                    name: "a",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Altura de un árbol",
        section: "Árboles",
        details: "Realice una función que devuelva la altura de un árbol."
    },
    {
        call: "apariciones(ele, arb)",
        creator: "Diego Mora",
        code: "00081",
        examples: [
            {
                call: "apariciones(60,[52, [30, 15, [35, [], 38]], [70, [60, 60, 65], 80]])",
                result: "2",
                comment: ""
            },
            {
                call: "apariciones(100,[100, [80, [70, 65, 74], 85], 120])",
                result: "1",
                comment: ""
            },
            {
                call: "apariciones(35,[20, [10, 5, 15], [30, 25, [35, [35, 35, []], []]]])",
                result: "2",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero positivo o cero"
                }
            ],
            code: "def apariciones(ele, arb):\n    if arb == []:\n        return 0\n    elif raiz(arb) == ele:\n        return 1 + apariciones(ele,hijoder(arb)) +  apariciones(ele,hijoizq(arb))\n    else:        \n        return 0 + apariciones(ele,hijoder(arb)) +  apariciones(ele,hijoizq(arb))",
            inputs: [
                {
                    name: "ele",
                    type: "Un número entero que representa un nodo en el árbol"
                },
                {
                    name: "arb",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Apariciones",
        section: "Árboles",
        details: "Realice una función que determine cuántas veces aparece un elemento en un árbol."
    },
    {
        call: "apareceUnaVez (ele, arb)",
        creator: "Diego Mora",
        code: "00082",
        examples: [
            {
                call: "apareceUnaVez(60,[52, [30, 15, [35, [], 38]], [70, [60, 60, 65], 80]])",
                result: "False",
                comment: ""
            },
            {
                call: "apareceUnaVez(100,[100, [80, [70, 65, 74], 85], 120])",
                result: "True",
                comment: ""
            },
            {
                call: "apareceUnaVez(35,[20, [10, 5, 15], [30, 25, [35, [35, 35, []], []]]])",
                result: "False",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Una lista ",
                    type: "Lista que representa un árbol"
                }
            ],
            code: "def apareceUnaVez (ele, arb):\n    return apariciones(ele,arb) <= 1",
            inputs: [
                {
                    name: "ele",
                    type: "Un número entero que representa un nodo en el árbol"
                },
                {
                    name: "arb",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "1",
        created: "2021-06-17",
        name: "Aparece una vez",
        section: "Árboles",
        details: "Realice una función que determine si uel valor de un nodo aparece una única vez."
    },
    {
        call: "esConjunto(a)",
        creator: "Diego Mora",
        code: "00083",
        examples: [
            {
                call: "esConjunto([52, [30, 15, [35, [], 38]], [70, [60, 60, 65], 80]])",
                result: "False",
                comment: ""
            },
            {
                call: "esConjunto([100, [80, [70, 65, 74], 85], 120])",
                result: "True",
                comment: ""
            },
            {
                call: "esConjunto([20, [10, 5, 15], [30, 25, 35]])",
                result: "True",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "True o False",
                    type: "Un booleano"
                }
            ],
            code: "def esConjunto(a):\n    if a == []:\n        return True\n    return esConjuntoAux(a,a)\n\n#Función auxiliar\ndef esConjuntoAux (a1,a2):\n    if (a1 == []):\n        return True\n    else:\n        return apareceUnaVez(raiz(a1), a2) and esConjuntoAux(hijoizq(a1),a2) and esConjuntoAux(hijoder(a1),a2)\n",
            inputs: [
                {
                    name: "a",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "3",
        created: "2021-06-17",
        name: "Es conjunto",
        section: "Árboles",
        details: "Realice una función o funcines para determinar si un árbol es conjunto, es decir si no tiene valores de nodos repetidos."
    },
    {
        call: "mayor(arbol)",
        creator: "Diego Mora",
        code: "00084",
        examples: [
            {
                call: "mayorABD([52, [30, 15, [35, [], 38]], [70, [60, [], 65], 80]])",
                result: "80",
                comment: ""
            },
            {
                call: "mayorABD([100, [80, [70, 65, 74], 85], [120, 110, []]])",
                result: "120",
                comment: ""
            },
            {
                call: "mayorABD([20,[10, 5, 15],[30, 25, 35]])",
                result: "35",
                comment: ""
            }
        ],
        solution: {
            outputs: [
                {
                    name: "Un número",
                    type: "Un número entero que representa un nodo"
                }
            ],
            code: "def mayorABD(arbol):\n\n    #Si es un valor\n    if atomo(arbol):\n        return arbol\n    elif hijoizq(arbol) != [] and hijoder(arbol) != []:\n        return max(raiz(arbol), mayorABD(hijoizq(arbol)), mayorABD(hijoder(arbol)))\n    elif hijoizq(arbol) != []:\n        return max(raiz(arbol), mayorABD(hijoizq(arbol)))\n    else:\n        return max(raiz(arbol), mayorABD(hijoder(arbol)))",
            inputs: [
                {
                    name: "arbol",
                    type: "Lista que representa un árbol"
                }
            ]
        },
        level: "3",
        created: "2021-06-17",
        name: "Nodo mayor",
        section: "Árboles",
        details: "Realice una función que determine el nodo mayor de un árbol binario desordenado."
    }
]*/