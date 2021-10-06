var pronoun = ['the', 'our', 'yours', 'mine'];
var adj = ['great', 'big', 'small', 'faster'];
var noun = ['jogger', 'racoon', 'tiger', 'dog'];
var extention = ['.es','.co', '.eu', '.fx']

function website(pronoun, adj, noun, extention) {
    return pronoun + adj + noun + extention
}



for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            for (var l = 0; l < extention.length; l++){
            console.log(website(pronoun[i], adj[j], noun[k], extention[l]));
            }
        }
    }
}

  