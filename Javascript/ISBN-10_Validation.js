function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    var lastISBN = isbn[9];
    if(lastISBN === 'X'){
      lastISBN = 10;
    }
    return ((((isbn[0]*1)+(isbn[1]*2)+(isbn[2]*3)+(isbn[3]*4)+(isbn[4]*5)+(isbn[5]*6)+(isbn[6]*7)+(isbn[7]*8)+(isbn[8]*9)+(lastISBN*10)) % 11) == 0)
  }