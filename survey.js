const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let answers = {};

rl.question('What do you think of Node.js? ', (answer) => {
    answers.thinkOfNode = answer;

    rl.question("What's your name?", (name) => {
        answers.name = name;

        rl.question("What's an activity you like doing?", (doing) => {
            answers.activity = doing;

            rl.question("What do you listen to while doing that?", (listen) => {
                answers.listen = listen;

                rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
                    answers.meal = meal;

                    rl.question("What's your favourite thing to eat for that meal?", (thing_eat) => {
                        answers.thingEat = thing_eat;

                        rl.question("Which sport is your absolute favourite?", (sport) => {
                            answers.sport = sport;

                            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (power) => {
                                answers.superpower = power;

                                const paragraph = `
                                    Thank you for your valuable feedback: ${answers.thinkOfNode}
                                    Your name is: ${answers.name}
                                    Your favorite activity is: ${answers.activity}
                                    You listen to: ${answers.listen}
                                    Your favorite meal is: ${answers.meal}
                                    Your favorite thing to eat for that meal is: ${answers.thingEat}
                                    Your favorite sport is: ${answers.sport}
                                    Your superpower is: ${answers.superpower}
                                `;
                                console.log(paragraph);
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});
