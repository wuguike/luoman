
var m=1;
var timer;
function run(){


				/*var n=Math.abs(eval($(".tabpic_content").css("left").replace("px",""))/$(".tabpic").width());
   				$(".tabpic .tabpic_pages li").eq(n+1).addClass('current').siblings('.current').removeClass('current');

   				if(n==$(".tabpic a").length-1){
   					$(".tabpic .tabpic_pages li").eq(0).addClass('current').siblings('.current').removeClass('current');
   					$(".tabpic_content").animate({left:"0px"},500);
   				}else{
					$(".tabpic_content").animate({left:"-="+$(".tabpic").width()+"px"},300);
   				}

          */

       			/*$(".tabpic_content").animate({left:$(".tabpic").width()*-1+"px"},300,function(){
       				$(".tabpic .tabpic_content a").eq(0).insertAfter($(".tabpic .tabpic_content a:last"));
       				$(".tabpic_content").css("left",0);
       			});

       			$(".tabpic .tabpic_pages li").eq(m%$(".tabpic a").length).addClass('current').siblings('.current').removeClass('current');
       			m++;*/      			

       			

       			$(".tabpic_content").stop(true,true).animate({left:"-="+$(".tabpic").width()+"px"},600,function(){  	
       				var n=Math.abs(eval($(".tabpic_content").css("left").replace("px",""))/$(".tabpic").width());			
       				if(n+1==$(".tabpic a").length){
       					$(".tabpic_content").css("left",0);
       					n=0;
       				}
       				$(".tabpic .tabpic_pages li").eq(n).addClass('current').siblings('.current').removeClass('current');
       				$(".tabpic_title").html($(".tabpic_content img").eq(n).attr("alt"));
       			});

       		}

          $(function(){
           $(".tabpic").children().wrapAll('<div class="tabpic_content"></div>').end().append('<div class="tabpic_title"><h4></h4></div>').append('<ul class="tabpic_pages"></ul>');

           $(".tabpic a").each(function(i){
            $(".tabpic .tabpic_pages").append("<li></li>");
          })

           $(".tabpic .tabpic_pages li:first").addClass('current');
           $(".tabpic_title").html($(".tabpic_content img:first").attr("alt"));


           $(".tabpic_content a:first").clone(true).appendTo($(".tabpic_content"))
           $(".tabpic_content").width($(".tabpic").width()*$(".tabpic a").length);



           timer=setInterval("run()",2000)


           $(".tabpic").hover(function(){
            clearInterval(timer);
          },function(){
            timer=setInterval("run()",2000)
          })

           $(".tabpic .tabpic_pages li").click(function(){
            $(this).addClass('current').siblings('.current').removeClass('current');
            var n=$(this).index(".tabpic .tabpic_pages li");
            $(".tabpic_content").stop(true,true).animate({left:$(".tabpic").width()*n*-1+"px"},500);
          })

         })

