import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
    ):string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    
    static validateStructure = (aBlock: Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" && 
        typeof aBlock.timestamp === "number" && 
        typeof aBlock.data === "string"

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "12121212121212", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const crerateNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getLatestBlock();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash,
        newTimeStamp,
        data
    );
    const newBlock : Block = new Block(
        newIndex, 
        newHash,
        previousBlock.hash,
        data,
        newTimeStamp
    ); return newBlock;
};

const isBlockValid = (candidateBlock: Block, previousBlock:Block) : boolean => {
    if(!Block.validateStructure(candidateBlock)){
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if (){
        
    }

};

console.log(crerateNewBlock("hello"), crerateNewBlock("byebye"));






export {};