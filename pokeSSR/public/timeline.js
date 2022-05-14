

function loadEvents() {
    $.ajax({
        url: "https://dry-waters-76801.herokuapp.com/timeline/getAllEvents",
        type: "get",
        success: (x) => {
            console.log(x)
            res = ''
            for (i = 0; i < x.length; i++) {
                res += `
                <div class= "history"> 
                    Event  Text - ${x[i].text}
                <br> 
                    Event  time - ${x[i].time}
                <br> 
                    Event  Hits - ${x[i].hits}

                <br> 
                    <button class="LikeButton" id="${x[i]["_id"]}"> Like! </button>
                    <button class="DeleteButton" id="${x[i]["_id"]}"> Delete! </button>
                </div>

                `
            }
            $("main").html(res)
        }
    })
}


function increamentHitsByOne() {
    $.ajax({
        url: `https://dry-waters-76801.herokuapp.com/timeline/inreaseHits/${this.id}`,
        type: "get",
        success: (e) => {
            console.log(e)
        }
    })
}

function deleteEntry() {
    $.ajax({
        url: `https://dry-waters-76801.herokuapp.com/timeline/remove/${this.id}`,
        type: "get",
        success: (e) => {
            console.log(e)
        }
    })
    $("main").load(location.href)
}


$(document).ready(function () {
    loadEvents()
    $("body").on('click', '.LikeButton', increamentHitsByOne)
    $("body").on('click', '.DeleteButton', deleteEntry)

})