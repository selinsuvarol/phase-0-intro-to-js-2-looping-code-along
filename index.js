const names = ["Charlie", "Samip", "Ali"];


function writeCards(arr,event){
    let cards = [];
        for (let i=0;i<arr.length;i++){
            const newNames=[];
            cards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
        }
    return cards;
}

// console.log(writeCards(["Charlie", "Samip", "Ali"],"birtday"));

function countDown(x){
    while (x>0){
        console.log(x);
        x-=1;
    }
    console.log(x);
}
countDown(10);

