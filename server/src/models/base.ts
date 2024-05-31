import fs from 'fs';

interface IBase {
    id: string;
}

export class BaseData<T extends IBase> {
    protected data: T[];
    protected filePath: string;
    protected collectionName: string;

    constructor(collectionName: string) {
        this.filePath = 'src/data/phoenix.json';
        this.collectionName = collectionName;
        this.data = this.loadData();
    }

    async fetchAll(): Promise<T[]> {
        return this.data;
    }

    async getId(id: string): Promise<T | undefined> {
        return this.data.find(item => item.id === id);
    }

    async add(newItem: T): Promise<T> {
        this.data.push(newItem);
        this.saveData();
        return newItem;
    }

    async delete(id: string): Promise<boolean> {
        const originalLength = this.data.length;
        this.data = this.data.filter(item => item.id !== id);
        this.saveData();
        return originalLength > this.data.length;
    }
    
    async update(id: string, newData: Partial<T>): Promise<T | undefined> {
        const item = this.data.find(item => item.id === id);
        if (item) {
            Object.assign(item, newData);
            this.saveData();
        }
        return item;
    }

    loadData(): T[] {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            const allData = JSON.parse(fileContent);
            return allData[this.collectionName] || [];
        } catch (err) {
            console.error(`Failed to load data from ${this.filePath}`, err);
            return [];
        }
    }
    
    saveData(): void {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            const allData = JSON.parse(fileContent);
            allData[this.collectionName] = this.data;
            fs.writeFileSync(this.filePath, JSON.stringify(allData, null, 2));
        } catch (err) {
            console.error(`Failed to save data to ${this.filePath}`, err);
        }
    }    
}
