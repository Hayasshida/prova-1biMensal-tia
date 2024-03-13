// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "Quem fundou a escola foi o Jorge Lisboa"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos Administração, Biotecnologia, Edificações, Enfermargem, Informática, Mecatrônica e Games"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular deve entrar no site www.bentoquirino.com.br, e para rematricular faça o mesmo"
}

// Matricular e rematricular
export const palavrasPapoFurado = {
    probablyWords: [
        "cachorro", "etec", "cotil", "cotuca", "bentão", "gato", "animal", "gosto", "amor", "futebol", "golf", "basquete", "bola", "crescer", "objetivo", "Raphel di Santo", "Pedro", "Hayasdiha", "Meira", "Murilo"
    ],
    matched: 0,
    answer: "Desculpe, eu somente respondo perguntas sobre o Bento Quirino"
}

export const bancos = [palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasPapoFurado]

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição

function showAnswer(answer) {
    // Retorne uma string como resposta
    // Exemplo: "Minha resposta"
    return answer
}

export function mostProbablyQuestion() {
    let matches = [
        ...bancos.map(banco => banco.matched)
    ]

    const indiceDoMatchMaior = matches.indexOf(Math.max(...matches))

    // Se a pergunta tiver qualquer palavra de "papo furado" já retornamos sua resposta
    // Fizemos isso porque caso o usuário mande qualquer palavra do papo furado, independente das outras palavras já consideramos a pergunta inválida, pois o banco de "papo furado" contém apenas palavras extremamente específicas
    if(palavrasPapoFurado.matched > 0) {
        return showAnswer(palavrasPapoFurado.answer)
    }

    // Caso todos deem iguais, retornamos por padrão o papo furado
    if(todosOsMatchesSaoIguais(matches, Math.max(...matches))) {
        return showAnswer(palavrasPapoFurado.answer)
    }

    return showAnswer(bancos[indiceDoMatchMaior].answer)
}

function todosOsMatchesSaoIguais(matches = [], indiceMaior) {
    let quantidadeDeVezesIgualAoMaior = 0

    matches.forEach(match => {
        if(match === indiceMaior) {
            quantidadeDeVezesIgualAoMaior++
        }
    })

    if(quantidadeDeVezesIgualAoMaior == matches.length) {
        return true
    } else {
        return false
    }
}


