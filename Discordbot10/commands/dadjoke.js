const Discord = require('discord.js')

module.exports = {
    name: 'dadjoke',

    execute(message, args) {
        const client = message.client

        let joke = [
            `Dad, did you get a haircut? No I got them all cut.`,
            `What do you call a Mexican who has lost his car? Carlos. `,
            `Dad, can you put my shoes on? No, I don’t think they’ll fit me. `,
            `Can I watch the TV? Dad: Yes, but don’t turn it on. `,
            `I would avoid the sushi if I was you. It’s a little fishy`,
            `What do you call a fake noodle? An Impasta. `,
            `You know, people say they pick their nose, but I feel like I was just born with mine. `,
            `“Every time I hurt myself, even to this day, my dad says, ‘The good news is..it’ll feel
            better when it quits hurting.'” `,
            `Want to hear a joke about paper? Nevermind it’s tearable`,
            `Did you hear about the restaurant on the moon? Great food, no atmosphere.`,
            `“I’ll call you later!”- “Please don’t do that. I’ve always asked you to call me Dad!” `,
            `Q: Why did the cookie cry? A: Because his father was a wafer so long! `,
            `What did the mountain climber name his son? Cliff`,
            `This graveyard looks overcrowded. People must be dying to get in there. `,
            `“My dad literally told me this one last week: ‘Did you hear about the guy who invented
            Lifesavers? They say he made a mint.’”`,
            `“Whenever the cashier at the grocery store asks my dad if he would like the milk in a
            bag he replies, ‘No, just leave it in the carton!’” `,
            `I got so angry the other day when I couldn’t find my stress ball. `,
            `If I had a dime for every book I’ve ever read, I’d say: “Wow, that’s coincidental.”`,
            `I’m not indecisive. Unless you want me to be. `,
            `How many apples grow on a tree? All of them. `,
            ` How does a penguin build it’s house? Igloos it together. `,
            ` “Me: ‘Dad, make me a sandwich!’ Dad: ‘Poof, You’re a sandwich!’” `,
            `“I heard there was a new store called Moderation. They have everything there `,
            `A steak pun is a rare medium well done`,
            `“How can you tell if a ant is a boy or a girl? They’re all girls, otherwise they’d be uncles.” `,
            `Milk is also the fastest liquid on earth – its pasteurized before you even see it `,
            `“What’s Forrest Gump’s password? 1forrest1” `,
            `The only thing worse than having diarrhea is having to spell it. `,
            `I asked my friend to help me with a math problem. He said: “Don’t worry; this is a piece
            of cake.” I said: “No, it’s a math problem.”    `,
            `I keep trying to lose weight, but it keeps finding me. `,
            `I don’t play soccer because I enjoy the sport. I’m just doing it for kicks. `,
            `Did I tell you the time I fell in love during a backflip? I was heels over head.`,
            `I used to work in a shoe recycling shop. It was sole destroying.  `,
            `Why do you never see elephants hiding in trees? Because they’re so good at it. `,
            `Where did the one-legged waitress work? IHOP! `,
            `What happened when the two antennas got married? Well, the ceremony was kinda
            boring, but the reception was great!`,
            `What did one snowman say to the other one? “Do you smell carrots?”`,
            `How do you make a tissue dance? You put a little boogie in it! `,
            `Why did the blonde stare at the orange juice container? It said concentrate! `,
            `If your nose runs and your feet smell, you are built upside down! `,
            `I went to buy some camouflage trousers the other day, but I couldn’t find any.`,
            `Q: How do you organize an outer space party? A: You planet. `,
            `Q: What do you call a belt with a watch on it?A: A waist of time. `,
            `What kind of shoes does a thief wear? Sneakers`,
            `A jumper cable walks into a bar. The bartender says, “I’ll serve you, but don’t start
            anything.” `,
            `An invisible man marries an invisible woman. The kids were nothing to look at either`,
            `I went to a seafood disco last week… and pulled a mussel. `,
            `A man woke up in a hospital after a serious accident. He shouted, Doctor, doctor, I can’t
            feel my legs!” The doctor replied, “I know you can’t I’ve cut off your arms!” `,
            `Do you know where you can get chicken broth in bulk? The stock market`,
            `. What did the ocean say to the shore? Nothing, it just waved. `,
            `. “What’s ET short for? Because he’s only got little legs.” `,
            `Why do crabs never give to charity? Because they’re shellfish. `,
            'What do you call an Argentinian with a rubber toe? Roberto',
            '“What do you call a man with no nose and no body? Nobody nose.” ',
            'I cut my finger chopping cheese, but I think that I may have greater problems',
            'What do you call a fish with no eyes? A fshhhh. ',
            '“What do you call a man with no arms and no legs lying in front of your door? Matt.” ',
            'My cat was just sick on the carpet, I don’t think it’s feline well. '
        ]


        const dadJoke = Math.floor(Math.random() * joke.length)


        message.channel.send(joke[dadJoke])

    }
}