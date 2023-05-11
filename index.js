/* Script that takes in string and gives output using openai chatapi
 * For one off questions
 */

const openai = require('./openai')

// Calls models endpoint
// Use this to test connection
const getModels = async () => {
	const models = await openai.listModels()
	console.log(models.data)
}
//getModels()

// Takes in String
// Calls chat endpoint
// Returns output string
const chat = async (input) => {
    let data = [{"role": "user", "content": input}]
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: data
    })
    return completion.data.choices[0].message.content
}

process.stdin.setEncoding('utf8')
process.stdin.on('data', async (data) => {
    const output = await chat(data)
    console.log(output)
})
