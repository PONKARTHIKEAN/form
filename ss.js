function dateIsValid(dateStr) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (dateStr.match(regex) === null) {
      return false;
    }
  
    const [month, day, year] = dateStr.split('/');
  
    // 👇️ format Date string as `yyyy-mm-dd`
    const isoFormattedStr = `${year}-${month}-${day}`;
  
    const date = new Date(isoFormattedStr);
  
    const timestamp = date.getTime();
  
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return false;
    }
  
    return date.toISOString().startsWith(isoFormattedStr);
  }
  
  console.log(dateIsValid('01/18/2022')); // 👉️ true
  console.log(dateIsValid('01/35/2022')); // 👉️ false
  console.log(dateIsValid('hello')); // 👉️ false