 $(window).on("load", function() {
   
  var nameElement=$('input[name="name"]')[0]
  console.log(nameElement)

  var contentElement=$('[name="content"]')[0]
  console.log(contentElement)

  var form=$("form")

  form.on("submit", function(event){
  event.preventDefault();
  addComment(nameElement.value, contentElement.value)
  })

  function addComment(name,content){
  console.log(name,content)
  
    var section=$("<section></section>")
    $("div").append(section)
    var h2=$("<h2></h2>")
    h2.text(name);
    section.append(h2)
    var p=$("<p></p>")
    p.text(content)
    section.append(p)
    
    $button=$("<button>X</button>")
    section.append($button)
    $button.on("click", function(event) {
     $(this).parent().remove();
      
    });

    
  }
})