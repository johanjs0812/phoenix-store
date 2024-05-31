import fs from 'fs';

const database: string = "src/data/phoenix.json";

async function connectToDb(): Promise<void> {
    console.log('Connecting to the database...');
    try {
        const data = await fs.promises.readFile(database, 'utf8');
        console.log('Database is connected successfully !');
        return JSON.parse(data);
    } catch (err) {
        console.error('Failed to connect to JSON database', err);
    }
};

export { connectToDb };
