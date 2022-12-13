import { v4 as uuidv4 } from 'uuid';

export class GameData {
    rowCount = 25;
    bear = {
        name: 'bear',
        value: 10,
        image: 'https://www.svgrepo.com/show/430022/bear.svg',
        rollChange: 1
    };
    bass = {
        name: 'bass',
        value: 20,
        image: 'https://www.svgrepo.com/show/430021/bass.svg',
        rollChange: 2
    };
    blueWhale = {
        name: 'blueWhale',
        value: 50,
        image: 'https://www.svgrepo.com/show/430027/blue-whale.svg',
        rollChange: 4,
    };
    buffalo = {
        name: 'buffalo',
        value: 100,
        image: 'https://www.svgrepo.com/show/430029/buffalo.svg',
        rollChange: 8,
    };
    bat = {
        name: 'bat',
        value: 250,
        image: 'https://www.svgrepo.com/show/430020/bat.svg',
        rollChange: 16,
    };
    butterflyfish = {
        name: 'butterflyfish',
        value: 500,
        image: 'https://www.svgrepo.com/show/430034/butterflyfish.svg',
        rollChange: 32,
    };
    animals = [this.bear, this.bass, this.blueWhale, this.buffalo, this.bat, this.butterflyfish];

    async generateRandomAnimal(): Promise<GameEntity> {
        let animal = this.animals[Math.floor(Math.random() * this.animals.length)];

        if (animal.rollChange === Math.floor(Math.random() * animal.rollChange + 1)) {
            const entity = new GameEntity(animal.value, animal.rollChange, animal.image, animal.name)
            return entity
        }
        else return await this.generateRandomAnimal()
    }
}

export class GameEntity {
    
    id = uuidv4();
    value = 0;
    roll_chance = 0;
    image_url = ''
    entity_name = ''

    constructor(value: number, rollChance: number, imageUrl: string, entity_name: string) {
        this.value = value;
        this.roll_chance = rollChance;
        this.image_url = imageUrl;
        this.entity_name = entity_name;
    }
}




