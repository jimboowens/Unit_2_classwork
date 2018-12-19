$(document).ready(()=>{
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
                const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
                $.getJSON(url,function(theDataJSFoundIfAny){
                    console.log("this is the data JS found if any")
                    console.log(theDataJSFoundIfAny[1])
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
                    // let sortedInfo=Object.keys(theDataJSFoundIfAny).sort()
                    // for (i=0;i<(sortedInfo).length;i++){
                    //     let iteration = theDataJSFoundIfAny[(sortedInfo)[i]]
                    //     if (iteration>=0){
                    //         console.log (`this is ${iteration} and above or equal to zero`)
                    //         $('.'+sortedInfo[i]).css({
                    //         'color': 'green'
                    //     })
                    //     // console.log (this)
                    //     } else if(iteration<0){
                    //         console.log (`this is ${iteration} and below zero`)
                    //         $('.'+sortedInfo[i]).css({
                    //         'color': 'red'
                    //         })
                    //     } else{
                    //          $('.'+sortedInfo[i]).css({
                    //         'color': '#ae77af'
                    //         })
                    //     }                   
                    // }
                    for (key in theDataJSFoundIfAny){
                        let value = theDataJSFoundIfAny[key]
                        if (value>=0){
                            $('.'+key).css({
                            'color': 'green'
                        })
                        } else if(value<0){
                            $('.'+key).css({
                            'color': 'red'
                            })
                        } else{
                             $('.'+key).css({
                            'color': '#ae77af'
                            })
                        }                   
                    }
                 })
            })
            // $('#stock-table').DataTable()
        })
})