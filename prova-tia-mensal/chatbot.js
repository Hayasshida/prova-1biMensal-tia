import { bancos, mostProbablyQuestion } from "./can-i-answer.js";


const prompt = "Quem fundou o colégio?"

console.log("\n");
console.log("[ChatBot] Olá, sou o assistente virtual do Bento Quirino, em que posso te ajudar?");
console.log("\n");
console.log(`[User] ${prompt}`);
console.log("\n");
console.log(`[ChatBot] ${responderPergunta(prompt)}`);
console.log("\n");

function responderPergunta(pergunta) {
    const perguntaPreparada = preperarPergunta(pergunta)

    perguntaPreparada.forEach(palavra => {
        bancos.forEach(banco => {
            if(banco.probablyWords.some(palavraDoBanco => palavraDoBanco === palavra)) {
                banco.matched++
            }
        })
    })
    

    
    return mostProbablyQuestion()
}

function preperarPergunta(pergunta = "") {

    pergunta = pergunta.toLowerCase()

    const perguntaArray = pergunta.split(" ")
    const perguntaSemInterrogacao = perguntaArray.map(palavra => {
        return palavra.replace("?","")
    })

    return perguntaSemInterrogacao
}