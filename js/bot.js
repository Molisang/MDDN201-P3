$(document).ready(function() {

  var outputArea = $("#chat-output");

  $("#user-input-form").on("submit", function(e) {

    // var botMessage = "Welcome!";

    // var rootPath = "img/inspirationImages/";

    // var imageFolderPath = "";

    // var imageFilePath = "";

    var randomImage = 0;//image from API
    
 	var searchNumber = 0;

 	//Categories for image searching
 	var category = new Array(6);
 	category[0] = "color+"
 	category[1] = "design+";
 	category[2] = "detail+";
 	category[3] = "material+";
 	category[4] = "texture+";
 	category[5] = "photography+";
 	var randomCategory = 0;

    e.preventDefault();
    
    var message = $("#user-input").val();
    
    outputArea.append(`
      <div class='bot-message'>
        <div class='message'>
          ${message}
        </div>
      </div>
    `);

    // Conversation desgin
	if(message.toLowerCase() == "hello" || message.toLowerCase() == "hi" ){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          Hi, how are you?
		        </div>
		      </div>
		    `);
	}
	else if(message.toLowerCase() == "???" || message.toLowerCase().includes("no idea")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          If you totally have no idea for searching, how about starting it from your hobbies, habits or favorite sports? Or you can send a blank message as your keyword, maybe you can get a surprise:-) 
		        </div>
		      </div>
		    `);
	}
	else if(message.toLowerCase().includes("who"))
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          I'm an inspirations bot. I can show you image relate to your idea. What idea do you want to search first?
		        </div>
		      </div>
		    `);
	else if(message.toLowerCase().includes("what"))
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          Hi, I can show you some images as inspirations about your typing. Would you want to search a key word first?
		        </div>
		      </div>
		    `);
	else if(message.toLowerCase().includes("how")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          How about typing a keyword to check it first?
		        </div>
		      </div>
		    `);
		// console.log(worked);
	}
	else if(message.toLowerCase().includes("shit") || message.toLowerCase().includes("fuck") || message.toLowerCase().includes("fucking")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          Sorry, what can I help?
		        </div>
		      </div>
		    `);
	}
	else if(message.toLowerCase().includes("website") || message.toLowerCase().includes("websites")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          If you are dissatisifed with the result, you can check more inspirations through these websites: <a href="https://www.behance.net/">Behance</a>, <a href="https://dribbble.com/">Dribble</a>, <a href="https://www.pinterest.com/">Pinterest</a>. Hope it helps your project:-)
		        </div>
		      </div>
		    `);
	}
	else if(message.toLowerCase().includes("satisfied")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          Thank you:-)
		        </div>
		      </div>
		    `);
	}
	else if(message.toLowerCase().includes("Thank you") || message.toLowerCase().includes("Thanks")){
		outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          My pleasure:-)
		        </div>
		      </div>
		    `);
	}
	else
	{	
		// message = "design+" + message;
		randomCategory = parseInt(Math.random() * (6 - 0) + 0);
		var Category = category[randomCategory];
		message = Category +message;

		var reuslt = "";
		var jsonResponse= "";

		var xhttp = new XMLHttpRequest();
		xhttp.open("get", "https://pixabay.com/api/?key=6797729-97a95ebc6ffdd8d937106765e&q="+message+"&image_type=photo", false);
		xhttp.send();
		jsonResponse = JSON.parse(xhttp.responseText);

		if(jsonResponse.totalHits == 0){
			outputArea.append(`
		      <div class='user-message'>
		        <div class='message2'>
		          Sorry, I don't have any image for you.
		        </div>
		      </div>
		    `);
		    console.log(message);
		}
		else{
			randomImage = parseInt(Math.random() * (10 - 0) + 0);
			var imageUrl = jsonResponse.hits[randomImage].webformatURL.toString();

			if(imageUrl == null){
				outputArea.append(`
				  <div class='user-message'>  
				    <div class='message2'>
				      Sorry, there is no image for your requirements...
				    </div>
				  </div>
				`);
			}
			else{
				outputArea.append(`
				  <div class='user-message'>  
				    <div class='message2'>
				      <img src="${imageUrl}" style="width:150px;">
				    </div>
				  </div>
				  <div class='user-message'>  
				    <div class='message2'>
				      Do you want to know more about ${$("#user-input").val()}? If you are interested in this image, you can check it <a href="${imageUrl}">here</a>.
				    </div>
				  </div>
				`);

				console.log(imageUrl);
				console.log(message);

			}
			
		}			

		$('#chat-output').scrollTop( $('#chat-output')[0].scrollHeight);
	}

    // // Control bot message
    // if(imageFolderPath == ""){
    //   setTimeout(function() {//setTimeout(code,millisec)
    //     outputArea.append(`
    //       <div class='user-message'>
    //         <div class='message'>
    //           ${botMessage}
    //         </div>
    //       </div>
    //     `);
    //   }, 250);
    // }
    // else{
    //   // Get random index for retriving image
    //   randomImageIndex = parseInt(Math.random() * (4 - 0) + 0);

    //   imageFilePath = imageFolderPath + randomImageIndex.toString() + ".jpg";
     
    //   setTimeout(function() {
    //     outputArea.append(`
    //       <div class='user-message'>  
    //         <div class='message'>
    //           <img src="${imageFilePath}" style="width:60px;height:45px;">
    //         </div>
    //       </div>
    //     `);
    //   }, 250);
    // }   
    
    $("#user-input").val("");
    
  });
});

var main = function() {
$('.ToggleButton').click(function() {
    $('#bot').slideToggle(500);
});

// $('.ToggleButton').mouseenter(function(){
// 	$('.ToggleButton').css("transform","scale(1.7,1.7)");
// });
// $('.ToggleButton').mouseleave(function(){
// 	$('.ToggleButton').css("transform","scale(1,1)");
// });

$('.label-all').click(function(){
	$('.colors-item').show(500);
	$('.textures-item').show(500);
	$('.textures-item').show(500);	
	$('.lightShawdow-item').show(500);
})
$('.label-colors').click(function(){
	$('.colors-item').show(500);
	$('.textures-item').hide(500);
	$('.materials-item').hide(500);	
	$('.lightShawdow-item').hide(500);
})
$('.label-materials').click(function(){
	$('.materials-item').show(500);
	$('.colors-item').hide(500);
	$('.textures-item').hide(500);
	$('.lightShawdow-item').hide(500);
})
$('.label-textures').click(function(){
	$('.colors-item').hide(500);
	$('.textures-item').show(500);
	$('.materials-item').hide(500);	
	$('.lightShawdow-item').hide(500);

})
$('.label-lightShawdow').click(function(){
	$('.colors-item').hide(500);
	$('.textures-item').hide(500);
	$('.materials-item').hide(500);	
	$('.lightShawdow-item').show(500);
})
};
$(document).ready(main);

