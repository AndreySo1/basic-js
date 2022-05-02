const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //hrow new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let newArr = [];

   for(let i=0; i< members.length; i++){
      if(typeof(members[i]) == 'string'){
         let first = members[i][0];
         newArr.push(first);
      };
   };

   if(!newArr.length) { return false;};

   let result = newArr.sort();
   
   return result.join('');
}

module.exports = {
  createDreamTeam
};
