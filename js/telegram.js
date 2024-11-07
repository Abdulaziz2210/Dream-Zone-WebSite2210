const sendMessage = (e) => {
    e.preventDefault(); 
  
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Phone = document.getElementById("phone").value;
    const Message = document.getElementById("message").value;
  
    const my_text =`  %0A👤Name: ${Name}  %0A🔢Age: ${Email} %0A📞Phone: ${Phone} %0A✍🏻Message: ${Message}`;
  
    const chat_id = -1002320115900;
  
    const token = "7964898029:AAFGJD9niKupghygLg-5rKaotb5lMJicryI"; 
  
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
        
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    document.getElementById("phone").value = ''
    document.getElementById("message").value = ''
  
  }
