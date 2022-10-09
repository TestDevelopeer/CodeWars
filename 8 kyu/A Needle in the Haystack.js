function findNeedle(haystack) {
    let needlePosition;
    haystack.forEach((elem, index) => {
      if (elem === 'needle') {
        needlePosition = index;
      }
    })
    return `found the needle at position ${needlePosition}`;
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])