let sales = [
    { item: "tv", price: 5000, quantity: 0, amount: 0 },
    { item: "vtr", price: 2500, quantity: 0, amount: 0 },
    { item: "camera", price: 1500, quantity: 0, amount: 0 },
    { item: "computer", price: 3000, quantity: 0, amount: 0 },
    { item: "smartphone", price: 2000, quantity: 0, amount: 0 }
];

$(document).ready( function() {
    for ( let item of sales ) {
        $( "#items" ).append( `<option name="${item.item}">${item.item}</option>` );
    }

    $( "#save" ).click( function() {
        let itemname = $( "#items option:selected" ).text();
        let quantity = parseInt( $( "#quantity" ).val() );

        for ( let item of sales ) {
            if ( item.item === itemname ) {
                item.quantity += quantity;
                item.amount = item.price * item.quantity;
            }
        }
    });

    $( "#printsales" ).click( function() {
        for ( let item of sales ) {
            $( "tbody" ).append( `<tr><td>${item.item}</td><td>${item.price}</td><td>${item.quantity}</td><td>${item.amount}</td></tr>` );
        }
    });

    $( "#graphsales" ).click( function() {
        let amounts = [];
        let ticks = [];

        for ( let item of sales ) {
            amounts.push( item.amount );
            ticks.push( item.item );
        }

        console.log( amounts );
        console.log( ticks );

        let plot1 = $.jqplot( 'chartdiv', [amounts], {
            title: '판매 현황',
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks,
                    label: '품목',
                    labelRenderer: $.jqplot.canvasTextRenderer
                },
                yaxis: {
                    labelRenderer: $.jqplot.canvasAxisLabelRenderer,
                    label: '판매액'
                }
            }
        });
        console.log( plot1 );
    });
});
