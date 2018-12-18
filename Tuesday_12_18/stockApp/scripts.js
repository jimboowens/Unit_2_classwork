

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
                $.getJSON(url,function(theDataJSFoundIfAny){
                    // console.log(theDataJSFoundIfAny)
                    $('#stock-body').append(`
                        <tr>
                            <td class="symbol">${theDataJSFoundIfAny.symbol}</td>
                            <td class="companyName">${theDataJSFoundIfAny.companyName}</td>
                            <td class="latestPrice">${theDataJSFoundIfAny.latestPrice}</td>
                            <td class="high">${theDataJSFoundIfAny.high}</td>
                            <td class="low">${theDataJSFoundIfAny.low}</td>
                            <td class="change">${theDataJSFoundIfAny.change}</td>
                            <td class="primaryExchange">${theDataJSFoundIfAny.primaryExchange}</td>
                            <td class="close">${theDataJSFoundIfAny.close}</td>
                            <td class="latestUpdate">${theDataJSFoundIfAny.latestUpdate}</td>
                            <td class="latestVolume">${theDataJSFoundIfAny.latestVolume}</td>
                            <td class="extendedPrice">${theDataJSFoundIfAny.extendedPrice}</td>
                            <td class="previousClose">${theDataJSFoundIfAny.previousClose}</td>
                            <td class="changePercent">${theDataJSFoundIfAny.changePercent}</td>
                            <td class="avgTotalVolume">${theDataJSFoundIfAny.avgTotalVolume}</td>
                            <td class="week52Low">${theDataJSFoundIfAny.week52Low}</td>
                            <td class="week52High">${theDataJSFoundIfAny.week52High}</td>
                        </tr>
                    `)
                    // let splitData = theDataJSFoundIfAny.split()
                    for (i=0;i<theData.length;i++)
                        if (splitData.val>0){
                            console.log (`this is ${this} and above zero`)
                            $(`.change`).css({
                            'color': 'green'
                        })
                        } else if(splitData<0){
                            console.log (`this is ${this} and below zero`)
                            $(`.change`).css({
                            'color': 'red'
                    })
                }                    
            })
        })
            // $('#stock-table').DataTable()
    })
})