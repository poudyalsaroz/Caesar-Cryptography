const caesar = function() {
	
	var words = arguments[0];
	var wordCopy = words.toUpperCase();
	var num = arguments[1];
	var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
	"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var i;
	var j;
	var value = "";
	var charCase = false;
	var compared = false;
	
	for(i = 0; i < words.length; i++) {
		if(words[i] == words[i].toLowerCase()){
			charCase = true;
		}
			for(j = 0; j < alphabets.length; j++){	
				if(wordCopy[i] == alphabets[j]){
					compared = true;
					if(num > 0){
						if((j + num) > 25){
							
							value += alphabets[(j+num) % alphabets.length];
						}
						else{
							value += alphabets[j+num];
						}
					}
					if(num < 0){
						if((j + num) < 0){
							value += alphabets[(alphabets.length - Math.abs(j+ num) % 26) % 26]; 
						}
						else{
							value += alphabets[j+num];
						}
					}	
				}
			}	
			if(charCase){
				var valueSlice = value.slice(0,value.length-1);
				value = valueSlice + value.charAt(value.length - 1).toLowerCase();
			}
			if(!compared){
				value += words[i];
			}
			charCase = false;
			compared = false;
		}
		return value;
	}

module.exports = caesar
