module.exports = async function (req, res, db) {
      /** GET
         *  Required query params
         *  clueId: The id of the clue.
         *  uid: The id of the team accessing the clue.
         */
    /*   let params = [ "uid"];
       console.log(req.body)
       for(let param of params){
           if(!req.query[param]){
               res.status(400).send("Missing parameter in query params: " + param);
               return;
           }
       }*/



    try {
        
        /// Check if this clue is allowed to be accessed by this team.
        let teams = await db.collection("teams").find({uid:req.headers.uid}).toArray();
        if(teams==null){
            res.status(404).send("Team not found.");
            return;
        }

     let teamsFiltered = teams.map(team => {
        return {
            teamName:team.teamName,
            score:team.score,
            unlockedClues:team.unlockedClues.length,
            level:team.unlockedClues.level, 
            lastSubmissionTimeStamp:team.lastSubmissionTimeStamp??null,
            uid:team.uid
        };
    });
     
    console.log(teamsFiltered)
     return res.status(200).json(teamsFiltered);
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}