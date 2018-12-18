

// console.log("Sanity Check")
$(document).ready(()=>{
    // console.log("Sanity Check")
    //   The DOM is done loading. Go get em JS!
        const stockForm = document.querySelector('.stock-form')
        console.log(stockForm)
        $('.stock-form').submit((event)=>{
            event.preventDefault()
            console.log(`event is ${event}`)
            const symbol = $('#symbol').val()
            $('#symbol').val(``)
            const symbols = symbol.split(`,`)
            symbols.forEach((s)=>{
                s=s.trim();
                console.log(symbols)
                // let symbol = 'goog'
                const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
                // getJSON method takes 2 args:
                // 1. where to get the JSON
                // 2. Function to run when I'm backs
                $.getJSON(url,(theDataJSFoundIfAny)=>{
                    // console.log(theDataJSFoundIfAny)
                    // if (theDataJSFoundIfAny.change>0){

                    // } else if(theDataJSFoundIfAny<0){

                    // }
                    $('#stock-body').append(`
                        <tr>
                            <td>${theDataJSFoundIfAny.symbol}</td>
                            <td>${theDataJSFoundIfAny.companyName}</td>
                            <td>${theDataJSFoundIfAny.latestPrice}</td>
                            <td>${theDataJSFoundIfAny.high}</td>
                            <td>${theDataJSFoundIfAny.low}</td>
                            <td>${theDataJSFoundIfAny.change}</td>
                            <td>${theDataJSFoundIfAny.primaryExchange}</td>
                            <td>${theDataJSFoundIfAny.close}</td>
                            <td>${theDataJSFoundIfAny.latestUpdate}</td>
                            <td>${theDataJSFoundIfAny.latestVolume}</td>
                            <td>${theDataJSFoundIfAny.extendedPrice}</td>
                            <!--<td>${theDataJSFoundIfAny.extendedChangePercent}</td> -->
                            <td>${theDataJSFoundIfAny.previousClose}</td>
                            <td>${theDataJSFoundIfAny.change}</td>
                            <td>${theDataJSFoundIfAny.changePercent}</td>
                            <td>${theDataJSFoundIfAny.avgTotalVolume}</td>
                            <!--<td>${theDataJSFoundIfAny.lpeRatio}</td> -->
                            <td>${theDataJSFoundIfAny.week52Low}</td>
                            <td>${theDataJSFoundIfAny.week52High}</td>
                        
                        </tr>
                    `)
                })
            })
            // $('#stock-table').DataTable()
         })
    })