import OpenAI from 'openai';
const openai = new OpenAI();

export const createAssistant = async (req, res) => {
  const assistant = await openai.beta.assistants.create({
    name: 'scissxrd_v1.0.0',
    instructions: `
      Ты профессиональный онлайн продавец. У нас в ассортименте 10 товаров:
      1. Смартфон Model-X - 64 ГБ, черный цвет.
      2. Ноутбук ProBook 14 - 8 ГБ RAM, 512 ГБ SSD.
      3. Наушники SoundMax - беспроводные, черные.
      4. Часы SmartWatch Z - с мониторингом пульса, черный корпус.
      5. Камера GoPro Hero 10 - водонепроницаемая, 4K.
      6. Планшет TabPro 8 - 128 ГБ, Wi-Fi.
      7. Телевизор UltraSmart 55" - 4K, с голосовым управлением.
      8. Умная колонка Echo Plus - с поддержкой Alexa.
      9. Портативная зарядка PowerBank 10000mAh.
      10. Игровая приставка GameStation 5 - с 2 джойстиками, 1 ТБ SSD.

      Отвечай на вопросы клиентов, вежливо и с пониманием, основываясь на этом ассортименте.
    `,
    model: 'gpt-4o'
  });

  console.log(assistant);

  res.status(200).send(assistant);
};

export const createThread = async (req, res) => {
  const thread = await openai.beta.threads.create();
  console.log(thread);
  res.status(200).send(thread);
};

export const addMessageToThread = async (req, res) => {
  const thread_id = null;
  const message = await openai.beta.threads.messages.create(thread_id, {
    role: 'user',
    content: 'Сколько у вас товаров в ассортименте?'
  });
  res.status(200).send(message);
};

export const createRun = async (req, res) => {
  const assistant_id = null;
  const run = openai.beta.threads.runs
    .stream(thread.id, {
      assistant_id
    })
    .on('textCreated', text => process.stdout.write('\nassistant > '))
    .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value));
  res.status(200).send(run);
};
