var ansList=[
    '1 AB BC BD BC BD BC C AC AB',
    '2 AC AC BD C C BD AD D A',
    '3 BD BD AD AD AD BC D CD BD',
    '4 BC BC A A A BC CD CD BC',
    '5 CD CD BC AC B AB BC CD CD',
    '6 AB CD CD BD CD AB BD AB BD',
    '7 BD BD A AD CD BD BC AD BD',
    '8 CD CD AB CD AB AB AB AB AB',
    '9 AB B BD AC AD AC AB AC AB',
    '10 CD CD BC AB AC AB CD AB AD'
]
var resList=""
var resTitle=""
var count=1;

var url = 'https://6916921.com/';
var title = document.title;


$(function(){
    $('#btn-start').click(function(){
        $(window).scrollTop("0");
        $('#home-box').fadeOut(150);
        $('#qa-box1').fadeIn(500);
        var x = document.getElementById("myAudio");
        function playAudio() {
            x.play();
        }
        playAudio();
    })

    $('.qa-item').click(function(event){

        if(!resList){ resList="" }

        var allQa=$('.qa-box');
        var now='#qa-box'+count;
        var obj = event.srcElement ? event.srcElement : event.target;

        var res=""
        var classList=$(this).attr("class").split(" ");
        for(let i=0;i< classList.length;i++){
            for(let j=1;j< 5;j++){
                if(classList[i]===("qa-item"+j)){
                    switch (j) {
                        case 1:
                          res='A';
                          break;
                        case 2:
                          res='B';
                          break;
                        case 3:
                          res='C'
                          break;
                        case 4:
                          res='D'
                          break;
                        default:
                          res=''
                      }
                    break
                }
            }
        }

        if(resTitle !== obj.offsetParent.innerText){
            resTitle= obj.offsetParent.innerText
            var ans=ansList[count-1].split(" ")
            for(let i=0;i< ans.length;i++){
                if(ans[i].indexOf(res)>-1){
                    resList=resList.concat(i)
                }
            }

            if(count<allQa.length){
                count = count+1
                var next='#qa-box'+count;
            }else{
                var res={}
                for(let i=1;i< 10;i++){
                    var r = resList.split(i).length - 1
                    if(!res.val){
                    res.name=i
                    res.val=r
                    }else if(r>res.val){
                    res.name=i
                    res.val=r
                    }
                }
                var next='#result-box'+res.name;
                resTitle=res.name
                $(".cover-box").css({ display: "block" });
                $("body").addClass("fixed");
            }
            $(window).scrollTop("0");
            $(now).fadeOut(150);
            $(next).fadeIn(500);
        }
    })
})

$(function(){
    $('.cover-pop-box .close').click(function(){
        $('.cover-box').hide();
        $('body').removeClass('fixed');
    })
    $("#copyBtn").click(function(){
        const el = document.createElement('textarea');
        el.value = 'https://6916921.com/';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        //
        $("#share-box").css({ display: "none" })
        $("#sharefinish-box").css({ display: "block" })
      } )
    $('#close-sharefinish-box').click(function(){
        $('.cover-box').hide();
        $('body').removeClass('fixed');
    })


    $("#shareLink1").click(function(){//微信
    })
    $("#shareLink2").click(function(){//QQ好友
        let link =`https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`;
        window.open(link, "_blank", "height=600,width=800");

        $("#share-box").css({ display: "none" })
        $("#sharefinish-box").css({ display: "block" })
    })
    $("#shareLink3").click(function(){//新浪微博
        let link =`http://service.weibo.com/share/share.php?url=${url}&title=${title}`;
        window.open(link, "_blank", "height=600,width=800");

        $("#share-box").css({ display: "none" })
        $("#sharefinish-box").css({ display: "block" })
    })
    $("#shareLink4").click(function(){//QQ空間
        let link =`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}`;
        window.open(link, "_blank", "height=600,width=800");

        $("#share-box").css({ display: "none" })
        $("#sharefinish-box").css({ display: "block" })
    })
});

// $(function(){
//     $('#play').click(function(){
//         $('#pause').show();
//         $('#play').hide();
//     })
//     $('#pause').click(function(){
//         $('#play').show();
//         $('#pause').hide();
//     })
// })
