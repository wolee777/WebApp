// 판매 관리
function accumulateQuantity( items, sales ) {
    let index;

    for ( let saleInfo of sales ) {
        console.log( `sale info : [ ${saleInfo.itemname} : ${saleInfo.quantity} ]` );
        index = items.findIndex( o => o.itemname === saleInfo.itemname );
        if ( index !== -1 ) {
            items[index].quantity += saleInfo.quantity;
        } else {
            console.log( `\tError: ${saleInfo.itemname} not found!!!` );
        }
    }
    console.log();
}

function calcAmount( items ) {
    const MAX = items.length - 2;
    const LAST = items.length - 1;
    for ( let i = 0; i <= MAX; ++i  ) {
        items[i].amount = items[i].price * items[i].quantity;
        items[LAST].total += items[i].amount;
    }
}
// 판매 현황표 출력
function printSalesTable( items, title ) {
    const MAX = items.length - 2;
    const LAST = items.length - 1;

    console.log( `\t${title}\n` );
    for ( let i = 0; i <= MAX; ++i  ) {
        console.log( `${items[i].itemname}\t\t${items[i].price}\t${items[i].quantity}\t${items[i].amount}` );
    }
    console.log( `\t\t총 매출액 : ${items[LAST].total}` );
    console.log();
}

// 상수 선언
const MAX_ITEM = 5;
const MAX_SALES = 20;

// 변수 선언
let items = [ { itemname: "tv", price:2500, quantity: 0, amount: 0 },
              { itemname: "vtr", price:2000, quantity: 0, amount: 0 },
              { itemname: "camera", price:1500, quantity: 0, amount: 0 },
              { itemname: "monitor", price:1000, quantity: 0, amount: 0 },
              { itemname: "smartphone", price:1800, quantity: 0, amount: 0 },
              { total : 0 }
            ]
let sales = [ { itemname: "tv", quantity: 3 }, { itemname: "computer", quantity: 1 },
              { itemname: "vtr", quantity: 2 }, { itemname: "camera", quantity: 4 },
              { itemname: "monitor", quantity: 2 }, { itemname: "tv", quantity: 2 },
              { itemname: "smartphone", quantity: 7 }, { itemname: "camera", quantity: 1 },
              { itemname: "vtr", quantity: 1 }, { itemname: "tv", quantity: 1 },
              { itemname: "smartphone", quantity: 1 }, { itemname: "smartphone", quantity: 2 },
              { itemname: "monitor", quantity: 6 }, { itemname: "camera", quantity: 3 },
              { itemname: "tv", quantity: 1 }, { itemname: "vtr", quantity: 2 },
              { itemname: "smartphone", quantity: 2 }, { itemname: "camera", quantity: 1 },
              { itemname: "keyboard", quantity: 3 }, { itemname: "smartphone", quantity: 1 },
            ]

// main
console.log( "\n판매 현황 관리 프로그램\n" );

// 판매 정보에 따른 수량 누적 및 판매 금액 계산
accumulateQuantity( items, sales );
calcAmount( items )

// 판매 현황표 출력
printSalesTable( items, "<<< 판매 현황표(입력순) >>>" );

items.sort( ( x, y ) => x.itemname > y.itemname );
printSalesTable( items, "<<< 판매 현황표(품목순) >>>" );

items.sort( ( x, y ) => x.amount < y.amount );
printSalesTable( items, "<<< 판매 현황표(판매금액순) >>>" );
